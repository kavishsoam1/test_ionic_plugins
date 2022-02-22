import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
  export class IndexedDbService {
    constructor() {}
    
    // var self = this;
    openDB(db) {

      var deferred = new Promise((resolve,reject)=>{
        // let deferred = $q.defer();
        var request = window.indexedDB.open("_pouch_" + db);
        console.log('deferred->',deferred);
        console.log('request -->>',request);
        request.onerror = function(event) {
            reject({ err: "Unable to retrieve data from database!" });
        };
        request.onsuccess = function(event) {
            //console.log("successfully connected to indexDB.");
            resolve(request.result);
        };
        console.log('deferred->',deferred);
        console.log('request -->>',request);
        
      });
      console.log('deferred->',deferred);
      return deferred;
    }

    async getDataFromTable(tableName, fieldName, fieldValue) {
     
      let deferred = new Promise(async(resolve,reject)=>{
        let response:any = await this.openDB(tableName);  
        console.log('Response kavish --->>>',response);
        var transaction = response.transaction(["by-sequence"]);
        var objectStore = transaction.objectStore("by-sequence");
  
        var request = objectStore.getAll();
  
        request.onerror = function(event) {
            reject("Unable to retrieve data from database!");
        };
  
        request.onsuccess = function(event) {
            // Do something with the request.result!
  
            if (request.result) {
  
                /* var data = Object.keys(request.result).map(function(item) {
                     return request.result.val.data[item].data;
                 });*/
                let data = request.result;
                /*  if (tableName != '_pouch_cityMaster') {
                     data = data.filter(function(item) {
                         return item == fieldValue;
                     });
                 } */
                if (fieldName && fieldValue) {
                    data = data.filter(function(item) {
                        return item[fieldName] == fieldValue;
                    });
                }
                if (tableName != '_pouch_cityMaster') {
                    data = data.filter(function(item) {
                        return item._deleted != true;
                    });
                }
                try {
                    data = data.sort(function(a, b) {
                        var key, returnData;
                        if (data[0].desc && a.desc && b.desc) {
                            key = 'desc';
                            returnData = a[key].charAt(0).toUpperCase().charCodeAt(0) - b[key].charAt(0).toUpperCase().charCodeAt(0);
                        } else if (data[0].text && a.text && b.text) {
                            key = 'text';
                            returnData = a[key].charAt(0).toUpperCase().charCodeAt(0) - b[key].charAt(0).toUpperCase().charCodeAt(0);
                        } else if (data[0].name && a.name && b.name) {
                            key = 'name';
                            returnData = a[key].charAt(0).toUpperCase().charCodeAt(0) - b[key].charAt(0).toUpperCase().charCodeAt(0);
                        } else {
                            returnData = data;
                        }
                        return returnData;
                    });
                } catch (ex) {
                    console.log(ex);
                    resolve(data);
                }
  
                resolve(data);
            } else {
                reject("data couldn't be found in your database!");
            }
        };
        
      })
      console.log(deferred);
      return deferred;
    }

    // this.getMasterFieldValue = function(tableName, fieldName, inputField, id) {
    //     return self.getDataFromTable(tableName, inputField, id).then(function(data) {
    //         return data.map(function(item) {
    //             return item[fieldName];
    //         })
    //     })
    // }

  }