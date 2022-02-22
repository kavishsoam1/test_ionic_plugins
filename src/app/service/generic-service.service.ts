// import { Injectable } from "@angular/core";
// declare var window:any;

// @Injectable({
//     providedIn:'root'
// })


// export class GenericService {
//     // var self = this;
//     stpValues = {};
    
//     openInEmbeddedBrowser = function (url) {
//         var target = "_blank";
//         var options = "location=yes,toolbar=yes";
//         try {
//             var ref = cordova.InAppBrowser.open(url, target, options);
//             ref.addEventListener('loadstop', function (event) {
//                 if (event.url.match("mobile/close")) {
//                     ref.close();
//                 }
//             });
//         } catch (e) {
//             console.log(e);
//         }

//     }
//     CheckInternetConnection = function () {
//         if (this.DetectUagent("android")) {
//             return this.checkConnection();
//         } else {
//             var isOnline = 'online';
//             return isOnline;
//         }
//     }

//     checkConnection() {
//         var isOnline = 'online';
//         try {
//             var networkState = navigator.connection.type;
//             var states = {};
//             states[Connection.UNKNOWN] = 'Unknown connection';
//             states[Connection.ETHERNET] = 'Ethernet connection';
//             states[Connection.WIFI] = 'WiFi connection';
//             states[Connection.CELL_2G] = 'Cell 2G connection';
//             states[Connection.CELL_3G] = 'Cell 3G connection';
//             states[Connection.CELL_4G] = 'Cell 4G connection';
//             // states[Connection.CELL_5G] = 'Cell 5G connection';
//             states[Connection.CELL] = 'Cell generic connection';
//             states[Connection.NONE] = 'No network connection';
//             if (states[networkState] == 'No network connection') {
//                 isOnline = 'offline';
//             } else {
//                 isOnline = 'online';
//             }

//         } catch (e) {

//         }

//         return isOnline;
//     }

//     DetectUagent(name) {
//         var uagent = navigator.userAgent.toLowerCase();
//         if (uagent.search(name) > -1)
//             return true;
//         else
//             return false;
//     }

//     htmlToPdf = function (pdfName, htmlData, isLandscape, isHeaderFooter) {
//         htmlData = htmlData.replace(/(<img("[^"]*"|[^\/">])*)>/g, "$1/>");
//         htmlData = htmlData.replace(/(<br("[^"]*"|[^\/">])*)>/g, "$1/>");

//         return $q(function (resolve, reject) {
//             var action = "htmlToPdf|" + pdfName + "|" + htmlData + "|" + !!isLandscape;
//             if (isHeaderFooter) {
//                 var footer = "<table style='width:100%;font-size:8px'><tbody><tr style='width:100%'><td>Communication Address:</td><td></td></tr><tr><td colspan='2''>Pramerica Life Insurance Limited. 4th Floor, Building No-9B,DLF Cyber City, Phase - III,Gurgaon - 122002, Haryana, Registration No. 140</td></tr><tr><td>Company Salesperson's Signature:________________________________________</td><td style='float:right;text-align:right'>Proposer's Signature:________________________________________</td></tr></tbody></table>";
//                 var header = "";
//                 var isHeaderImage = true; // in case to not show image pass empty string
//                 action += "|" + header + "|" + footer + "|" + isHeaderImage;
//             }

//             var obj = {
//                 htmlData: htmlData
//             }

//             payment.htmlToPdf(action, success, failed);

//             function success(response) {
//                 resolve({ err: null, data: response.Data });
//             }

//             function failed(err) {
//                 resolve({ err: err });
//             }
//         });
//     }

//     htmlToPdfWithHeaderFooter = function (pdfName, htmlData, isLandscape, header, footer) {
//         htmlData = htmlData.replace(/(<img("[^"]*"|[^\/">])*)>/g, "$1/>");
//         htmlData = htmlData.replace(/(<br("[^"]*"|[^\/">])*)>/g, "$1/>");
//         if (header) {
//             header = header.replace(/(<img("[^"]*"|[^\/">])*)>/g, "$1/>");
//             header = header.replace(/(<br("[^"]*"|[^\/">])*)>/g, "$1/>");
//         }
//         if (footer) {
//             footer = footer.replace(/(<img("[^"]*"|[^\/">])*)>/g, "$1/>");
//             footer = footer.replace(/(<br("[^"]*"|[^\/">])*)>/g, "$1/>");
//         }

//         return $q(function (resolve, reject) {
//             var action = "htmlToPdf|" + pdfName + "|" + htmlData + "|" + !!isLandscape + 'header|' + header + 'footer|' + footer;
//             payment.htmlToPdf(action, success, failed);
//             var obj = {
//                 data: ''
//             }
//             obj.data = htmlData;


//             function success(response) {
//                 resolve({ err: null, data: response.Data });
//             }

//             function failed(err) {
//                 resolve({ err: err });
//             }
//         });

//     }

//     setSTPRules(pageState, value) {
//         pageState = pageState.split(".");
//         let length = pageState.length;
//         pageState = pageState[pageState.length - 1];
//         this.stpValues[pageState] = value;
//     }

//     setStpObject = function (obj) {
//         this.stpValues = obj;
//     }
//     getStpRules = function () {
//         return this.stpValues;
//     }
//     clearStpRules = function (obj) {
//         this.stpValues = obj;
//     }


