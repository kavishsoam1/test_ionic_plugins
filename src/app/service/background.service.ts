// // angular.module('dhfl.Services').service('backgroundService', function($q, appConstants,policySyncService, eAppFormService, genericServices, logsSyncService,calculatorService,deleteDataService, $http, appConstants)
// import { BackgroundMode } from '@awesome-cordova-plugins/background-mode';
// import { Injectable } from "@angular/core";
// import { GenericService } from './generic-service.service';
// import { LogSyncService } from './log-sync-service.service';
// import { environment } from 'src/environments/environment';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { eAppFormService } from './eApp-form-service.service';
// import { CalculatorService } from './calculator.service';
// import { DeleteDataService } from './delete-data.service';
// import { policySyncService } from './policysync.service';

// @Injectable({
//     providedIn: 'root'
//   })

// export class BackgroundService {
//     // var self = this;
//     running = false;
//     timer = null;
//     serverUrl = environment.serverUrl;

//     constructor(
//         private background : BackgroundMode,
//         private genericServices : GenericService,
//         private logsSyncService : LogSyncService,
//         private eAppFormService : eAppFormService,
//         private calculatorService : CalculatorService,
//         private deleteDataService : DeleteDataService,
//         private policySyncService : policySyncService,
//         private http : HttpClient
//     ) {
//         this.pluginInitialize();
//     }
//     // this.init = function() {
//     //     self.pluginInitialize();
//     // }

//     getServiceStatus() {
//         return this.running;
//     }

//     pluginInitialize() {
//         try {
//             if (!window.cordova) {
//                 return;
//             }
//             var plugin = this.background;
//             //plugin.setDefaults({ color: '004574' });
//             try {
//                 plugin.overrideBackButton();
//             } catch (ex) {
//                 console.log(ex);
//             }
//             plugin.on('enable');
//             // plugin.un('enable',this.startPolicySync());
//             if(window.localStorage['user_token']){
//                 plugin.on('enable')
//             // plugin.un('enable',this.notificationsUpdate());
//             }
//             //plugin.on('disable', self.stopPolicySync);
//             plugin.setDefaults({
//                 title: 'Speedbiz is running in background',
//                 text: 'Syncing Policies',
//                 color: '004574' // hex format like 'F14F4D'
//             });
//             plugin.configure({ silent: true });
//             plugin.enable();
//         } catch (e) {
//             console.log('there is an error');
//             console.error(e);
//         }
//     }

//     startPolicySync() {
//         if (this.genericServices.CheckInternetConnection() == 'online') {
//             console.log('start PolicySync backgroud service');
//             this.getPoliciesAndSync();
//             this.logsSyncService.getLogsAndSync();
//             this.logsSyncService.getReDiLogsAndSync();
//             this.logsSyncService.getGenericLogsAndSync();
//             this.timer = setInterval(function() {
//                 this.getPoliciesAndSync();
//             }, 1000 * 60 * 60);
//         }
//     }

//     getPoliciesAndSync() {
//         this.running = true;
//         try {
//             return this.eAppFormService.getMasterStatusById('policy', 'stsCode', 4).then(function(policyData) {
//                 if (policyData.err) {
//                     console.error(policyData.err);
//                     return;
//                 }

//                 // var chain = $q.when();
//                 let chain = new Promise((resolve,reject)=>{
//                     resolve('')
//                 })

//                 policyData.forEach((policy) => {
//                     console.log("policyId:::::::::::::",policy.id);
//                     // chain.resolve()
//                     chain = chain.then(this.syncPolicyById(policy.id)).catch(function(ex) {
//                         console.error(ex);
//                         if(ex=="This application no. is already synced."){
//                           this.saveDataIfAppAlreadySynced(policy.id);
//                         }
                        
//                     });
//                 });

//                 return chain;
//             });
//         } catch (ex) {
//             console.error(ex);
//         }
//     }

//     syncPolicyById(policyId) {
//         return function() {
//             return this.policySyncService.syncPolicyById(policyId);
//         }
//     }

//     stopPolicySync() {
//         this.running = false;
//         console.log('stop PolicySync backgroud service');
//         clearInterval(this.timer);
//     }

