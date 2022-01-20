import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { USER } from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private storage: SQLiteObject;
  usersList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      const conn = this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
      conn.then((db: SQLiteObject) => {
          this.storage = db;
          this.getFakeData();
      });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
 
  fetchDataList(): Observable<USER[]> {
    return this.usersList.asObservable();
  }

    // Render fake data
    getFakeData() {
      this.httpClient.get(
        'assets/dump.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getUserList();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
      });
    }

  // Get list
  getUserList(){
    return this.storage.executeSql('SELECT * FROM usertable', []).then(res => {
      let items: USER[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            user_name: res.rows.item(i).user_name,  
            process: res.rows.item(i).process
           });
        }
      }
      this.usersList.next(items);
    });
  }

  // Add
  addUser(user_name, process) {
    let data = [user_name, process];
    return this.storage.executeSql('INSERT INTO usertable (user_name, process) VALUES (?, ?)', data)
    .then(res => {
      this.getUserList();
    });
  }
 
  // Get single object
  getUser(id): Promise<USER> {
    return this.storage.executeSql('SELECT * FROM usertable WHERE id = ?', [id]).then(res => { 
      return {
        id: res.rows.item(0).id,
        user_name: res.rows.item(0).user_name,  
        process: res.rows.item(0).process
      }
    });
  }

  // Update
  updateUser(id, user: USER) {
    let data = [user.user_name, user.process];
    return this.storage.executeSql(`UPDATE usertable SET user_name = ?, process = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getUserList();
    })
  }

  // Delete
  deleteUser(id) {
    return this.storage.executeSql('DELETE FROM usertable WHERE id = ?', [id])
    .then(_ => {
      this.getUserList();
    });
  }
}