//     shareFile = function (filePath) {
//         var action = "shareFile|" + filePath;
//         payment.shareFile(action, null, function (err) {
//             console.log(err);
//         });
//     }
//     contactUsThroughEmail = function (filePath, sub, emailTo) {
//         var action = "shareFile|" + filePath + "|" + sub + "|" + emailTo;
//         payment.shareFile(action, null, function (err) {
//             console.log(err);
//         });
//     }

//     emailFile = function (filePath, sub) {
//         var action = "shareFile|" + filePath + "|" + sub;
//         payment.shareFile(action, null, function (err) {
//             console.log(err);
//         });

//     }

//     convertToBase64 = function (filePath) {
//         return $q(function (resolve, reject) {
//             if (window.plugins && window.plugins.Base64 && filePath.length > 0) {
//                 window.plugins.Base64.encodeFile(filePath, function (base64) {
//                     let base64Attachment = base64.replace("data:image/*;charset=utf-8;base64,", "");
//                     resolve({ err: null, data: base64Attachment });
//                 });
//             } else {
//                 resolve({ err: "Plugin or file not found!" });
//             }
//         });
//     }

//     getDocument() {
//         console.log('inside getDocument');
//         return new Promise((resolve, reject) => {
//             try {
//                 fileChooser.open({ "mime": "application/pdf" }, function(uri) {
//                     var action = "getFilePath|" + uri;
//                     payment.getFilePath(action, (res) => {
//                         console.log(' success res:', res);
//                         let res2 = "file://" + res.Data;
//                         console.log('res2:::::::::::', res2);

//                         window.resolveLocalFileSystemURL(res2, function(fileEntry) {
//                             console.log('fileEntry:::::::', fileEntry);
//                             fileEntry.file((file) => {
//                                 console.log('file:::::::::::', file);
//                                 console.log("File size: " + file.size);
//                                 let fileSizeInKb = (file.size) / 1024;
//                                 if (fileSizeInKb > 500) {
//                                     this.hideLoader();
//                                     swal("Error", "File size can not be greater than 500KB.", "error");
//                                     reject('file size exceed');
//                                     //    resolve(resultObj);
//                                 } else {
//                                     resolve(res2);
//                                 }
//                             }, (error) => {
//                                 console.log("Unable to retrieve file properties: " + error);
//                                 this.hideLoader();
//                                 // swal("Error", error, "error");
//                                 reject(error);
//                             });

//                         }, (error) => {
//                             console.log("error of resolveLocalFileSystemURL: " + error);
//                             this.hideLoader();
//                             // swal("Error", error, "error");
//                             reject(error);
//                         });

//                     }, (res) => {
//                         console.log('failure res:', res);
//                         reject('error');
//                     });

//                 }, function(err) {
//                     console.log('Hide loader is called', err)
//                     this.hideLoader();
//                 });

//             } catch (ex) {
//                 console.log('ex::::::::', ex);
//                 reject(ex);

//             }
//         })
//     }

//     copyToDocumentFolder = function (filePath, newFileName) {
//         var deferred = $q.defer();
//         try {
//             //    var path = cordova.file.externalDataDirectory + "Documents";
//             let path = cordova.file.externalCacheDirectory;
//             console.log('path::::::::::::', path);
//             window.resolveLocalFileSystemURL(filePath, function (fileEntry) {
//                 window.resolveLocalFileSystemURL(path, function (dirEntry) {
//                     fileEntry.copyTo(dirEntry, newFileName + '.pdf', (entry) => {
//                         console.log('entry:::::::', entry);
//                         console.log("New Path: " + entry.nativeURL);
//                         if (entry.nativeURL) {
//                             //deferred.resolve(entry.nativeURL);
//                             //if document folder is not inside file then first Document folder will be created and pdf will be copied there.
//                             window.FilePath.resolveNativePath((entry.nativeURL), successResolveNativePath, failedResolveNativePath);
//                             function successResolveNativePath(fullPath) {
//                                 var newFullPath = fullPath.replace('file://', '');
//                                 var action = "changeLocation|" + newFullPath;
//                                 payment.imageRotationFix(action, successMove, failedMove);

//                                 function successMove(res) {
//                                     var data = 'file://' + res.Data;
//                                     deferred.resolve(data);
//                                 }

//                                 function failedMove(res) {
//                                     deferred.resolve(res);
//                                 }
//                             }
//                             function failedResolveNativePath(error) {
//                                 console.log('error::::::::::::', error);
//                                 deferred.reject(error);
//                             }
//                             //
//                         } else {
//                             deferred.reject('error');
//                         }
//                     }, (error) => {
//                         console.log(error.code);
//                         deferred.reject(error.code);
//                     });
//                 });
//             });
//         } catch (ex) {
//             console.error(ex);
//             deferred.reject('error');
//         }
//         return deferred.promise;
//     }

//     // getImageFromCamera = function(isCroppable, sourceType1) {
//     //     console.log('inside getImageFromCamera:::::::::::', isCroppable, sourceType1);

//     //     var sourceType;
//     //     if (sourceType1 != undefined) {
//     //         sourceType = sourceType1;
//     //     } else {
//     //         sourceType = 1;
//     //     }
//     //     var deferred = $q.defer();
//     //     //document.addEventListener("deviceready", , false);
//     //     self.showLoader("Please wait.");
//     //     if (sourceType1 && sourceType1 == 2) {
//     //         try {
//     //             self.getDocument().then((filePath) => {
//     //                 console.log('filePath:::::::::', filePath);

//     //                 if (filePath) {
//     //                     self.hideLoader();
//     //                     deferred.resolve(filePath);
//     //                 } else {
//     //                     self.hideLoader();
//     //                     deferred.reject('error');
//     //                 }