//         saveDataIfAppAlreadySynced(id){
//         try{
//            this.calculatorService.conditionalUpdatePolicy('stsCode', '9', id).then(function(response){
//             // getData();
//             this.syncDataIfAppAlreadySynced(id).then(function(res){
//                 if(res.err==null){
//                     console.log("data saved successfully");
//                     this.deleteDataService.removeAllDataById(id);
//                 }else{
//                     console.log("unable to save Data");
//                 }
            
//             });

//             });
//             }catch(ex){
//               console.log("error",ex);
//             }
          
//         }

//         syncDataIfAppAlreadySynced(id) {
//             try{
//             // var deferred = $q.defer();
//             let deferred = new Promise((resolve,reject)=>{
//                 this.gatherDataBeforeDelete(id)
//                 .then((collectedData:any)=> {
//                     collectedData.isAppAlreadySynced='true';
//                     this.genericServices.httpPostCall(environment.serverUrl + '/saveUnsyncDataBeforeDel', collectedData).then(function(res) {
//                         resolve(res);
//                     });
//                 });
//             })

//             return deferred;
//             }catch(e){
//               console.log("error",e);
//             }
 
//         }

//             gatherDataBeforeDelete(selectedId) {
//             // var deferred = $q.defer();
//             let promise = [];
//             let syncData : any = {};
//             let deferred = new Promise((resolve,reject)=>{

//                 promise.push(this.eAppFormService.getMasterStatusById('policy', 'id', selectedId).then(function(res) {
//                     if (res) {
//                         syncData.proposalNumber = res[0].appNo;
//                         syncData.productName = res[0].prodName;
//                         syncData.premium = res[0].premium;
//                     }
//                 }));
    
//                 promise.push(this.eAppFormService.getMasterStatusById('paymentDetail', 'policyId', selectedId).then(function(res) {
//                     if (res) {
    
//                         syncData.instrumentType = res[0].chequeType;
//                         syncData.instrumentNumber = res[0].ddNo;
//                         syncData.amount = res[0].amount;
//                     }
//                 }));
//                 promise.push(this.eAppFormService.getMasterStatusById('customer', 'policyId', selectedId).then(function(res) {
//                     if (res) {
//                         for (let i = 0; i < res.length; i++) {
//                             if (res[i].type == 1) {
//                                 syncData.proposalName = res[i].fName + " " + res[i].lName;
//                             }
//                         }
//                     }
//                 }));

                
//             Promise.all(promise).then(function() {
//                 resolve(syncData);
//             });

//             })
        

//             return deferred;
//         }



// 		// update notifications in sqlLite table
// 		notificationsUpdate() {
// 			this.getNotifications().then(async (res:any) => {
// 				try {
// 					// console.log(res.data.result)
// 					var allNotis = res.data.result;

// 					this.eAppFormService
// 						.deleteNotifications()
// 						.then((res) => {
// 							// console.log(res);
// 						})
// 						.catch((error) => {
// 							console.error(error);
// 						});

// 					let i = 1;
// 					allNotis.forEach((noti) => {
// 						let id = i;
// 						let title = noti.title;
// 						let status = noti.status.toString();
// 						let stNoti = noti.staticNotification.toString();
// 						let customMessage = noti.customMessage || "";
// 						let channel = JSON.stringify(noti.channel);

// 						this.eAppFormService
// 							.insertNotifications(id, title, status, stNoti, customMessage, channel)
// 							.then((res) => {
// 								// console.log(res);
// 							})
// 							.catch((error) => {
// 								console.error(error);
// 							});
// 						i++;
// 					});
// 				} catch (err) {
// 					console.log(err);
// 				}
// 			});
// 		};

// 		// req to fetch notifications from server
// 		getNotifications() {
// 			// var deferred = $q.defer();
//             var status = this.genericServices.CheckInternetConnection();
//             let deferred = new Promise((resolve,reject)=> {
//                 if (status == "online") {
//                     let req = {
//                         method: "GET",
//                         url: this.serverUrl + "/getNotification",
//                         headers: {
//                             "x-access-token": window.localStorage["user_token"],
//                         },
//                     };
//                     let token = localStorage.getItem('user_token');
//                     const header = new HttpHeaders()
//                     header.set('x-access-token',token);
//                     let options :any = {
//                         Headers : header
//                     }
//                     this.http.request('',this.serverUrl + "/getNotification",options).subscribe((res)=> {
//                         resolve(res);
//                     });
//                 } else {
//                     // swal("Error", "Please check your internet connection !", "error");
//                     reject();
//                 }
//             })
			


// 			return deferred;
// 		}
// }