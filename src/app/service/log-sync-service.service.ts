// import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
// })


// export class LogSyncService {
//     // var self = this;

//     getLogsAndSync() {
//         return eAppFormService.getMasterStatus('dataLogger')
//             .then(function(logsData) {
//                 if (logsData.length > 0) {
//                     return self.syncLogs(logsData);
//                 } else {
//                     return new Promise(function(resolve, reject) {});
//                 }
//             }).then(function(res) {
//                 console.log('logs syncing successfull');
//                 deleteDataService.deleteAllDataFromTable('dataLogger');
//                 return;
//             }).catch(function(error) {
//                 console.log('logs syncing failed');
//                 return;
//             });
//     }

//     syncLogs(logsData) {
//         var deferred = $q.defer();
//         genericServices.httpPostCall(appConstants.serverUrl + '/saveLogsData', logsData).then(function(res) {
//             console.log('sync logs', res);
//             if (!res.data.err) {
//                 deferred.resolve(res.data.data);
//             } else {
//                 deferred.reject('Error');
//             }
//         });
//         return deferred.promise;
//     }

//     getReDiLogsAndSync() {
//         return eAppFormService.getMasterStatus('resumeDigitalLogs')
//             .then(function(reDilogsData) {
//                 console.log("resumeDigitalLogs----------",reDilogsData);
                
//                 if (reDilogsData.length > 0) {
//                     return self.syncReDiLogs(reDilogsData);
//                 } else {
//                     return new Promise(function(resolve, reject) {});
//                 }
//             }).then(function(res) {
//                 console.log('resumeDigitalLogs syncing successfull');
//                 deleteDataService.deleteAllDataFromTable('resumeDigitalLogs');
//                 return;
//             }).catch(function(error) {
//                 console.log('resumeDigitalLogs syncing failed');
//                 return;
//             });
//     }

//     syncReDiLogs(reDilogsData) {
//         var deferred = $q.defer();
//         genericServices.httpPostCall(appConstants.serverUrl + '/saveResumeDigitalLogsData', reDilogsData).then(function(response) {
//             console.log('resumeDigitalLogs response -----------', response);
//             if (!response.data.err) {
//                 deferred.resolve(response.data.data);
//             } else {
//                 deferred.reject('Error');
//             }
//         });
//         return deferred.promise;
//     }

//     getGenericLogsAndSync() {
//         try{
//         return eAppFormService.getMasterStatus('genericLogger')
//             .then(function (genericLoggerData) {
//                 console.log("genericLogsData----------", genericLoggerData);

//                 if (genericLoggerData.length > 0) {
//                     return self.syncGenericLogs(genericLoggerData);
//                 } else {
//                     return new Promise(function (resolve, reject) { });
//                 }
//             }).then(function (res) {
//                 console.log('genericLogs syncing successfull');
//                 deleteDataService.deleteAllDataFromTable('genericLogger');
//                 return;
//             }).catch(function (error) {
//                 console.log('genericLogs syncing failed');
//                 return;
//             });
//         }
//         catch(ex){
//             console.log('ex:',ex);
            
//         }
//     }

//     syncGenericLogs(genericLoggerData) {
//         var deferred = $q.defer();
//         try{
//         genericServices.httpPostCall(appConstants.serverUrl + '/saveGenericLogsData', genericLoggerData).then(function (response) {
//             console.log('genericLogs response -----------', response);
//             if (!response.data.err) {
//                 deferred.resolve(response.data.data);
//             } else {
//                 deferred.reject('Error');
//             }
//         });
//         }
//         catch(ex){
//             console.log('ex:',ex);
            
//         }
//         return deferred.promise;
//     }
// }