//     //             })
//     //         } catch (ex) {
//     //             console.log('Hide loader is called')
//     //             var imageURI = '';
//     //             deferred.resolve(imageURI);
//     //             self.hideLoader();
//     //         }

//     //         // return;
//     //     } else {
//     //         try {
//     //             (function() {
//     //                 var options = {
//     //                     allowEdit: (!isCroppable && sourceType) ? true : false,
//     //                     destinationType: Camera.DestinationType.FILE_URI,
//     //                     sourceType: sourceType, // Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY               
//     //                     encodingType: Camera.EncodingType.JPEG,
//     //                     saveToPhotoAlbum: false,
//     //                     cameraDirection: 0,
//     //                     correctOrientation: true

//     //                 };

//     //                 $cordovaCamera.getPicture(options).then(function(imageURI) {
//     //                     imageURI = imageURI.split('?')[0];
//     //                     console.log('imageURI:::::::::::::::::::::::::', imageURI);

//     //                     var cropoptions = {
//     //                         quality: 100,
//     //                         rotatable: false,
//     //                         checkOrientation: true
//     //                     };
//     //                     if (isCroppable) {


//     //                         self.imageRotationFix(imageURI).then(function(imageRes) {

//     //                             plugins.crop.promise(imageURI, cropoptions).then(function(croppedImageURI) {
//     //                                 var filename = imageURI.split('/').pop();
//     //                                 self.renameFile(croppedImageURI, filename, imageURI).then(function(renamedFile) {
//     //                                     self.hideLoader();
//     //                                     deferred.resolve(renamedFile);
//     //                                 });

//     //                             }, self.hideLoader());
//     //                         });
//     //                     } else {
//     //                         console.log('Hide loader is called')
//     //                         self.hideLoader();
//     //                         deferred.resolve(imageURI);
//     //                     }
//     //                 }, function(err) {
//     //                     console.log('Hide loader is called')
//     //                     self.hideLoader();
//     //                 });

//     //             })();

//     //         } catch (e) {
//     //             console.log('Hide loader is called')
//     //             var imageURI = '';
//     //             deferred.resolve(imageURI);
//     //             self.hideLoader();
//     //         }
//     //     }

//     //     return deferred.promise;
//     // }

//     getImageFromCamera = function (isCroppable, sourceType1, page) {

//         var sourceType;
//         if (sourceType1 != undefined) {
//             sourceType = sourceType1;
//         } else {
//             sourceType = 1;
//         }
//         var deferred = $q.defer();
//         //document.addEventListener("deviceready", , false);
//         this.showLoader("Please wait.");
//         if (sourceType1 && sourceType1 == 2) {
//             try {
//                 this.getDocument().then((filePath) => {

//                     if (filePath) {
//                         this.hideLoader();
//                         deferred.resolve(filePath);
//                     } else {
//                         this.hideLoader();
//                         deferred.reject('error');
//                     }

//                 })
//             } catch (ex) {
//                 console.log('Hide loader is called')
//                 var imageURI = '';
//                 deferred.resolve(imageURI);
//                 this.hideLoader();
//             }

//             // return;
//         } else {
//             try {
//                 (function () {
//                     var options = {
//                         allowEdit: (!isCroppable && sourceType) ? true : false,
//                         destinationType: Camera.DestinationType.FILE_URI,
//                         sourceType: sourceType, // Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY               
//                         encodingType: Camera.EncodingType.JPEG,
//                         saveToPhotoAlbum: false,
//                         cameraDirection: 0,
//                         correctOrientation: true
//                     };

//                     if(sourceType == 1) { 
//                         options.allowEdit = false;
//                     }

//                     $cordovaCamera.getPicture(options).then(function (imageURI) {
//                         imageURI = imageURI.split('?')[0];
//                         var cropoptions = {
//                             quality: 100,
//                             rotatable: false,
//                             checkOrientation: true
//                         };
//                         if (isCroppable && (page !== "docUploadPage")) {
//                             self.imageRotationFix(imageURI).then(function (imageRes) {

//                                 plugins.crop.promise(imageURI, cropoptions).then(function (croppedImageURI) {
//                                     var filename = imageURI.split('/').pop();
//                                     var fName1 = filename.split('.');
//                                     var dateTime = new Date().getTime();
//                                     var fName2 = fName1[0] + "-" + dateTime + "." + fName1[1];
//                                     self.renameFile(croppedImageURI, fName2, imageURI).then(function (renamedFile) {
//                                         self.hideLoader();
//                                         deferred.resolve(renamedFile);
//                                     });
//                                 }, self.hideLoader());
//                             });
//                         } else if (page === "docUploadPage") {
//                             console.log('Hide loader is called')
//                             self.hideLoader();
//                             deferred.resolve(imageURI);
//                         } else {
//                             plugins.crop.promise(imageURI, cropoptions).then(function (croppedImageURI) {
//                                 imageURI = croppedImageURI;
//                                 console.log('Hide loader is called')
//                                 self.hideLoader();
//                                 deferred.resolve(imageURI);
//                             }, self.hideLoader()).catch((err) => {
//                                 console.error(err);
//                                 self.hideLoader();
//                             });
//                         }
//                     }, function (err) {
//                         console.log('Hide loader is called')
//                         self.hideLoader();
//                     });

//                 })();

//             } catch (e) {
//                 console.log('Hide loader is called')
//                 var imageURI = '';
//                 deferred.resolve(imageURI);
//                 self.hideLoader();
//             }
//         }

