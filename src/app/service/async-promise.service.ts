import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
  
  export class AsyncPromiseService {
      constructor(
        private http : HttpClient
      ) {}
      private db!: IDBDatabase;

      initiateDB():Promise<void> {
        if(this.db){
          this.db.close();
        }

        return new Promise(resolve=> {
          let openDB = indexedDB.open('Plil_kavish',1);

          openDB.onupgradeneeded = event => {
            const target : EventTarget | null = event.target;
            const db = (target as any).result;
            const store = db.createObjectStore('kavishSync', {keypath : 'id'})
            store.createIndex('Gemini','Gemini');
            store.createIndex('Solutions','Solutions');
          }

          openDB.onsuccess = res => {
            this.db = (res.target as any).result;

            this.db.onerror = err => {
              console.log(err)
            }

            resolve();
          }
        })
      }


      createUpdateDB() : Promise<void> {
        let promise = this.initiateDB();
        
        promise = promise.then(()=> this.loadApiData('https://jsonplaceholder.typicode.com/users'))

        return promise
      }


      loadApiData(apiUrl) : Promise<void> {
        return new Promise(resolve=> {
          this.http.get(apiUrl).subscribe((res:any)=>{
            console.log('kavish before creating transaction',res);
            const dbTransaction = this.db.transaction(['kavishSync'],'readwrite');
            const store = dbTransaction.objectStore('kavishSync');
            console.log('api resonse',res);

            for(const row of res){
              store.put({
                name : row.name,
                username : row.username,
                email : row.email,
                phone : Number(row.phone),
                website : row.website,
                id : row.id
                //address : row.address
              })
            }

            dbTransaction.oncomplete = e => {
              console.log(store);
              resolve();
            }
          },err=>{
            console.log(err);
          })
        })
      }
  }