//         return deferred.promise;
//     }



//     removeFile = function (filePath) {
//         var deferred = $q.defer();
//         var path = filePath.split('/');
//         var filename = path.pop().split('?')[0];
//         path = path.join('/');
//         if (path.indexOf('file://') != 0) {
//             path = 'file://' + path;
//         }

//         window.resolveLocalFileSystemURL(path, function (dir) {
//             dir.getFile(filename, { create: false }, function (fileEntry) {
//                 fileEntry.remove(function () {
//                     console.log("The file deleted successfully " + filePath);
//                     deferred.resolve();
//                 }, console.error, function () {
//                     console.log("The file doesn't exist");
//                     deferred.resolve();
//                 });
//             });
//         });
//         return deferred.promise;
//     }



//     renameFile = function (filePath, newFileName, fullPath) {

//         var deferred = $q.defer();
//         try {
//             var path = filePath.split('/');
//             var filename = path.pop().split('?')[0];
//             path = path.join('/');

//             window.resolveLocalFileSystemURL(filePath, function (fileEntry) {
//                 window.resolveLocalFileSystemURL(path, function (dirEntry) {
//                     fileEntry.moveTo(dirEntry, newFileName, function (resEntry) {
//                         console.log("resEntry:::::::::", resEntry, "::::::::::", resEntry.nativeURL);
//                         var newFullPath = resEntry.nativeURL.replace('file://', '');
//                         var action = "changeLocation|" + newFullPath;
//                         payment.imageRotationFix(action, successMove, failedMove);

//                         function successMove(res) {
//                             var data = 'file://' + res.Data;
//                             deferred.resolve(data);
//                         }

//                         function failedMove(res) {
//                             deferred.resolve(res);
//                         }
//                     }, console.error);
//                 });
//             });
//         } catch (ex) {
//             console.error(ex);
//             deferred.reject('error');
//         }
//         return deferred.promise;
//     }






//     // renameFile = function(filePath, newFileName, fullPath) {
//     //     var deferred = $q.defer();
//     //     try {
//     //         var path = filePath.split('/');
//     //         var filename = path.pop().split('?')[0];
//     //         path = path.join('/');

//     //         window.resolveLocalFileSystemURL(filePath, function(fileEntry) {
//     //             window.resolveLocalFileSystemURL(path, function(dirEntry) {
//     //                 fileEntry.moveTo(dirEntry, newFileName, function() {
//     //                     var newFullPath = fullPath.replace('file://', '');

//     //                     var action = "changeLocation|" + newFullPath;
//     //                     payment.imageRotationFix(action, successMove, failedMove);

//     //                     function successMove(res) {
//     //                         var data = 'file://' + res.Data;
//     //                         deferred.resolve(data);
//     //                     }

//     //                     function failedMove(res) {
//     //                         deferred.resolve(res);
//     //                     }
//     //                 }, console.error);
//     //             });
//     //         });
//     //     } catch (ex) {
//     //         console.error(ex);
//     //         deferred.reject('error');
//     //     }
//     //     return deferred.promise;
//     // }

//     function tourSubmitFunc(e, v, m, f) {
//         if (v === -1) {
//             $.prompt.prevState();
//             return false;
//         } else if (v === 1) {
//             $.prompt.nextState();
//             return false;
//         }
//     };

//     var helpOverlayVisitedKey = 'helpOverlayVisited';
//     showHelpOverlay = function (stateName, tourStates) {
//         var helpOverlayVisitedData = localStorage.getItem(helpOverlayVisitedKey) || '{}';
//         helpOverlayVisitedData = JSON.parse(helpOverlayVisitedData);
//         var alreadyVisited = helpOverlayVisitedData[stateName];
//         if (!alreadyVisited) {
//             helpOverlayVisitedData[stateName] = true;
//             localStorage.setItem(helpOverlayVisitedKey, JSON.stringify(helpOverlayVisitedData));
//             $timeout(function () {
//                 $.prompt(tourStates.map(function (item) {
//                     item.submit = item.submit || tourSubmitFunc;
//                     return item;
//                 }));
//             }, 500);
//         }
//     };

//     showLoader = function (msg) {
//         msg = msg || 'Loading...';
//         $ionicLoading.show({
//             template: '<p>' + msg + '</p><ion-spinner></ion-spinner>'
//         });
//     };

//     showLoader2 = function (msg) {
//         msg = msg || 'Loading...';
//         $ionicLoading.show({
//             template: '<p><span>Latest Speedbiz version is downloading, please don’t close the app</span><br><span>' + msg + '</span></p><ion-spinner></ion-spinner>'
//         });
//     };

//     hideLoader = function () {
//         $ionicLoading.hide();
//     };

//     splitName = function (string) {
//         if (!string) {
//             deferred.resolve({ fName: '', lName: '' });
//         } else {
//             var deferred = $q.defer();
//             var stringParts = string.split(" ");
//             var fName = stringParts[0];
//             var lname = ''
//             for (var i = 1; i < stringParts.length; i++) {
//                 (function (i) {
//                     lname = lname + stringParts[i] + " ";
//                 })(i);
//             }
//             var lName = lname.trim();
//             deferred.resolve({ fName, lName });
//         }

//         return deferred.promise;
//     }


//     getUnifiedconditions = function(agentType, parentchannel) {
//         var deferred = $q.defer();
//         var url = appConstants.serverUrl + '/getUnifiedConditions'
//         let req = {
//             url: url,
//             method: "GET",
//             'ConnectionType': CheckInternetConnectionType()
//         }
//         let result = {};

//         // if (!parentchannel) {
//         //     agentType = 'default'
//         // }
//         $http(req).then(function response(res) {
//             console.log('Res:res', res);
//             if (res) {
//                 let allConditions = res.data.result;
//                 for (let i = 0; i < allConditions.length; i++) {
//                     if (!parentchannel || parentchannel == '') {
//                         // if (agentType == allConditions[i]['agentType']) {
//                         //     result = allConditions[i].conditions
//                         // }
//                         // no agentType key in unifiedConditions db as declared above
//                         if ('default' == allConditions[i]['parentChannel']) {
//                             result = allConditions[i].conditions
//                         }
//                     } else if (parentchannel) {
//                         if (parentchannel == allConditions[i]['parentChannel']) {
//                             result = allConditions[i].conditions
//                             // in case of UCB to check the flow either it is GPD or TPD
//                             if(parentchannel == 'UCB' && allConditions[i]['channelName'] == agentType) {
//                                 result = allConditions[i].conditions;
//                                 break;
//                             }
//                         }
//                     } else {
//                         if ('default' == allConditions[i]['parentChannel']) {
//                             result = allConditions[i].conditions
//                         }
//                     }


//                 };
//             };
//             deferred.resolve(result);

//         });
//         return deferred.promise;
//     };
//     generateNewAppNo = function(agentType, agentCode, isCombo) {
//         var deferred = $q.defer();
//         var url = appConstants.serverUrl + '/applicationNo?agentType=' + agentType + '&agentId=' + agentCode + '&isCombo=' + isCombo;
//         var conn =
//             $http({
//                 method: 'GET',
//                 headers: {
//                     'ConnectionType': CheckInternetConnectionType(),
//                 },
//                 url: url,
//             }).then(function successCallback(response) {
//                 if (isCombo) {
//                     if (response.data.appNo && response.data.solutionId) { deferred.resolve(response.data) } else {
//                         swal('Error', 'Please contact your administrator!', 'error');
//                         deferred.reject('err');
//                     }
//                 } else {
//                     if (response.data.appNo) { deferred.resolve(response.data.appNo) } else {
//                         swal('Error', 'Please contact your administrator!', 'error');
//                         deferred.reject('err');
//                     }
//                 }
//             }, function errorCallback(response) {
//                 swal('Error', 'Please contact your administrator!', 'error');
//                 deferred.reject('err');
//             });
//         return deferred.promise;
//     }
//     excludeValuesFromArray = function (arrValues, searchKey, dataArr) {
//         var deferred = $q.defer();
//         var newArr = [];
//         for (var i in dataArr) {
//             (function (i) {
//                 var elem = dataArr[i];
//                 if (arrValues.indexOf(elem[searchKey]) == -1) {
//                     if (elem[searchKey]) {
//                         newArr.push(dataArr[i]);
//                     }
//                 }
//             })(i);
//         }
//         deferred.resolve(newArr);
//         return deferred.promise;
//     }

//     self.imageRotationFix = function (imagePath) {
//         return $q(function (resolve, reject) {
//             var action = "imageRotationFix|" + imagePath;
//             payment.imageRotationFix(action, success, failed);

//             function success(response) {
//                 resolve({ data: 'file:' + response.Data });
//             }

//             function failed(err) {
//                 resolve({ err: 'error in cropping' });
//             }
//         });
//     }

//     self.imageRotationByAngle = function (imagePath, rotationAngle) {
//         var deffered = $q.defer();
//         var canvas;
//         var angleInDegress = 0;
//         var image = document.createElement('img');
//         image.onload = function () {
//             drawRotated(rotationAngle);
//         }
//         image.src = imagePath;

//         function drawRotated(degress) {
//             if (canvas) document.body.removeChild(canvas);
//             canvas = document.createElement("canvas");
//             var ctx = canvas.getContext("2d");
//             canvas.style.width = "20%";
//             if (degress == 90 || degress == 270) {
//                 canvas.width = image.height;
//                 canvas.height = image.width;
//             } else {
//                 canvas.width = image.width;
//                 canvas.height = image.height;
//             }

//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             if (degress == 90 || degress == 270) {
//                 ctx.translate(image.height / 2, image.width / 2);
//             } else {
//                 ctx.translate(image.width / 2, image.height / 2);
//             }
//             ctx.rotate(degress * Math.PI / 180);
//             ctx.drawImage(image, -image.width / 2, -image.height / 2);
//             var base64 = canvas.toDataURL();
//             var obj = {};
//             obj.base64 = base64;
//             cordova.base64ToGallery(base64, { prefix: 'img' }, function succcess(path) {
//                 deffered.resolve("file://" + path);
//             }, function fail(err) {
//                 deffered.resolve('err')
//             })
//         }
//         return deffered.promise;
//     }


//     self.convertNumberToWords = function (amount) {
//         if (amount) {
//             var words = new Array();
//             words[0] = '';
//             words[1] = 'One';
//             words[2] = 'Two';
//             words[3] = 'Three';
//             words[4] = 'Four';
//             words[5] = 'Five';
//             words[6] = 'Six';
//             words[7] = 'Seven';
//             words[8] = 'Eight';
//             words[9] = 'Nine';
//             words[10] = 'Ten';
//             words[11] = 'Eleven';
//             words[12] = 'Twelve';
//             words[13] = 'Thirteen';
//             words[14] = 'Fourteen';
//             words[15] = 'Fifteen';
//             words[16] = 'Sixteen';
//             words[17] = 'Seventeen';
//             words[18] = 'Eighteen';
//             words[19] = 'Nineteen';
//             words[20] = 'Twenty';
//             words[30] = 'Thirty';
//             words[40] = 'Forty';
//             words[50] = 'Fifty';
//             words[60] = 'Sixty';
//             words[70] = 'Seventy';
//             words[80] = 'Eighty';
//             words[90] = 'Ninety';
//             amount = amount.toString();
//             var atemp = amount.split(".");
//             var number = atemp[0].split(",").join("");
//             var n_length = number.length;
//             var words_string = "";
//             if (n_length <= 9) {
//                 var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
//                 var received_n_array = new Array();
//                 for (var i = 0; i < n_length; i++) {
//                     received_n_array[i] = number.substr(i, 1);
//                 }
//                 for (var i = 9 - n_length, j = 0; i < 9; i++ , j++) {
//                     n_array[i] = received_n_array[j];
//                 }
//                 for (var i = 0, j = 1; i < 9; i++ , j++) {
//                     if (i == 0 || i == 2 || i == 4 || i == 7) {
//                         if (n_array[i] == 1) {
//                             n_array[j] = 10 + parseInt(n_array[j]);
//                             n_array[i] = 0;
//                         }
//                     }
//                 }
//                 value = "";
//                 for (var i = 0; i < 9; i++) {
//                     if (i == 0 || i == 2 || i == 4 || i == 7) {
//                         value = n_array[i] * 10;
//                     } else {
//                         value = n_array[i];
//                     }
//                     if (value != 0) {
//                         words_string += words[value] + " ";
//                     }
//                     if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
//                         words_string += "Crores ";
//                     }
//                     if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
//                         words_string += "Lakhs ";
//                     }
//                     if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
//                         words_string += "Thousand ";
//                     }
//                     if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
//                         words_string += "Hundred";
//                     } else if (i == 6 && value != 0) {
//                         words_string += "Hundred ";
//                     }
//                 }
//                 words_string = words_string.split("  ").join(" ");
//             }
//             return words_string;
//         }
//     }

//     checkDeviceStorage = function () {
//         var deferred = $q.defer();
//         var storage = {
//             internalStorage: {},
//             externalStorage: {}
//         };
//         // location: 1 // To get information about external storage (For android only)
//         // location: 2 // To get information about internal storage (For android only)
//         getInternalStorage().then(function (internal) {
//             storage.internalStorage = internal;
//             getExternalStorage().then(function (external) {
//                 storage.externalStorage = external;
//                 deferred.resolve(storage);
//             });
//         });
//         return deferred.promise;
//     }

//     function getInternalStorage() {
//         var deferred = $q.defer();
//         try {
//             DiskSpacePlugin.info({ location: 2 }, function success(msg) {
//                 deferred.resolve(msg);
//             }, function error(err) {
//                 deferred.reject("Error in fetching internalStorage");
//             });
//         } catch (ex) {
//             deferred.resolve("Error in fetching internalStorage");
//         }

//         return deferred.promise;
//     }

//     function getExternalStorage() {
//         var deferred = $q.defer();
//         try {
//             DiskSpacePlugin.info({ location: 1 }, function success(msg) {
//                 deferred.resolve(msg);
//             }, function error(err) {
//                 deferred.reject("Error in fetching externalStorage");
//             });
//         } catch (ex) {
//             deferred.resolve("Error in fetching internalStorage");
//         }
//         return deferred.promise;
//     }

//     getOtpDetails = function (data) {
//         var deferred = $q.defer();
//         var req = {
//             method: 'GET',
//             headers: {
//                 'ConnectionType': CheckInternetConnectionType(),
//                 'Content-Type': 'application/json',
//             },
//             url: appConstants.serverUrl + '/getOtpDetails?data=' + data,
//         }
//         $http(req).then(function (response) {
//             deferred.resolve(response.data)
//         }, function (err) {
//             deferred.reject(err);
//         });
//         return deferred.promise;
//     }

//     self.httpGetCall = function (query) {
//         let status = self.CheckInternetConnection();
//         var deferred = $q.defer();
//         self.showLoader('Loading....');
//         try {
//             if (status == 'online') {
//                 let req = {
//                     method: 'GET',
//                     url: query,
//                     headers: {
//                         'ConnectionType': CheckInternetConnectionType(),
//                         "authorization": productApiUrl.apiLink('brmsApiVersion'),
//                         "x-access-token": window.localStorage['user_token']
//                     }
//                 }
//                 $http(req).then(function (response) {
//                     self.hideLoader();
//                     deferred.resolve(response);
//                 }, function (err) {
//                     self.hideLoader();
//                     deferred.reject(err);
//                 })
//             } else {
//                 self.hideLoader();
//                 swal('Error', 'Please check your internet connection !', 'error');
//                 deferred.reject('No Internet Connection');
//             }
//         } catch (e) {
//             self.hideLoader();
//             deferred.reject(e);
//         }

//         return deferred.promise;
//     }
//     httpPostCall(url, data, contentType) {
//         let status = self.CheckInternetConnection();
//         var deferred = $q.defer();
//         var contentType = contentType || "application/json";
//         self.showLoader('Loading....');
//         try {
//             if (status == 'online') {
//                 let req = {
//                     method: 'POST',
//                     url: url,
//                     headers: {
//                         "Content-Type": contentType,
//                         'ConnectionType': CheckInternetConnectionType(),
//                         "authorization": productApiUrl.apiLink('brmsApiVersion'),
//                         "x-access-token": window.localStorage['user_token']
//                     },
//                     data: data
//                 }
//                 $http(req).then(function (res) {
//                     self.hideLoader();
//                     deferred.resolve(res);
//                 }, function (err) {
//                     self.hideLoader();
//                     deferred.reject(err);
//                 })
//             } else {
//                 self.hideLoader();
//                 swal('Error', 'Please check your internet connection !', 'error');
//                 deferred.reject('No Internet Connection');
//             }

//         } catch (e) {
//             self.hideLoader();
//             deferred.reject(e);
//         }

//         return deferred.promise;
//     }

//     self.background_httpGetCall = function (query) {
//         let status = self.CheckInternetConnection();
//         var deferred = $q.defer();
//         try {
//             if (status == 'online') {
//                 let req = {
//                     method: 'GET',
//                     url: query,
//                     headers: {
//                         'ConnectionType': CheckInternetConnectionType(),
//                         "authorization": productApiUrl.apiLink('brmsApiVersion')
//                     }
//                 }
//                 $http(req).then(function (response) {
//                     deferred.resolve(response);
//                 }, function (err) {
//                     deferred.reject(err);
//                 })
//             } else {
//                 swal('Error', 'Please check your internet connection !', 'error');
//                 deferred.reject('No Internet Connection');
//             }
//         } catch (e) {
//             deferred.reject(e);
//         }
//         return deferred.promise;
//     }

//     self.printLog = function (log, flag) {
//         var showLog = true;
//         if (showLog) {
//             if (flag == 'e') {
//                 console.log('some error occured:::::::', log);
//                 return;
//             }
//             if (flag == 's') {
//                 console.log('success message::::', log);
//                 return;
//             }
//             if (!flag) {
//                 console.log('generic log:::::::', log);
//                 return;
//             }
//         }
//         return;
//     }

//     self.formatDate = function (date) {
//         var dd = date.getDate();
//         var mm = date.getMonth() + 1;
//         var yyyy = date.getFullYear();
//         if (dd < 10) {
//             dd = '0' + dd
//         }
//         if (mm < 10) {
//             mm = '0' + mm
//         }
//         return dd + '/' + mm + '/' + yyyy;
//     }

//     self.formatDateInYearFirstFormat = function (date) {
//         var dd = date.getDate();
//         var mm = date.getMonth() + 1;
//         var yyyy = date.getFullYear();
//         if (dd < 10) {
//             dd = '0' + dd
//         }
//         if (mm < 10) {
//             mm = '0' + mm
//         }
//         return yyyy + '-' + mm + '-' + dd;
//     }

//     self.setDefaultLog = function () {
//         localStorage.setItem('lastLogGenerated', new Date().getTime());
//     }

//     CheckInternetConnectionType = function () {
//         if (DetectUagent("android")) {
//             return checkConnectionType();
//         } else {
//             var conType = 'UN';
//             return conType;
//         }
//     }

//     function checkConnectionType() {
//         var conType = 'UN';
//         try {
//             var networkState = navigator.connection.type;
//             var states = {};
//             states[Connection.UNKNOWN] = 'UN';
//             states[Connection.ETHERNET] = 'Ethernet';
//             states[Connection.WIFI] = 'WiFi';
//             states[Connection.CELL_2G] = '2G';
//             states[Connection.CELL_3G] = '3G';
//             states[Connection.CELL_4G] = '4G';
//             states[Connection.CELL_5G] = '5G';
//             states[Connection.CELL] = 'Generic';
//             states[Connection.NONE] = 'No network connection';
//             if (states[networkState]) {
//                 conType = states[networkState];
//             } else {
//                 conType = 'UN';
//             }

//         } catch (e) {

//         }
//         return conType;
//     }


//     self.getChannelToAppSeriesMapping = function(agentType) {
//         var deferred = $q.defer();
//         var req = {
//             method: 'GET',
//             headers: {
//                 'ConnectionType': CheckInternetConnectionType(),
//                 'Content-Type': 'application/json',
//             },
//             url: appConstants.serverUrl + '/getChannelList',
//         }
//         $http(req).then(function(response) {
//             let res = response.data.result
//             let result = '';
//             for (let i = 0; i < res.length; i++) {
//                 for (let j = 0; j < res[i].appNoSeries.length; j++) {
//                     if (res[i].appNoSeries[j].channelName == agentType) {
//                         result = res[i].appNoSeries[j].seriesNo;
//                     };
//                 };
//             };
//             deferred.resolve(result);
//         }, function(err) {
//             deferred.reject(err);
//         });
//         return deferred.promise;
//     };

//     //
//     checkVersionUpdateForEmployee = async function () {
//         self.showLoader();
//         let data = await self.checkAllEmployeeVersionSame();
//         self.hideLoader();
//         console.log('data-------------------->', data);
//         var deferred = $q.defer();
//         if (data.err == null) {
//             if (data.result) {
//                 deferred.resolve();
//             }
//             else {
//                 swal('No updates found', 'Latest version is already installed', 'success');
//                 deferred.reject();
//             }
//         }
//         else {
//             deferred.reject();
//         }
//         return deferred.promise;
//     }
//     checkAllEmployeeVersionSame = function () {
//         try {
//             let channel = (JSON.parse(localStorage.getItem('agent')).Type).toLowerCase();
//             let obj = {
//                 channel: channel
//             }
//             console.log('obj------------------------>', obj);
//             var deferred = $q.defer();
//             if (obj) {
//                 var status = self.CheckInternetConnection();
//                 if (status == 'online') {
//                     var req = {
//                         method: 'POST',
//                         url: appConstants.serverUrl + '/checkAllEmployeeVersionSame',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         data: obj
//                     }
//                     $http(req).then(function (res) {
//                         console.log('res---------------------->', res);
//                         deferred.resolve(res.data);
//                     });
//                 } else {
//                     self.hideLoader();
//                     swal('Error', 'Please check your internet connection !', 'error');
//                     deferred.reject();
//                 }
//                 return deferred.promise;

//             }
//         } catch (e) {
//             console.log(e);
//         }
//     }
//     //

//     //version update work  starts
//     versionUpdateCheck = async function (type) {
//         self.showLoader();
//         let data = await self.versionCheck();
//         self.hideLoader();
//         let err = data.err;
//         let result = data ? data.result : null;
//         console.log('data---------------->', data);

//         var deferred = $q.defer();
//         if (err == null && result && result.flag == 3){
//             swal("You are using an older version of app.", "Kindly uninstall the app", "error");
//             deferred.reject();
//         }
//         else if (err == null && result && result.flag == 2) {
//         //    let version = productApiUrl.apiLink('brmsApiVersion');
//             let version = result.latestVersion;
//             swal({
//                 title: `New version available – ${version}`,
//                 type: 'warning',
//                 text: `Please click on ‘OK’ to download latest version`,
//                 showCancelButton: false,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 cancelButtonText: 'No',
//                 confirmButtonText: 'Ok'
//             }).then(async function () {
//                 console.log('before----------------------->');

//                 let msg = await self.autoUpdate(result);
//                 console.log('msg------------------------------->', msg);
//                 console.log('after-------------------------------->', after);
//                 deferred.reject();
//             }, function () {
//                 deferred.reject();
//             })
//         }
//         else if (err == null && result && result.flag == 1) {
//             //    let version = productApiUrl.apiLink('brmsApiVersion');
//             let version = result.latestVersion;
//             swal({
//                 title: `New version available – ${version}`,
//                 type: 'warning',
//                 text: `Please click on ‘OK’ to download latest version`,
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 cancelButtonText: 'No',
//                 confirmButtonText: 'Ok'
//             }).then(async function () {
//                 console.log('before----------------------->');

//                 let msg = await self.autoUpdate(result);
//                 console.log('msg------------------------------->', msg);
//                 console.log('after-------------------------------->', after);
//                 deferred.reject();
//             }, function () {
//                 if(type==1){
//                     deferred.reject();
//                 }
//                 else
//                 {
//                     deferred.resolve();
//                 }
                
//             })
//         }
//         else {
//             deferred.resolve();
//             return;
//         }
//         return deferred.promise;

//     }

//     versionCheck = function () {
//         try {
//             let version = productApiUrl.apiLink('brmsApiVersion');
//             let channel = (JSON.parse(localStorage.getItem('agent')).Type).toLowerCase();
//             let obj = {
//                 version: version,
//                 channel: channel
//             }
//             console.log('obj------------------------>', obj);

//             console.log("version:::::::::::::::::::::", version);
//             var deferred = $q.defer();
//             if (version) {
//                 var status = self.CheckInternetConnection();
//                 if (status == 'online') {
//                     var req = {
//                         method: 'POST',
//                         url: appConstants.serverUrl + '/getVersionCheck',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         data: obj
//                     }
//                     $http(req).then(function (res) {
//                         console.log('res---------------------->', res);
//                         deferred.resolve(res.data);
//                     });
//                 } else {
//                     swal('Error', 'Please check your internet connection !', 'error');
//                     deferred.reject();
//                 }
//                 return deferred.promise;

//             }
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     autoUpdate = function (data) {
//         var deferred = $q.defer();
//         let url = encodeURI(data.url);
//         let apkName = data.url.split('/').pop();
//         console.log('apkName------------------------------->', apkName);
//         var savePath = '/storage/emulated/0/Android/data/com.ionicframework.aceappclient150562/files/Documents/' + apkName;
//         self.showLoader2("0% complete");
//         fileUploadService.download(url, savePath, {}, true)
//             .then(function (res) {
//                 console.log('res of download is::::::::::::::::::::::', res);
//                 self.hideLoader();
//                 let uri = res.toURL().replace('file://', '');
//                 var action = "installAPK|" + uri;
//                 payment.installAPK(action, (res1) => {
//                     console.log('res------------------------->', res1);
//                     deferred.reject();

//                 }, (error) => {
//                     console.log('error---------------->', error);
//                     deferred.reject();

//                 })
//             },function(err){
//                console.log('err------------------->',err);
//             },function (progress) {
//                 console.log('progress-------------->',progress);
//                 if (progress.lengthComputable) {
//                     let downloadProgress = parseInt((progress.loaded / progress.total) * 100);
//                     self.showLoader2(downloadProgress+"% complete");
//                     // self.showLoader();
//                 } else {
//                     let downloadProgress = parseInt((progress.loaded / file_size) * 100);
//                     self.showLoader2(downloadProgress+"% complete");
//                     // self.showLoader();
//                 }
//             }).catch(function (ex) {
//                 self.hideLoader();
//                 console.log(ex);
//                 deferred.reject();
//             })
//         return deferred.promise;
//     }
//     //version update work  ends

// }