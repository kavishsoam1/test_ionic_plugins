// import { Injectable } from "@angular/core";
// import { sqlLiteService } from "./sqlLite.service";

// @Injectable({
//     providedIn: 'root'
// })

// export class eAppFormService {

//     constructor(private sqlLiteService : sqlLiteService) {

//     }

//      eAppForm = {
//         personalDtl: { // LA
//             customer: {
//                 address: {
//                     permanent: {},
//                     communication: {}
//                 },
//                 dtl: {}
//             },
//             otherDtl: {
//                 profDtl: {
//                     dtl: {}
//                 }
//             },
//             accDetail: {},
//             familyDtl: [],
//             otherPolicy: [],
//             cvdDeclinedPolicy: [],
//             toggleFields: {
//                 familyBtn: '',
//                 otherPolicyBtn: '',
//                 healthQuestionnaireBtn: ''
//             }
//         },
//         otherMemberDtl: { // PROPOSER
//             customer: {
//                 address: {
//                     permanent: {},
//                     communication: {}
//                 },
//                 dtl: {}
//             },
//             otherDtl: {
//                 profDtl: {
//                     dtl: {}
//                 }
//             },
//             otherPolicy: [],
//             toggleFields: {
//                 familyBtn: '',
//                 otherPolicyBtn: '',
//                 communicationAddressAndPermanentAddressSame: ''
//             }
//         },
//         lifeStyleDtl: {
//             lifestyle: {},
//             healthQues: [],
//             femaleQues: []
//         },
//         paymentDtl: {},
//         additionalDtls: {
//             nominee: [],
//             fatca: {},
//             ir: {},
//             document: []
//         },
//         multipleInstruments: [],
//         disclaimer: {},
//         paymentLinkDetails: {},
//         Pdf: {},
//         review: {},
//         fneExists: false,
//         loveCardDetails: {},
//         form60Details: {},
//         suppDocAddtnlDtls: {},
//         cusDocUpload: {},
//         customerDocs: {},
//     };

//     eNachData = {};
//     eNachStatus = '';
//     docArray = {};
//     custDoc = {};
//     emailIdPageStatus = '';
//     payerRelation = '';
//     ifGPDorTPD;
//     unifiedData = null;
//     covid: any = {};
//     directSales = {};
//     whatsappConset = true;
//     LaAccount;
//     ChangedNameOfPO = '';
//     ChangedNameOfLA = '';
//     saveOrToogle : any;

//     setIfGPDorTPD = function (data) {
//         console.log("setting data:::::::::::::::::::::::::::", data);
//         this.ifGPDorTPD = data;
//     }
//     clearCovid = function () {
//         this.covid = ''
//     }
//     setCovidData = function (data, digitalVerificationToggle) {
//         this.covid = ''
//         this.covid = data
//         this.covid['digitalVerificationToggle'] = digitalVerificationToggle
//     }

//     getCovidData = function () {
//         return this.covid;
//     };

//     getIfGPDorTPD = function () {
//         return this.ifGPDorTPD;
//     }

//     clearDocArrayEapp = function () {
//         this.docArray = {};
//         this.custDoc = {};
//     }

//     clearIdStatus = function () {
//         this.emailIdPageStatus = '';
//     }

//     setEnachData = function (data) {
//         this.eNachData = data;
//     }

//     getEnachData = function () {
//         return this.eNachData;
//     }

//     setIdPageStatus = function (data) {
//         this.emailIdPageStatus = data;
//     }

//     getIdPageStatus = function () {
//         return this.emailIdPageStatus;
//     }


//     setEnachStatus = function (data) {
//         console.log("set Enach Data--->>", data);
//         this.eNachStatus = data;
//     }

//     getEnachStatus = function () {
//         return this.eNachStatus;
//     }


//     saveTravelForm = function (data) {
//         console.log("cust declarationnnnnn:::::::", data);

//         this.eAppForm.Pdf['travelDeclarationForm'] = data;
//     }

//     saveFne = function (data) {
//         this.eAppForm.Pdf['FNE'] = data;
//     }
//     setDocumentArray = function (array) {
//         this.docArray = array;
//         console.log("Doc::::::", this.docArray);
//     }

//     setpayerRelation = function (data) {
//         this.payerRelation = data;
//     }

//     getPayerRelation = function () {
//         return this.payerRelation;
//     }

//     clearPayerRelation = function () {
//         this.payerRelation = '';
//     }

//     getDocumentArray = function () {
//         return this.docArray
//     }

//     setCustomerDeclaration = function (data) {
//         this.custDoc = data;
//     }

//     getCustomerDeclaration = function () {
//         console.log("Declaration", this.custDoc);
//         return this.custDoc;
//     }
//     setBIPdf = (url) => {
//         this.eAppForm.Pdf['BenefitIllustrator'] = url;
//     }
//     getBIPdf = () => {
//         return this.eAppForm.Pdf['BenefitIllustrator'];
//     }
//     setMultipleInstrumentsData = function (data) {
//         console.log('in eappformservice setMultipleInstrumentsData ', data);

//         this.eAppForm.multipleInstruments = data;
//     }

//     setDataForUnified = function (data) {
//         var deferred = $q.defer();
//         this.unifiedData = data;
//         deferred.resolve(this.unifiedData);
//         return deferred.promise;
//     }

//     getDataForUnified = function (data) {
//         return this.unifiedData;
//     }

//     getMultipleInstrumentsData = function () {
//         return this.eAppForm.multipleInstruments;
//     }

//     customerType = {
//         LA: 1,
//         PROPOSER: 2
//     };
//     addressType = {
//         permanent: 1,
//         communication: 2
//     };

//     // var self = this;

//     getEappForm = function () {
//         return this.eAppForm;
//     }
//     setEappForm = function (data) {
//         this.eAppForm = data;
//     }

//     clearNomineeArray = function () {
//         this.eAppForm.additionalDtls.nominee.length = 0;
//         console.log("Nominee cleared ->", this.eAppForm);
//     }

//     getCustomerType = function () {
//         return this.customerType;
//     }

//     //! addressType() {
//     //!     return this.addressType;
//     //! }

//     addressTypeFunc() {
//         return this.addressType;
//     }




//     saveTempAccDetails = function (data) {
//         console.log(data)
//         this.LaAccount = data;
//     }

//     getTempAccDetails = function () {
//         if (!this.LaAccount || this.LaAccount == '') {
//             return this.LaAccount
//         } else {
//             return true
//         }

//     }

//     saveChangedPOAccHolderName = function (data) {
//         this.ChangedNameOfPO = data
//     };

//     getChanegedNameForPO = function () {
//         return this.ChangedNameOfPO
//     }

//     saveChangedLAAccHolderName = function (data) {
//         this.ChangedNameOfLA = data
//     }
//     getChanegedNameForLA = function () {
//         return this.ChangedNameOfLA
//     }

//     clearRemmitanceDetails = function () {
//         // LaAccount = ''
//         this.ChangedNameOfLA = ''
//         this.ChangedNameOfPO = ''
//     }
    
//     clearRemmitanceDetailsForNewApp = function () {
//         this.LaAccount = ''
//         this.ChangedNameOfLA = ''
//         this.ChangedNameOfPO = ''
//         this.saveOrToogle = ''
//     }
//     clearLASavedName = function () {
//         this.ChangedNameOfLA = ''
//     }
//     clearPOSavedName = function () {
//         this.ChangedNameOfPO = ''
//     }


//     saveAndExitOrToggleChangeInfo = function (data) {
//         this.saveOrToogle = data
//     }

//     getAndExitOrToggleChangeInfo = function () {
//         return this.saveOrToogle
//     }
//     saveWhatsappConsent = function (data) {
//         this.whatsappConset = data;
//         // eAppForm.review.whatsappConsent = data
//     }
//     getWhatsappConsent = function () {
//         return this.whatsappConset
//     }

//     //Stp obj----------------------------
//     insertStpData = function (stpObj) {
//         var deferred = $q.defer();
//         var insertQuery = 'INSERT INTO stpRules (customerId,stpObj) VALUES (?,?)';
//         var row = [];
//         row[0] = localStorage.getItem('LA_ID');
//         row[1] = JSON.stringify(stpObj);
//         this.sqlLiteService.exec(insertQuery, row).then(function (res) {
//             deferred.resolve(res.insertId);
//         })
//         return deferred.promise;

//     }
//     updateStpData = function (stpObj) {
//         var deferred = $q.defer();
//         var updateQuery = 'UPDATE stpRules SET stpObj=? WHERE customerId=?';
//         var row = [];
//         row[0] = JSON.stringify(stpObj);
//         row[1] = localStorage.getItem('LA_ID');
//         this.sqlLiteService.exec(updateQuery, row).then(function (res) {
//             deferred.resolve(res.insertId);
//         })
//         return deferred.promise;

//     }

//     resumeStpData = function (customerId) {
//         var deferred = $q.defer();
//         try {
//             this.getMasterStatusById('stpRules', 'customerId', customerId).then(function (res) {
//                 if (res[0]) {
//                     let stpObj = JSON.parse(res[0].stpObj);
//                     this.genericServices.setStpObject(stpObj);
//                     deferred.resolve("success")
//                 }
//                 //if res is null
//                 else {
//                     deferred.resolve("success");
//                 }
//                 //if res is null
//             });
//         } catch (err) {
//             deferred.reject(err);
//         }
//         return deferred.promise;
//     }
//     //STP------------------------

//     initEformData = function () { }

//     insertCustomerTbl = function (val, typeOfCustomer) {
//         console.log("values::::::::::", val);
//         try {
//             var deferred = $q.defer();
//             var customerquery = "INSERT INTO customer (type,title,fName,lName,fatherName,motherName,ageProof,dob,gender,maritalStatus,nationality,residentialStatus,age,mobile,email,landline,relationLA,pan,aadhaar,isLifeandProposerSame,isPermAndCommAddrSame,isFamilyActive,isOtherPolicyActive,isCustomerNotHealthy,imageUrl,gridFsId,isCvdDeclinedPolicyActive,maidenName,spouseName,ckycExist,ckycNumber,ckycType,nameProposer,dobProposer,genderProposer,titleProposer,ageProposer) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//             this.sqlLiteService.exec(customerquery, [typeOfCustomer, val.title, val.fName, val.lName, val.fatherName || '', val.motherName || '', val.ageProof || '', val.dob, val.gender, val.maritalStatus || '', val.nationality || '', val.residentialStatus || '', val.age || '', val.mobile || '', val.email || '', val.landline || '', val.relationLA || '', val.pan || '', val.aadhaar || val.adhar || '', val.isLifeandProposerSame || 0, val.isPermAndCommAddrSame || 0, val.isFamilyActive || 0, val.isOtherPolicyActive || 0, val.isCustomerNotHealthy || 0, val.imageUrl || '', val.gridFsId || '', val.isCvdDeclinedPolicyActive || '', val.maidenName || '', val.spouseName || '', val.ckycExist || 0, val.ckycNumber || '', val.ckycType || '', val.nameProposer || '', val.dobProposer || '', val.genderProposer || '', val.titleProposer || '', val.ageProposer || '']).then(function (res) {
//                 localStorage.setItem('LA_ID', res.insertId);
//                 this.getMasterStatusById('customer', 'id', res.insertId).then(function (res) {
//                     deferred.resolve(res[0]);
//                 });
//             }, function (err) {
//                 console.error(err);
//             });

//         } catch (Ex) { }

//         return deferred.promise;
//     }

//     insertProposerTbl = function (val, typeOfCustomer) {
//         try {
//             var deferred = $q.defer();
//             var query = "INSERT INTO customer (type,title,fName,lName,fatherName,motherName,ageProof,dob,gender,maritalStatus,nationality,residentialStatus,age,mobile,email,landline,relationLA,pan,aadhaar,policyId,imageUrl,gridFsId,isPermAndCommAddrSame,maidenName,spouseName,ckycExist,ckycNumber,ckycType) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//             this.sqlLiteService.exec(query, [typeOfCustomer, val.title, val.fName, val.lName, val.fatherName || '', val.motherName || '', '', val.dob, val.gender, val.maritalStatus || '', val.nationality || '', val.residentialStatus || '', '', val.mobile || '', val.email || '', val.landline || '', val.relationLA || '', val.pan || '', val.adhar || val.aadhaar || '', localStorage.getItem('policyId'), val.imageUrl || '', val.gridFsId || '', val.isPermAndCommAddrSame || '', val.maidenName || '', val.spouseName || '', val.ckycExist || 0, val.ckycNumber || '', val.ckycType || '']).then(function (res) {
//                 localStorage.setItem('PROPOSER_ID', res.insertId);
//                 this.getMasterStatusById('customer', 'id', res.insertId).then(function (res) {
//                     deferred.resolve(res[0]);
//                 });
//             }, function (err) {
//                 console.error(err);
//             });

//         } catch (Ex) { }

//         return deferred.promise;
//     }

//     insertAgentCategory = function (applicationNo, agentCategory) {
//         try {
//             var deferred = $q.defer();
//             var query = "INSERT INTO agentCategoryType (applicationNo, agentCategory) VALUES (?, ?)";
//             this.sqlLiteService.exec(query, [applicationNo, agentCategory]).then(function (res) {
//                 localStorage.setItem('AGENT_CATEGORY', agentCategory);
//                 console.log("Insert into agentCategory Successful");
//             }, function (err) {
//                 console.log("Insert into agentCategory error " + err);
//             });
//         } catch (Ex) { }

//         return deferred.promise;
//     }



//     // insertDirectSales = function(applicationNo,businessType,upsellPolicyNumber) {
//     //     try {
//     //         console.log(applicationNo,businessType,upsellPolicyNumber)
//     //         var deferred = $q.defer();
//     //         var query = "INSERT INTO directSales (applicationNo,businessType,upsellPolicyNumber) VALUES (?, ?, ?)";
//     //         sqlLiteService.exec(query, [applicationNo,businessType,upsellPolicyNumber]).then(function(res) {
//     //             console.log("Insert into directSales Successful");
//     //         }, function(err) {
//     //             console.log("Insert into directSales error ");
//     //             console.log(err);
//     //         });
//     //     } catch (Ex) {}

//     //     return deferred.promise;
//     // }

//     // updateDirectSales = function(applicationNo, businessType,upsellPolicyNumber) {
//     //     try {
//     //         var deferred = $q.defer();
//     //         var query = "UPDATE directSales SET businessType=?,upsellPolicyNumber=? WHERE applicationNo=?";
//     //         sqlLiteService.exec(query, [businessType,upsellPolicyNumber,applicationNo]).then(function(res) {
//     //             console.log("Update directSales success");
//     //         }, function(err) {
//     //             console.log("Update directSales failed");

//     //         })
//     //     } catch (ex) {}
//     //     return deferred.promise;
//     // }

//     // selectDirectSalesData = function(applicationNo) {
//     //     var obj = {};
//     //     try {
//     //         var deferred = $q.defer();
//     //         var query = "SELECT * FROM directSales WHERE applicationNo = ?";
//     //         sqlLiteService.exec(query, [applicationNo]).then(function(res) {
//     //             console.log("Select from directSales success");
//     //             obj = res.rows.item(0);
//     //             console.log(obj);
//     //             deferred.resolve({status: true,res: obj});
//     //         }, function(err) {
//     //             console.log("select from agentCategory error ");
//     //             console.log(err);
//     //             deferred.resolve({status: false});
//     //         })
//     //     } catch (Ex) {}
//     //     return deferred.promise;
//     // }

//     // selectAndCountDirectSalesData = function(applicationNo) {
//     //     var deferred = $q.defer();
//     //     var selectQuery = "SELECT COUNT(*) as COUNT FROM directSales WHERE applicationNo = ?"
//     //     try {
//     //         sqlLiteService.exec(selectQuery, [applicationNo]).then(function(res) {
//     //             var length = 0;
//     //             for (var i = 0; i < res.rows.length; i++) {
//     //                 length = res.rows.item(i);
//     //             }
//     //             length = length.COUNT;                
//     //             console.log(length);                
//     //             if (length > 0) {
//     //                 deferred.resolve({ status: true });
//     //             } else {
//     //                 deferred.resolve({ status: false });
//     //             }

//     //         }, function(err) {
//     //             deferred.resolve({ status: false });
//     //             console.error(err);
//     //         });
//     //     } catch (Ex) {
//     //         deferred.resolve({ status: false });
//     //     }
//     //     return deferred.promise;
//     // }

//     selectAgentCategory = function (applicationNo) {
//         try {
//             var deferred = $q.defer();
//             var query = "SELECT agentCategory FROM agentCategoryType WHERE applicationNo = ?";
//             this.sqlLiteService.exec(query, [applicationNo]).then(function (res) {
//                 console.log("Select from agentCategory success");
//                 var obj = res.rows.item(0);
//                 var agent = "";
//                 console.log("on selecting from agent category :::", obj);
//                 if (obj && obj.agentCategory) {
//                     agent = obj.agentCategory;
//                     localStorage.setItem('AGENT_CATEGORY', obj.agentCategory);
//                 }
//                 else {
//                     console.log("Agent category not found :::::::");
//                     localStorage.setItem('AGENT_CATEGORY', agent);
//                 }
//                 deferred.resolve(obj);
//             }, function (err) {
//                 console.log("select from agentCategory error " + err);
//             })
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     insertWhatsappConsent = function (pId, wtConsent) {
//         try {
//             var deferred = $q.defer();
//             let wv = 1;
//             if (wtConsent && wtConsent == true) {
//                 wv = 1
//             } else {
//                 wv = 0
//             }
//             console.log("insertWhatsappConsent::::::::::", pId, wtConsent);
//             // let appNo = "\'" + applicationNo + "\'"
//             // where policyId=" + localStorage.getItem('policyId')
//             var query = "INSERT INTO whatsappconsent (policyId, wtConsent) VALUES (?, ?)";
//             this.sqlLiteService.exec(query, [pId, wv]).then(function (res) {
//                 // localStorage.setItem('AGENT_CATEGORY', agentCategory);
//                 console.log("Insert into whatsappconsent Successful");
//                 deferred.resolve(res)
//             }, function (err) {
//                 console.log("Insert into whatsappconsent error " + err);
//                 deferred.resolve(err)
//             });
//         } catch (Ex) { }

//         return deferred.promise;
//     }

//     selectWhatsappConsent = function (pId) {
//         try {
//             var deferred = $q.defer();
//             console.log("selectWhatsappConsent:::::::::::::", pId);
//             // let appNo = "\'" + applicationNo + "\'"
//             // where policyId=" + localStorage.getItem('policyId')
//             let policyId = pId;

//             var query = "SELECT * FROM whatsappconsent WHERE policyId = ?";
//             this.sqlLiteService.exec(query, [policyId]).then(function (res) {
//                 console.log("Select from whatsappconsent success");
//                 let obj : any;
//                 obj = res.rows.item(0);
//                 // var agent = "";
//                 if (obj && obj.policyId) {
//                     console.log("on selecting from whatsappconsent :::", obj);
//                     obj = res.rows.item(0);
//                     deferred.resolve(obj);

//                 } else {
//                     obj = ''
//                     deferred.resolve(obj);
//                 }
//                 // if (obj) {


//                 // }else{
//                 //     deferred.reject("no data found")
//                 // }

//             }, function (err) {
//                 console.log("select from whatsappconsent error " + err);
//             })
//         } catch (Ex) { }
//         return deferred.promise;
//     }
//     updateWhatsappConsent = function (pId, wtConsent) {
//         try {
//             var deferred = $q.defer();
//             let wv = 1
//             if (wtConsent && wtConsent == true) {
//                 wv = 1
//             } else {
//                 wv = 0
//             }
//             console.log("updateWhatsappConsent:::::::::::", pId, wtConsent);
//             // let appNo = "\'" + applicationNo + "\'"
//             // where policyId=" + localStorage.getItem('policyId')
//             let poId = pId
//             var query = "UPDATE whatsappconsent SET wtConsent=? WHERE policyId=?";
//             this.sqlLiteService.exec(query, [wv, poId]).then(function (res) {
//                 console.log("Update whatsappconsent success");
//                 deferred.resolve(res)
//             }, function (err) {
//                 console.log("Update whatsappconsent failed");
//                 deferred.reject(err)
//             })
//         } catch (ex) { }

//         return deferred.promise;
//     }

//     updateAgentCategory = function (applicationNo, agentCategory) {
//         try {
//             var deferred = $q.defer();
//             var query = "UPDATE agentCategoryType SET agentCategory=? WHERE applicationNo=?";
//             this.sqlLiteService.exec(query, [agentCategory, applicationNo]).then(function (res) {
//                 console.log("Update agentCategory success");
//             }, function (err) {
//                 console.log("Update agentCategory failed");

//             })
//         } catch (ex) { }

//         return deferred.promise;
//     }

//     updateCustomerTbl = function (val) {
//         console.log(val);
//         try {
//             var deferred = $q.defer();
//             var updateCustomerquery = "UPDATE customer SET title=?,fName=?,lName=?,fatherName=?,motherName=?,ageProof=?,dob=?,gender=?,maritalStatus=?,nationality=?,residentialStatus=?,age=?,mobile=?,email=?,landline=?,relationLA=?,pan=?,aadhaar=?,isLifeandProposerSame=?,imageUrl=?,maidenName=?,spouseName=?,ckycExist=?,ckycNumber=?,ckycType=?,nameProposer=?,dobProposer=?,genderProposer=?,titleProposer=?,ageProposer=? where id=" + val.dtl.id;
//             this.sqlLiteService.exec(updateCustomerquery, [val.dtl.title, val.dtl.fName, val.dtl.lName, val.dtl.fatherName || '', val.dtl.motherName || '', val.dtl.ageProof || '', val.dtl.dob, val.dtl.gender, val.dtl.maritalStatus || '', val.dtl.nationality || '', val.dtl.residentialStatus || '', val.dtl.age || '', val.dtl.mobile || '', val.dtl.email || '', val.dtl.landline || '', val.dtl.relationLA || '', val.dtl.pan || '', val.dtl.adhar || val.dtl.aadhaar || '', val.dtl.isLifeandProposerSame || 0, val.dtl.imageUrl || '', val.dtl.maidenName || '', val.dtl.spouseName || '', val.dtl.ckycExist || 0, val.dtl.ckycNumber || '', val.dtl.ckycType || '', val.dtl.nameProposer || '', val.dtl.dobProposer || '', val.dtl.genderProposer || '', val.dtl.titleProposer || '', val.dtl.ageProposer || '']).then(function (res) {
//                 this.getMasterStatusById('customer', 'id', val.dtl.id).then(function (res) {
//                     deferred.resolve(res[0]);
//                 });
//                 console.log("success in updating customer");
//             }, function (err) {
//                 console.log("error in update customer");
//             });
//         } catch (Ex) { }

//         return deferred.promise;
//     }

//     // updates spouse details for Saral pension policy
//     updateCustomerSpouseDetails = function (val) {
//         console.log(val);
//         try {
//             var deferred = $q.defer();
//             var updateSpousequery = "UPDATE customer SET maritalStatus=?,spouseName=?,spouseGender=?,spouseRelationship=?,spouseDOB=? where id=" + val.id;

//             this.sqlLiteService.exec(updateSpousequery, [val.maritalStatus || '', val.spouseName || '', val.spouseGender || '', val.spouseRelationship || '', val.spouseDOB || '']).then(function (res) {
//                 this.getMasterStatusById('customer', 'id', val.id).then(function (res) {
//                     console.log(res);
//                     deferred.resolve(res[0]);
//                 });
//                 console.log("success in updating spouse details");
//             }, function (err) {
//                 console.error(err);
//                 console.log("error in updating spouse details");
//             });
//         } catch (Ex) {
//             //set
//         }

//         return deferred.promise;
//     }

//     conditionalUpdateCustomer = function (updateField, setValue, whereField, whereVal) {
//         try {
//             var deferred = $q.defer();
//             var updateCustomerPolicy = "UPDATE customer SET " + updateField + "=? where " + whereField + "=" + whereVal;
//             this.sqlLiteService.exec(updateCustomerPolicy, [setValue]).then(function (res) {
//                 console.log('success');
//                 deferred.resolve("success");
//             }, function (err) {
//                 console.error(err);
//                 deferred.resolve(err);
//             });
//         } catch (Ex) { }

//         return deferred.promise;
//     }

//     // this function returns an object which consists of all the data present inside a table
//     getMasterStatusById = function (tableName, fieldName, id) {
//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM " + tableName + " where " + fieldName + "=" + id;
//             //console.log(selectQuery);
//             this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//                 for (var i = 0; i < res.rows.length; i++) {
//                     Obj.push(res.rows.item(i));
//                 }
//                 deferred.resolve(Obj);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     getMasterFieldValue = function (tableName, fieldName, inputField, id) {
//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT " + fieldName + " FROM " + tableName + " where " + inputField + "=" + id;
//             console.log("selectQuery:::::::::", selectQuery);
//             this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//                 for (var i = 0; i < res.rows.length; i++) {
//                     Obj.push(res.rows.item(i));
//                 }
//                 console.log(Obj);
//                 deferred.resolve(Obj);
//             }, function (err) {
//                 console.error(err);
//             });

//         } catch (e) {
//             console.log('db access error');
//         }
//         return deferred.promise;
//     }

//     searchMaster = function (tableName, fieldName, query) {
//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var likeQuery = "SELECT * FROM " + tableName + " where " + fieldName + " LIKE " + "'%" + query + "%'";
//             console.log(likeQuery);
//             this.sqlLiteService.exec(likeQuery, []).then(function (res) {
//                 for (var i = 0; i < res.rows.length; i++) {
//                     Obj.push(res.rows.item(i));
//                 }
//                 deferred.resolve(Obj);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (e) { }
//         return deferred.promise;
//     }

//     getProofName = function (tableName, code) {
//         var Obj = [];
//         try {
//             console.log('tableeeeenameee', tableName, 'codeeeeeeee++++', code);

//             var deferred = $q.defer();
//             var likeQuery = "SELECT desc FROM " + tableName + " where code='" + code + "'";
//             this.sqlLiteService.exec(likeQuery, []).then(function (res) {
//                 for (var i = 0; i < res.rows.length; i++) {
//                     // console.log(res.rows.item(i));
//                     Obj.push(res.rows.item(i));
//                 }
//                 deferred.resolve(Obj);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (e) { }
//         return deferred.promise;
//     }

//     // this function is a common function for storing all types of address(permanent,comm.)
//     // parameters are- val-object containg data,addrType-permanent,communication,custType-customer,proposer
//     insertAddressTabl = function (val, addrType, custType) {

//         var id, addressType;
//         if (custType == 1) {
//             id = localStorage.getItem('LA_ID');
//         } else if (custType == 2) {
//             id = localStorage.getItem('PROPOSER_ID');
//         }
//         if (addrType == 1) {
//             addressType = 'permanent';
//         } else if (addrType == 2) {
//             addressType = 'communication';
//         }

//         var deferred = $q.defer();

//         try {
//             var query = "INSERT INTO address (customerId,addrType,addr1,addr2,addr3,landmark,city,state,country,addrProof,pincode,sameAsLA) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
//             this.sqlLiteService.exec(query, [id, addressType, val.address[addressType].addr1 || '', val.address[addressType].addr2 || '', val.address[addressType].addr3 || '', val.address[addressType].landmark || '', val.address[addressType].city || '', val.address[addressType].state || '', '101', '', val.address[addressType].pincode || '', val.address[addressType].sameAsLA || 0]).then(function (res) {
//                 this.getMasterStatusById('address', 'customerId', id).then(function (res) {
//                     deferred.resolve(res);
//                 });
//             }, function (err) {
//                 console.error(err);
//             });

//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     updateAddressTabl = function (val, addrType, custType) {
//         var id, addressType;
//         if (custType == 1) {
//             id = localStorage.getItem('LA_ID');
//         } else if (custType == 2) {
//             id = localStorage.getItem('PROPOSER_ID');
//         }
//         if (addrType == 1) {
//             addressType = 'permanent';
//         } else if (addrType == 2) {
//             addressType = 'communication';
//         }
//         var deferred = $q.defer();
//         var updateAddrquery = "UPDATE address SET addr1=?,addr2=?,addr3=?,landmark=?,city=?,state=?,pincode=? where customerId=" + id + " and addrType='" + addressType + "'";

//         this.sqlLiteService.exec(updateAddrquery, [val.address[addressType].addr1 || '', val.address[addressType].addr2 || '', val.address[addressType].addr3 || '', val.address[addressType].landmark || '', val.address[addressType].city || '', val.address[addressType].state || '', val.address[addressType].pincode || '']).then(function (res) {
//             this.getMasterStatusById('address', 'customerId', id).then(function (res) {
//                 deferred.resolve(res);
//             });
//         }, function (err) {
//             console.error(err);
//         });

//         return deferred.promise;
//     }

//     display = function (name) {
//         var selectAddquery = "SELECT * FROM " + name;
//         this.sqlLiteService.exec(selectAddquery, []).then(function (res) {
//             if (res.rows.length > 0) {
//                 for (var i = 0; i < res.rows.length; i++) {
//                     //console.log('display ' + name, res.rows.item(i));
//                 }
//             } else {
//                 // console.log("No results found");
//             }
//         }, function (err) {
//             console.error(err);
//         });
//     }

//     // get all data from a table in form of an object without any condition
//     getMasterStatus = function (tableName) {
//         var Obj = [];

//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM " + tableName;
//             this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//                 if (res.rows.length > 0) {
//                     for (var i = 0; i < res.rows.length; i++) {
//                         Obj.push(res.rows.item(i));
//                     }
//                     console.log("get master status resp:::::::::", res);

//                     deferred.resolve(Obj);
//                 } else {
//                     deferred.resolve(Obj);
//                 }

//             }, function (err) {
//                 console.error(err);
//             });

//         } catch (Ex) {
//             deferred.reject("error");
//         }

//         return deferred.promise;
//     }

//     insertEducationTbl = function (id) {
//         try {
//             var deferred = $q.defer();
//             var query = "INSERT INTO education (customerId,education,qualification,occupation,subOccu,orgType,nameOfOrg,desgn,experience,annInc,incProof,idenProof) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
//             this.sqlLiteService.exec(query, [id, '', '', '', '', '', '', '', '', '', '', '']).then(function (res) {
//                 this.getMasterStatusById('education', 'customerId', id).then(function (res) {
//                     deferred.resolve(res[0]);
//                 });
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     updateEducationTbl = function (val) {
//         try {
//             var updateEducationTbl = "UPDATE education SET education=?,qualification=?,occupation=?,subOccu=?,orgType=?,nameOfOrg=?,desgn=?,experience=?,annInc=?,incProof=?,idenProof=? where customerId=" + val.customerId;
//             this.sqlLiteService.exec(updateEducationTbl, [val.education || '', val.qualification || '', val.occupation || '', val.subOccu || '', val.orgType || '', val.nameOfOrg || '', val.desgn || '', val.experience || '', val.annInc || '', val.incProof || '', val.idenProof || '']).then(function (res) { }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//     }

//     // updateEducationTbl = function (val) {
//     //     try {
//     //         var updateEducationTbl = "UPDATE education SET education=?,qualification=?,subOccu=?,orgType=?,nameOfOrg=?,desgn=?,experience=?,annInc=?,incProof=?,idenProof=? where customerId=" + val.customerId;
//     //         this.sqlLiteService.exec(updateEducationTbl, [val.education || '', val.qualification || '', val.occupation || '', val.subOccu || '', val.orgType || '', val.nameOfOrg || '', val.desgn || '', val.experience || '', val.annInc || '', val.incProof || '', val.idenProof || '']).then(function (res) { }, function (err) {
//     //             console.error(err);
//     //         });
//     //     } catch (Ex) { }
//     // }

//     getData = function (tableName) {
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM " + tableName;
//             this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//                 if (res.rows.length > 0) {
//                     deferred.resolve(res.rows.item(0));
//                 } else {
//                     deferred.reject("No results found");
//                 }
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }

//         return deferred.promise;
//     }

//     getPolicyId = function (customerId) {
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT id FROM policy where customerId=" + customerId;
//             this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//                 deferred.resolve(res.rows.item(0).id);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     insertAccData = function (val) {
//         try {
//             var deferred = $q.defer();
//             var insertBankQuery = "INSERT INTO bankDetail (policyId,payerName,relWithProposer,accHolderName,accNo,bankName,bankBranchName,micrCode,ifscCode,accType) VALUES (?,?,?,?,?,?,?,?,?,?)";
//             this.sqlLiteService.exec(insertBankQuery, [localStorage.getItem('policyId'), '', '', val.accHolderName || '', val.accNo || '', val.bankName || '', val.bankBranchName || '', val.MICR || '', val.ifscCode || '', val.accType || '']).then(function (res) {

//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     updateAccData = function (val) {

//         try {
//             var deferred = $q.defer();
//             var updateEducationTbl = "UPDATE bankDetail SET payerName=?,relWithProposer=?,accHolderName=?,accNo=?,bankName=?,bankBranchName=?,micrCode=?,ifscCode=?,accType=? where policyId=" + localStorage.getItem('policyId');
//             this.sqlLiteService.exec(updateEducationTbl, ['', '', val.accHolderName || '', val.accNo || '', val.bankName || '', val.bankBranchName || '', val.MICR || '', val.ifscCode || '', val.accType || '']).then(function (res) { }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     insertLifestyleData = function (id) {

//         var deferred = $q.defer();
//         var insertlifestyleDetails = "INSERT INTO lifestyleDetails (customerId,tobacco,alcohol,narcotics,alcohol_perDay,alcohol_perWeek,height,weight,tobaccoDayQuan,tobaccoNoYear,NarcoticsDetails,NarcoticsQuantity,NarcoticsNoOfYears) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
//         this.sqlLiteService.exec(insertlifestyleDetails, [id, 0, 0, 0, '', '', '', '', '', '', '']).then(function (res) {
//             this.getMasterStatusById('lifestyleDetails', 'customerId', id).then(function (res) {
//                 deferred.resolve(res[0]);
//             });
//         }, function (err) {
//             console.error(err);
//         });

//         return deferred.promise;
//     }

//     updateLifestyleData = function (val) {

//         try {
//             var updateLifestyleData = "UPDATE lifestyleDetails SET tobacco=?,alcohol=?,narcotics=?,alcohol_perDay=?,alcohol_perWeek=?,height=?,weight=?,tobaccoDayQuan=?,tobaccoNoYear=?,NarcoticsDetails=?,NarcoticsQuantity=?,NarcoticsNoOfYears=? where customerId=" + localStorage.getItem('LA_ID');
//             this.sqlLiteService.exec(updateLifestyleData, [val.tobacco || 0, val.alcohol || 0, val.narcotics || 0, '', val.alcohol_perWeek || '', val.height || '', val.weight || '', val.tobaccoDayQuan || '', val.tobaccoNoYear || '', val.NarcoticsDetails || '', val.NarcoticsQuantity || '', val.NarcoticsNoOfYears || '']).then(function (res) { }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//     }

//     insertHealthData = function (data) {
//         var deferred = $q.defer();
//         var insertHealthDetails = "INSERT INTO healthDetails (customerId,questionId,answer,docName,natureOfDisease,dateOfDiagnosis,recoveryStatus) VALUES (?,?,?,?,?,?,?)";
//         for (var i = 0; i < data.length; i++) {
//             this.sqlLiteService.exec(insertHealthDetails, [localStorage.getItem('LA_ID'), data[i].id || '', data[i].ans || '', data[i].doctor.name || '', data[i].doctor.natureOfDisease || '', data[i].doctor.dateOfDiagnosis || '', data[i].doctor.recoveryStatus || '']).then(function (res) {
//                 //console.log("insert insertHealthDetails -> " + res.insertId);
//             }, function (err) {
//                 console.error(err);
//             });
//         }
//         return deferred.promise;
//     }

//     updateHealthData = function (data) {
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             var updateHealthData = "UPDATE healthDetails SET answer=?,docName=?,natureOfDisease=?,dateOfDiagnosis=?,recoveryStatus=? where customerId=" + localStorage.getItem('LA_ID') + " and questionId='" + data[i].id + "'";
//             this.sqlLiteService.exec(updateHealthData, [data[i].ans || '', data[i].doctor.name || '', data[i].doctor.natureOfDisease || '', data[i].doctor.dateOfDiagnosis || '', data[i].doctor.recoveryStatus || '']).then(function (res) {
//                 //console.log("Updated Health");
//             }, function (err) {
//                 console.error(err);
//             });
//         }
//         return deferred.promise;
//     }

//     deleteData = function (tableName, whereField, whereVal) {
//         var deferred = $q.defer();
//         var deleteFamilyMembers = "DELETE from " + tableName + " where " + whereField + "=" + whereVal;
//         this.sqlLiteService.exec(deleteFamilyMembers, []).then(function (res) { }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     saveFamilyDetails = function (data) {
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 if (data[i].id) {
//                     var query = "UPDATE familyDetail SET relationWithLA=?,age=?,healthStatus=?,cause=?,ageAtDeath=? where customerId=" + localStorage.getItem('LA_ID') + " and id=" + data[i].id;
//                     this.sqlLiteService.exec(query, [data[i].relationWithLA || '', data[i].age || '', data[i].healthStatus || '', data[i].cause || '', data[i].ageAtDeath || '']).then(function (res) {
//                         deferred.resolve('success');
//                     }, function (err) {
//                         console.error(err);
//                     });
//                 } else {
//                     var query = "INSERT INTO familyDetail (customerId,relationWithLA,age,healthStatus,cause,ageAtDeath) VALUES (?,?,?,?,?,?)";
//                     this.sqlLiteService.exec(query, [localStorage.getItem('LA_ID'), data[i].relationWithLA || '', data[i].age || '', data[i].healthStatus || '', data[i].cause || '', data[i].ageAtDeath || '']).then(function (res) {
//                         Object.assign(this.eAppForm.personalDtl.familyDtl[i], { id: res.insertId });
//                         deferred.resolve('success');
//                     }, function (err) {
//                         console.error(err);
//                     });
//                 }
//             })(i);
//         }
//         return deferred.promise;
//     }

//     saveNomineeDetails = function (data) {
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 if (data[i].id) {
//                     var query = "UPDATE nominee SET name=?,dob=?,contact=?,relationLA=? where policyId=" + localStorage.getItem('policyId') + " and id=" + data[i].id;
//                     this.sqlLiteService.exec(query, [data[i].name || '', data[i].dob || '', data[i].contactNo || '', data[i].relationship || '']).then(function (res) {
//                         if (data[i].showAppointee) {
//                             //appointee exists
//                             if (data[i].appointeeDetails.hasOwnProperty('id')) {
//                                 var query = "UPDATE nominee SET name=?,dob=?,contact=?,relationLA=? where policyId=" + localStorage.getItem('policyId') + " and id=" + data[i].appointeeDetails.id;
//                                 this.sqlLiteService.exec(query, [data[i].appointeeDetails.name || '', data[i].appointeeDetails.dob || '', data[i].appointeeDetails.contactNo || '', data[i].appointeeDetails.relationship || '']).then(function (res) {
//                                     //console.log('success');
//                                 }, function (err) {
//                                     console.error(err);
//                                 });
//                             } else {
//                                 var query = "INSERT INTO nominee (policyId,name,dob,contact,relationLA,appointee_nomineeId) VALUES (?,?,?,?,?,?)";
//                                 this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), data[i].appointeeDetails.name || '', data[i].appointeeDetails.dob || '', data[i].appointeeDetails.contactNo || '', data[i].appointeeDetails.relationship || '', data[i].id]).then(function (res) {
//                                     angular.extend(eAppForm.additionalDtls.nominee[i].appointeeDetails, { id: res.insertId });
//                                     // console.log('success');
//                                 }, function (err) {
//                                     console.error(err);
//                                 });
//                             }
//                         }

//                     }, function (err) {
//                         console.error(err);
//                     });
//                 } else {
//                     var query = "INSERT INTO nominee (policyId,name,dob,contact,relationLA) VALUES (?,?,?,?,?)";
//                     this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), data[i].name || '', data[i].dob || '', data[i].contactNo || '', data[i].relationship || '']).then(function (res) {
//                         angular.extend(eAppForm.additionalDtls.nominee[i], { id: res.insertId });
//                         var nomineeId = res.insertId;

//                         if (data[i].showAppointee) {
//                             //appointee exists
//                             var query = "INSERT INTO nominee (policyId,name,dob,contact,relationLA,appointee_nomineeId) VALUES (?,?,?,?,?,?)";
//                             this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), data[i].appointeeDetails.name || '', data[i].appointeeDetails.dob || '', data[i].appointeeDetails.contactNo || '', data[i].appointeeDetails.relationship || '', nomineeId]).then(function (res) {
//                                 angular.extend(eAppForm.additionalDtls.nominee[i].appointeeDetails, { id: res.insertId });
//                                 // console.log('success');
//                             }, function (err) {
//                                 console.error(err);
//                             });
//                         }
//                     }, function (err) {
//                         console.error(err);
//                     });
//                 }
//             })(i);
//         }
//         return deferred.promise;
//     }

//     insertFATCA = function (data) {
//         console.log("insertFATCA", data.birthcountry, typeof data.birthcountry);
//         var policyId = localStorage.getItem('policyId');
//         var deferred = $q.defer();
//         var insertFATCA = "INSERT INTO FATCA (policyId,spouseName,isUsPerson,isBirthCounIndia,birthCountry,place,otherCountryTaxResident,isChecked) VALUES (?,?,?,?,?,?,?,?)";
//         this.sqlLiteService.exec(insertFATCA, [localStorage.getItem('policyId'), data.spouseName || '', data.isUsPerson || '', data.isBirthCounIndia, data.birthcountry || '', data.place || '', data.otherCountryTaxResident || '', data.isChecked || '']).then(function (res) {
//             if (data.otherCountryTaxResident) {
//                 deleteAndInsertTaxResidencyTbl(data, policyId);
//             }
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     updateFATCA = function (data) {
//         console.log("updating fatca", data)
//         var policyId = localStorage.getItem('policyId');
//         var deferred = $q.defer();
//         var query = "UPDATE FATCA SET spouseName=?,isUsPerson=?,isBirthCounIndia=?,birthCountry=?,place=?,otherCountryTaxResident=?,isChecked=? where policyId=" + policyId;
//         this.sqlLiteService.exec(query, [data.spouseName || '', data.isUsPerson || '', data.isBirthCounIndia, data.birthcountry || '', data.place || '', data.otherCountryTaxResident || '', data.isChecked || '']).then(function (res) {
//             if (data.otherCountryTaxResident) {
//                 deleteAndInsertTaxResidencyTbl(data, policyId);
//             }
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }




//     function deleteAndInsertTaxResidencyTbl(data, policyId) {
//         var deferred = $q.defer();
//         var query = "DELETE from FATCATaxResidencyDtl where policyId=" + policyId;
//         this.sqlLiteService.exec(query, []).then(function (res) {
//             insertTaxResidencyTbl(data.TaxDetails, policyId);
//         }, function (err) {
//             console.error('err', err);
//         });
//         return deferred.promise;
//     }

//     function insertTaxResidencyTbl(data, policyId) {
//         var deferred = $q.defer();
//         var insertFATCA = "INSERT INTO FATCATaxResidencyDtl (policyId,country,idenNo,idenType,reason) VALUES (?,?,?,?,?)";
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 this.sqlLiteService.exec(insertFATCA, [policyId, data[i].countyOfTaxResident || '', data[i].taxPayerIdentificationNo || '', data[i].IdentificationType || '', data[i].tinNotAvaliableReason || '']).then(function (res) {
//                     // angular.extend(eAppForm.additionalDtls.fatca.TaxDetails[i], { id: res.insertId });
//                     console.log("insertFATCATaxREsidency -> " + res.insertId);
//                 }, function (err) {
//                     console.error(err);
//                 });
//             })(i);
//         }
//         return deferred.promise;
//     }


//     insertFATCAProposer = function (data) {
//         console.log("insertFATCAProposer", data);
//         var policyId = localStorage.getItem('policyId');
//         var deferred = $q.defer();
//         var insertFATCA = "INSERT INTO FATCAproposer (policyId,isUsPersonProposer,isBirthCounIndiaProposer,birthcountryProposer,placeProposer,otherCountryTaxResidentProposer,isChecked) VALUES (?,?,?,?,?,?,?)";
//         this.sqlLiteService.exec(insertFATCA, [localStorage.getItem('policyId'), data.isUsPersonProposer || '', data.isBirthCounIndiaProposer, data.birthcountryProposer || '', data.placeProposer || '', data.otherCountryTaxResidentProposer || '', data.isChecked || '']).then(function (res) {
//             if (data.otherCountryTaxResidentProposer) {
//                 deleteAndInsertTaxResidencyTblProposer(data, policyId);
//             }
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     updateFATCAProposer = function (data) {
//         console.log("updated fatca proposer", data);
//         var policyId = localStorage.getItem('policyId');
//         var deferred = $q.defer();
//         var query = "UPDATE FATCAproposer SET isUsPersonProposer=?,isBirthCounIndiaProposer=?,birthcountryProposer=?,placeProposer=?,otherCountryTaxResidentProposer=?,isChecked=? where policyId=" + policyId;
//         this.sqlLiteService.exec(query, [data.isUsPersonProposer || '', data.isBirthCounIndiaProposer || '', data.birthcountryProposer, data.placeProposer || '', data.otherCountryTaxResidentProposer || '', data.isChecked || '']).then(function (res) {
//             if (data.otherCountryTaxResidentProposer) {
//                 deleteAndInsertTaxResidencyTblProposer(data, policyId);
//             }
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     function deleteAndInsertTaxResidencyTblProposer(data, policyId) {
//         console.log("deleteAndInsertTaxResidencyTblProposer", data);
//         var deferred = $q.defer();
//         var query = "DELETE from FATCATaxResidencyDtlProposer where policyId=" + policyId;
//         this.sqlLiteService.exec(query, []).then(function (res) {
//             insertTaxResidencyTblProposer(data.TaxDetailsProposer, policyId);
//         }, function (err) {
//             console.error('err', err);
//         });
//         return deferred.promise;
//     }

//     function insertTaxResidencyTblProposer(data, policyId) {
//         console.log("insertTaxResidencyTblProposer", data);
//         var deferred = $q.defer();
//         var insertFATCA = "INSERT INTO FATCATaxResidencyDtlProposer (policyId,country,idenNo,idenType,reason) VALUES (?,?,?,?,?)";
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 this.sqlLiteService.exec(insertFATCA, [policyId, data[i].countyOfTaxResident || '', data[i].taxPayerIdentificationNo || '', data[i].IdentificationType || '', data[i].tinNotAvaliableReason || '']).then(function (res) {
//                     // angular.extend(eAppForm.additionalDtls.fatca.TaxDetails[i], { id: res.insertId });
//                     console.log("insertFATCATaxREsidency -> " + res.insertId);
//                 }, function (err) {
//                     console.error(err);
//                 });
//             })(i);
//         }
//         return deferred.promise;
//     }

//     saveOtherPolicies = function (data, custType) {
//         var id, val;
//         if (custType == 1) {
//             id = localStorage.getItem('LA_ID');
//             val = 'personalDtl';
//         } else if (custType == 2) {
//             id = localStorage.getItem('PROPOSER_ID')
//             val = 'otherMemberDtl';
//         }

//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 if (data[i].id) {
//                     var query = "UPDATE prevPolicy SET issueCompany=?,basicSA=?,basePlanDec=?,productCiteria=? where customerId=" + id + " and id=" + data[i].id;
//                     this.sqlLiteService.exec(query, [data[i].issueCompany || '', data[i].basicSA || '', data[i].basePlanDec || '', data[i].productCiteria || '']).then(function (res) {
//                         deferred.resolve('success');
//                     }, function (err) {
//                         console.error(err);
//                     });
//                 } else {
//                     var query = "INSERT INTO prevPolicy (customerId,issueCompany,basicSA,basePlanDec,productCiteria) VALUES (?,?,?,?,?)";
//                     this.sqlLiteService.exec(query, [id, data[i].issueCompany || '', data[i].basicSA || '', data[i].basePlanDec || '', data[i].productCiteria || '']).then(function (res) {
//                         angular.extend(eAppForm[val].otherPolicy[i], { id: res.insertId });
//                         deferred.resolve('success');
//                     }, function (err) {
//                         console.error(err);
//                     });
//                 }
//             })(i);
//         }
//         return deferred.promise;
//     }

//     insertPaymentData = function (val) {
//         angular.extend(eAppForm.paymentDtl, val);
//     }

//     getCountry = function (data) {
//         console.log(data);
//         return searchMaster("countryMaster", "name", data).then(function (res) {
//             return res;
//         })
//     }

//     insertPaymentDetails = function (data) {
//         var deferred = $q.defer();
//         var insertpaymentDetailDataQuery = "INSERT INTO paymentDetail (policyId,paymentMode) VALUES (?,?)";
//         this.sqlLiteService.exec(insertpaymentDetailDataQuery, [localStorage.getItem('policyId'), data.mode || '']).then(function (res) {
//             //console.log("insert success -> " + res.insertId);
//         }, function (err) {
//             // console.log("insert fail");
//         });
//         return deferred.promise
//     }

//     updatePaymentDetails = function (data) {
//         var deferred = $q.defer();
//         var updatepaymentDetailDataQuery = "UPDATE paymentDetail SET chequeType=?,paymentMode=?,amount=?,isProposalPayment=?,receiptNo=?,Name=?,relation=?,panNo=?,status=?,ddNo=?,dateOfIssue=?,bankName=?,bankBranch=?,paymentSameAsRemittance=?,ifscCode=?,AccountNumber=?,transactionId=?,isDirectDebit=?, mposMode=?, mposCardType=?, mposSdkRes=? where policyId=" + localStorage.getItem('policyId');
//         this.sqlLiteService.exec(updatepaymentDetailDataQuery, [data.chequeType || '', data.mode || '', data.formattedAmt || '', data.isProposalPayment || 0, data.ReceiptNumber || '', data.Name || '', data.relation || '', data.panNo || '', data.status || '', data.ddNo || '', data.dateOfIssue || '', data.bankName || '', data.bankBranch || '', data.paymentSameAsRemittance || 0, data.ifscCode || '', data.AccountNumber || '', data.transactionId || '', data.isDirectDebit || 0, data.mposMode || '', data.mposCardType || '', data.mposSdkRes || '']).then(function (res) {
//             deferred.resolve('Payment details updated');
//         }, function (err) {
//             console.error(err);
//             deferred.reject("Error in saving payment details");
//         });
//         return deferred.promise;
//     }

//     updatePartialPaymentDetails = function (data) {
//         var deferred = $q.defer();
//         var updatepaymentDetailDataQuery = "UPDATE paymentDetail SET amount=?,receiptNo=?,AccountNumber=?,transactionId=?, status=? where policyId=? AND instrumentIndex=?";
//         this.sqlLiteService.exec(updatepaymentDetailDataQuery, [data.amount || '', data.receiptNo || '', data.AccountNumber || '', data.transactionId || '', data.status || '', data.policyId || '', data.instrumentIndex]).then(function (res) {
//             console.log(res);
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     saveApplicationState = function (id, state) {
//         console.log('state saved', state, id);
//         let policyId;
//         if (localStorage.getItem('policyId') != null) {
//             policyId = localStorage.getItem('policyId');
//             console.log("in if policyID:::::::::::::;", policyId);
//         } else {
//             console.log("in else::::::::::::::")
//             policyId = id;
//         }
//         if (policyId) {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM  applicationState where policyId=?";
//             this.sqlLiteService.exec(selectQuery, [policyId]).then(function (res) {
//                 if (res.rows.length > 0) {
//                     deferred.resolve(res.rows.item(0));
//                     updateApplicationState(policyId, state);
//                 } else {
//                     insertApplicationState(policyId, state);
//                 }
//             });
//         }

//         function insertApplicationState(policyId, state) {
//             var insertApplicationStateQuery = "INSERT INTO applicationState (policyId,state) VALUES (?,?)";
//             this.sqlLiteService.exec(insertApplicationStateQuery, [policyId, state]).then(function (res) {
//                 console.log("Saved State", res);
//             }, function (err) {
//                 console.error(err);
//             });
//         }

//         function updateApplicationState(policyId, state) {
//             var updateApplicationStateQuery = "UPDATE applicationState SET state=? where policyId=" + parseInt(policyId);
//             this.sqlLiteService.exec(updateApplicationStateQuery, [state]).then(function (res) {
//                 console.log("Updated State", res);
//             }, function (err) {
//                 console.error(err);
//             });
//             return deferred.promise;
//         }
//     }

//     insertAddnlDocs = function (data) {
//         var deferred = $q.defer();
//         console.log('EappForm service', data)
//         eAppForm.additionalDtls.document = data;
//         // console.log("Data is here is eAppservice",eAppForm.additionalDtls.document)
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 var query = "INSERT INTO supportedDocument(policyId,typeOfProof,nameOfProof,idenNo,expiryDate) VALUES(?,?,?,?,?)";
//                 this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), data[i].type || '', data[i].name || '', data[i].idenNo || '', data[i].expiryDate || '']).then(function (res) {
//                     console.log("insert doc resp::::::::::", res);
//                     deferred.resolve('success');
//                     console.log('Working')
//                 }, function (err) {
//                     console.error(err);
//                 });

//             })(i);
//         }
//         return deferred.promise;
//     }


//     insertPosDocs = function (data) {
//         var deferred = $q.defer();
//         console.log('insert pos', data)
//         var query = "INSERT INTO posDocumentDetail(appNo,docName,docUrl,posKfdGridfsId) VALUES(?,?,?,?)";
//         console.log("query::::::;", query);

//         this.sqlLiteService.exec(query, [localStorage.getItem('applicationNo'), data[0].name || '', data[0].url || '', data[0].posKfdGridfsId || ''])
//             .then(function (res) {
//                 console.log("insert doc resp::::::::::", res);
//                 self.getPosDocument().then(function (resp) {
//                     console.log("resp::::::::", resp);
//                     deferred.resolve('success');
//                     console.log('Working')

//                 });

//             }, function (err) {
//                 console.error(err);
//                 deferred.reject('failed');

//             });


//         return deferred.promise;
//     }
//     getPosDocument = function () {
//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM posDocumentDetail where appNo=?";
//             this.sqlLiteService.exec(selectQuery, [localStorage.getItem('applicationNo')]).then(
//                 function (res) {
//                     for (var i = 0; i < res.rows.length; i++) {
//                         Obj.push(res.rows.item(i));
//                     }
//                     deferred.resolve(Obj);
//                 },
//                 function (err) {
//                     console.error(err);
//                 }
//             );
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     getPosDocumentForSync = function (data) {
//         console.log("fetch data:::::::", data);

//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM posDocumentDetail where appNo=?";
//             this.sqlLiteService.exec(selectQuery, [data]).then(
//                 function (res) {
//                     for (var i = 0; i < res.rows.length; i++) {
//                         Obj.push(res.rows.item(i));
//                     }
//                     deferred.resolve(Obj);
//                 },
//                 function (err) {
//                     console.error(err);
//                 }
//             );
//         } catch (Ex) { }
//         return deferred.promise;
//     }



//     updatePosDocsUrl = function (data) {
//         console.log("update add nl docs:::::::", data);

//         var deferred = $q.defer();

//         // eAppForm.additionalDtls.document = data;
//         // console.log("Data is here is eAppservice", eAppForm.additionalDtls.document)
//         /**/
//         let applicationNo = localStorage.getItem('applicationNo');
//         var query = "UPDATE posDocumentDetail SET docUrl=? where appNo=" + applicationNo + " and docName='" + data[0].name + "'";
//         this.sqlLiteService.exec(query, [data[0].url || '']).then(function (res) {
//             console.log("update res 1:::::::", res);
//             deferred.resolve('success');
//         }, function (err) {
//             console.error(err);
//         });


//         return deferred.promise;
//     }



//     updatePosDocsUrlaaaaa = function (data) {
//         console.log("updating  pos Url", data);
//         var deferred = $q.defer();

//         console.log("update doc::::", data[0]);
//         // var query = "UPDATE posDocumentDetail SET docUrl=? where appNo=" + localStorage.getItem('applicationNo') + " and docName='" + data[i].name + "'";
//         var query = "UPDATE posDocumentDetail SET docUrl=? where appNo=" + localStorage.getItem('applicationNo');
//         console.log("query::::::;", query);

//         this.sqlLiteService.exec(query, [data[0].url || '']).then(function (res) {
//             console.log("updateeee resss suppp:::::", res);

//             deferred.resolve('success');
//             return deferred.promise;

//         }, function (err) {
//             console.log("error:::", err);
//             return deferred.promise;


//         });
//     }


//     updateAddnlDocs = function (data) {
//         console.log("update add nl docs:::::::", data);

//         var deferred = $q.defer();

//         eAppForm.additionalDtls.document = data;
//         console.log("Data is here is eAppservice", eAppForm.additionalDtls.document)
//         /**/

//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 var query = "UPDATE supportedDocument SET nameOfProof=?,idenNo=?,expiryDate=? where policyId=" + localStorage.getItem('policyId') + " and typeOfProof='" + data[i].type + "'";
//                 this.sqlLiteService.exec(query, [data[i].name || '', data[i].idenNo || '', data[i].expiryDate || '']).then(function (res) {
//                     console.log("update res 1:::::::", res);
//                     deferred.resolve('success');
//                 }, function (err) {
//                     console.error(err);
//                 });

//             })(i);
//         }
//         return deferred.promise;
//     }

//     updateAddnlDocsUrl = function (data) {
//         console.log("updating  AddnlDocs Url", data);
//         var deferred = $q.defer();

//         for (var i = 0; i < data.length; i++) {
//             console.log("update doc::::", data[i]);

//             (function (i) {
//                 if (data[i] && data[i]['url'] == 'NA') {
//                     data[i]['url'] = '';
//                 }

//                 var query = "UPDATE supportedDocument SET proofURL=? where policyId=" + localStorage.getItem('policyId') + " and typeOfProof='" + data[i].type + "'";
//                 this.sqlLiteService.exec(query, [data[i].url || '']).then(function (res) {
//                     console.log("updateeee resss suppp:::::", res);

//                     deferred.resolve('success');
//                 }, function (err) {
//                     console.error(err);
//                 });


//             })(i);
//         }
//         return deferred.promise;
//     }

//     saveIRDetails = function (data) {
//         var deferred = $q.defer();
//         angular.extend(eAppForm.additionalDtls.ir, data);
//         if (eAppForm.additionalDtls.ir.hasOwnProperty('id')) {
//             try {
//                 var update = "UPDATE IR SET elecPolicy=?,IrAcc=?,plan=?,irAccNum=?,irName=?,email=? where policyId=" + localStorage.getItem('policyId');
//                 this.sqlLiteService.exec(update, [data.elecPolicy, data.IrAcc || '', data.plan || '', data.irAccNum || '', data.irName || '', data.email || '']).then(function (res) {
//                     console.log("updatedDisclaimer");
//                 }, function (err) {
//                     console.error(err);
//                 });
//             } catch (e) {

//             }
//         } else {
//             var query = "INSERT INTO IR (policyId,elecPolicy,IrAcc,plan,irAccNum,irName,email) VALUES (?,?,?,?,?,?,?)";
//             this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), data.elecPolicy, data.IrAcc || '', data.plan || '', data.irAccNum || '', data.irName || '', data.email || '']).then(function (res) {
//                 angular.extend(eAppForm.additionalDtls.ir, { id: res.insertId });
//                 deferred.resolve('success');
//             }, function (err) {
//                 console.error(err);
//                 deferred.resolve('error');
//             });
//         }

//         return deferred.promise;
//     }


//     function insertSharePercentageinNomineeArr(data) {
//         var deferred = $q.defer();
//         var promise = [];
//         for (var i = 0; i < (eAppForm.additionalDtls.nominee).length; i++) {
//             promise.push(
//                 (function (i) {
//                     eAppForm.additionalDtls.nominee[i].sharePercentage = data[i];
//                 })(i));
//         }
//         $q.all(promise).then(function (res) {
//             deferred.resolve(res);
//         })
//         return deferred.promise;
//     }

//     saveSharePercentage = function (data) {
//         //console.log('hhhhhhhhhh:::::::::::::::::',data);
//         for (var i = 0; i < (eAppForm.additionalDtls.nominee).length; i++) {
//             (function (i) {
//                 eAppForm.additionalDtls.nominee[i].sharePercentage = data[i];
//             })(i);
//         }
//         if (eAppForm.additionalDtls.nominee.length == 1) {
//             var query = "UPDATE nominee SET sharePercentage=? where policyId=" + localStorage.getItem('policyId') + " and id=" + eAppForm.additionalDtls.nominee[i].id;
//             this.sqlLiteService.exec(query, [100 || '']).then(function (res) { }, function (err) {
//                 console.error(err);
//             });
//         } else {
//             for (var i = 0; i < eAppForm.additionalDtls.nominee.length; i++) {
//                 (function (i) {
//                     var query = "UPDATE nominee SET sharePercentage=? where policyId=" + localStorage.getItem('policyId') + " and id=" + eAppForm.additionalDtls.nominee[i].id;
//                     this.sqlLiteService.exec(query, [eAppForm.additionalDtls.nominee[i].sharePercentage || '']).then(function (res) { }, function (err) {
//                         console.error(err);
//                     });
//                 })(i);
//             }
//         }
//     }

//     insertDefaultDisclaimer = function () {
//         var deferred = $q.defer();
//         var query = "INSERT INTO disclaimer(policyId,armyEmployed,dangerousActivity,historyOfConviction,intendToTravel,occupation,politicallyExposed) VALUES(?,?,?,?,?,?,?)";
//         this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), 1, 1, 1, 1, 1, 1]).then(function (res) {
//             this.getMasterStatusById('disclaimer', 'id', res.insertId).then(function (res) {
//                 deferred.resolve(res[0]);
//             });
//         }, function (err) {
//             deferred.resolve('error');
//         });
//         return deferred.promise;
//     }

//     updateDisclaimer = function (data) {
//         data = data || {};
//         var deferred = $q.defer();
//         try {
//             var query = "UPDATE disclaimer SET country=?,armyEmployed=?,convHistoryDtl=?,dangerActDtl=?,dangerousActivity=?,durationOfTravel=?,historyOfConviction=?,intendToTravel=?,lastExamCateg=?,lastExamDate=?,bombDisposal=?,name=?,occuDtl=?,occupation=?,politicallyExposed=?,positionPEP=?,purposeOfTravel=?,rank=?,dept=?,relationship=? where policyId=" + localStorage.getItem('policyId');
//             this.sqlLiteService.exec(query, [JSON.stringify(data.country) || '', data.armyEmployed || 0, data.convHistoryDtl || '', data.dangerActDtl || '', data.dangerousActivity || 0, data.durationOfTravel || '', data.historyOfConviction || 0, data.intendToTravel || 0, data.lastExamCateg || '', data.lastExamDate || '', data.bombDisposal || '', data.name || '', data.occuDtl || '', data.occupation || 0, data.politicallyExposed || 0, data.positionPEP || '', data.purposeOfTravel || '', data.rank || '', data.dept || '', data.relationship || '']).then(function (res) {
//                 console.log("updatedDisclaimer");
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (e) {

//         }
//         return deferred.promise;
//     }

//     insertFemaleQues = function (data) {
//         //console.log(data);
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 var query = "INSERT INTO femaleDetails (customerId,questionId,answer) VALUES (?,?,?)";
//                 this.sqlLiteService.exec(query, [localStorage.getItem('LA_ID'), data[i].ques, data[i].ans]).then(function (res) {
//                     deferred.resolve('success');
//                 }, function (err) {
//                     console.error(err);
//                 });
//             })(i);
//         }
//         return deferred.promise;
//     }

//     updateFemaleQues = function (data) {
//         //console.log('female', data);
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 var query = "UPDATE femaleDetails SET questionId=?,answer=? where customerId=? and questionId=?";
//                 this.sqlLiteService.exec(query, [data[i].ques, data[i].ans, localStorage.getItem('LA_ID'), data[i].ques]).then(function (res) {
//                     deferred.resolve('success');
//                 }, function (err) {
//                     console.error(err);
//                 });
//             })(i);
//         }
//         return deferred.promise;
//     }

//     updateDocuments = function (docId, gridFsId) {
//         console.log("updateDocument data::docId:::", docId, "gridFs Id::::::::", gridFsId);

//         var deferred = $q.defer();
//         var query = "UPDATE supportedDocument SET gridFsId=? where id=" + docId;
//         this.sqlLiteService.exec(query, [gridFsId + ""]).then(function (res) {
//             console.log("update doc res::::::::", res);
//             deferred.resolve('success');
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     savePDFList = function (data) {
//         var deferred = $q.defer();
//         console.log("savePDFList", data);
//         eAppForm.Pdf = data;
//         console.log('pdf:::', eAppForm.Pdf);
//         deferred.resolve('success');
//         //console.log(data);
//         // var query = "INSERT INTO supportedDocument(policyId,typeOfProof,nameOfProof,proofURL) VALUES(?,?,?,?)";
//         // this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), 'applicationForm', 'applicationForm', data.ApplicationForm || '']).then(function(res) {
//         //     deferred.resolve('success');
//         // }, function(err) {
//         //     console.error(err);
//         // });
//         return deferred.promise;
//     }
//     saveCustomerDeclaration = function (data) {
//         console.log("cust declarationnnnnn:::::::", data);

//         eAppForm.Pdf['CustomerDeclaration'] = data;
//     }

//     setFneExists = function (data) {
//         eAppForm.fneExists = data
//     }

//     updateAgentImg = function (val) {
//         try {
//             var deferred = $q.defer();
//             var update = "UPDATE agentLogin SET imageUrl=? where agentCode=" + JSON.parse(localStorage.getItem('agent')).AgentCode;
//             this.sqlLiteService.exec(update, [val]).then(function (res) {
//                 console.log("success");
//             }, function (err) {
//                 console.log("error");
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     insertFamilyMember = function (relation, age) {
//         var deferred = $q.defer();
//         var query = "INSERT INTO familyDetail (customerId,relationWithLA,age,healthStatus) VALUES (?,?,?,?)";
//         this.sqlLiteService.exec(query, [localStorage.getItem('LA_ID'), relation, age, 'Healthy']).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     onlineTransaction = function (appNo, bankData, paymentGatewayData) {
//         var deferred = $q.defer();
//         //eAppForm.paymentDtl.date = bankData.date;
//         var selectQuery = "SELECT * FROM  onlineTransaction where appNo='" + appNo + "'";
//         this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//             if (res.rows.length > 0) {
//                 updateOnlineTransactionDtls(appNo, bankData, paymentGatewayData);
//             } else {
//                 insertOnlineTransactionDtls(appNo, bankData, paymentGatewayData);
//             }
//         });
//         return deferred.promise;
//     }

//     getAge = function (birthDate) {
//         var deferred = $q.defer();
//         var diffInYears = Math.abs(moment(birthDate, 'DD/MM/YYYY').diff(new Date(), 'years'));
//         deferred.resolve(diffInYears);
//         return deferred.promise;
//     }




//     function insertOnlineTransactionDtls(appNo, bankData, paymentGatewayData) {
//         var deferred = $q.defer();
//         var query = "INSERT INTO onlineTransaction (appNo,referenceNo,date,policyId,bankResponse) VALUES (?,?,?,?,?)";
//         this.sqlLiteService.exec(query, [appNo, bankData.referenceNo, bankData.date, localStorage.getItem('policyId'), paymentGatewayData]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     function updateOnlineTransactionDtls(appNo, bankData, paymentGatewayData) {
//         try {
//             var deferred = $q.defer();
//             var update = "UPDATE onlineTransaction SET referenceNo=?,date=?,bankResponse=? where appNo='" + appNo + "'";
//             this.sqlLiteService.exec(update, [bankData.referenceNo, bankData.date, paymentGatewayData]).then(function (res) {
//                 console.log("success");
//             }, function (err) {
//                 console.log("error");
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     updateEmailFromIR = function (customerType, email) {
//         //customerType = 2 Proposer, customerType =1 LifeAssured
//         if (customerType == 2) {
//             eAppForm.otherMemberDtl.customer.dtl.email = email;
//         }
//         if (customerType == 1) {
//             eAppForm.personalDtl.customer.dtl.email = email;
//         }
//     }

//     // saveReviewPageDetail = function (data) {
//     //     console.log("eAppService Called", data)
//     //     if (data.agentRelated) {
//     //         data.agentRelationDetail = '';
//     //     }
//     //     //data.agentRelated = data.agentRelated?1:0;
//     //     try {
//     //         var deferred = $q.defer();
//     //         var update = "UPDATE policy SET agentRelated=? ,agentRelationDetail=?, agentInfo=?,reviewAcceptance=?,agentRelatedTwo=? agentMaterialInformation=? where id='" + localStorage.getItem('policyId') + "' ";
//     //         this.sqlLiteService.exec(update, [data.agentRelated ? 1 : 0 || 0, data.agentRelationDetail || '', data.agentInfo || '', data.reviewAcceptance || 0, data.agentRelatedTwo ? 1 : 0 || 0, data.agentMaterialInformation || '']).then(function (res) {
//     //             eAppForm.review = data;
//     //             console.log("success");
//     //         }, function (err) {
//     //             console.log("error");
//     //         });
//     //     } catch (e) {

//     //     }
//     // }

//     saveReviewPageDetail = function (data) {
//         console.log(" saveReviewPageDetail Data-------------------", data);
//         if (data.agentRelated) {
//             data.agentRelationDetail = '';
//         }
//         console.log("whatssss value :::::::::", data.whatsappConsent);
//         // let wv = 1;
//         // if (data.whatsappConsent && data.whatsappConsent == true) {
//         //     wv = 1
//         // } else {
//         //     wv = 0
//         // }

//         try {
//             var deferred = $q.defer();
//             // try {
//             //     // var deferred = $q.defer();
//             //     var query = "SELECT * FROM policy WHERE id = ?";
//             //     this.sqlLiteService.exec(query, [localStorage.getItem('policyId')]).then(function (res) {
//             //     if (res.rows.length > 0) {
//             //         console.log("get full policy tableeeee:::::::::",res.rows.length); 
//             //     } else {
//             //         console.log("in elsee::",res);

//             //     }
//             //     }, function (err) {
//             //         console.log("some error in getting full policy tableeee " + err);
//             //     })
//             // } catch (Ex) { }


//             var update = "UPDATE policy SET agentRelated=?,reviewAcceptance=?,agentInfo=?,agentRelatedTwo=?,agentMaterialInformation=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, [data.agentRelated ? 1 : 0 || 0, data.reviewAcceptance || 0, data.agentInfo || '', data.agentRelatedTwo ? 1 : 0 || 0, data.agentMaterialInformation || '']).then(function (res) {
//                 eAppForm.review = data;
//                 console.log("success", data);
//                 console.log("ressssss frommm whatsssapppp :::::::::", res);

//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {

//         }
//         // deferred.reslove("success");
//         // return deferred.promise;


//     }
//     saveLoveCardDetails = function (data) {
//         console.log("love card dataaa ", data);
//         data.loveCardToggle = 0;

//         try {
//             var deferred = $q.defer();
//             var update = "UPDATE policy SET loveCardToggle=?,languageSel=?,messageSel=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, [data.loveCardToggle || 0, data.languageSel || null, data.messageSel || null]).then(function (res) {
//                 eAppForm.loveCardDetails = data;
//                 console.log("love success in saving love card data", data);
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("errror in saving love card data", e);

//         }
//     }

//     checkIfAddressExists = function (id, type) {
//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM address where customerId=" + id + " and addrType='" + type + "'";
//             this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//                 for (var i = 0; i < res.rows.length; i++) {
//                     Obj.push(res.rows.item(i));
//                 }
//                 deferred.resolve(Obj);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     savePaymentLinkDetails = function (data) {
//         var deferred = $q.defer();
//         var insert = "INSERT INTO paymentLinkDetails (policyId,name,email,mobile) VALUES (?,?,?,?)";
//         this.sqlLiteService.exec(insert, [localStorage.getItem('policyId'), data.name, data.email, data.mobile]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             deferred.reject();
//         });
//         return deferred.promise;
//     }

//     updatePaymentLinkDetails = function (data) {
//         var deferred = $q.defer();
//         var query = "UPDATE paymentLinkDetails SET name=?,email=?,mobile=? where policyId=" + localStorage.getItem('policyId');
//         this.sqlLiteService.exec(query, [data.name || '', data.email || '', data.mobile || '']).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             deferred.reject();
//         });
//         return deferred.promise;
//     }

//     getUnsyncedAppCount = function () {
//         self.saveCommonLogs('Common 1 Inside getUnsyncedAppCount');
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM policy where stsCode==? and isActive=?";
//             this.sqlLiteService.exec(selectQuery, [4, 1]).then(function (res) {
//                 console.log("getUnsyncedAppCount::::::::::::::::", res);
//                 self.saveCommonLogs(`Common 2 this.sqlLiteService res:${JSON.stringify(res)}`);
//                 if (res.rows.length > 0) {
//                     deferred.resolve(res.rows.length);
//                 } else {
//                     deferred.resolve(0);
//                 }
//             }, function (err) {
//                 self.saveCommonLogs(`Common 3 err:${err}`);
//                 console.error(err);
//                 deferred.resolve(0);
//             });
//         } catch (Ex) {
//             self.saveCommonLogs(`Common 4 Ex:${Ex}`);
//             console.log('Ex:::::::::::::::', Ex);
//             deferred.resolve(0);
//         }
//         return deferred.promise;
//     }

//     getPendingUnsyncedAppCount = function () {
//         try {
//             self.saveCommonLogs(`Common 5 Inside getPendingUnsyncedAppCount`);
//             var obj = {
//                 'totalPendingUnsyncedCount': 0,
//                 'isCvdRejected': 0
//             }
//             var cvdRejectedId = [];
//             return getUnsyncedPendingData()
//                 .then(function (res) {
//                     // console.log("res::::::::::",res);
//                     self.saveCommonLogs(`Common 6 getUnsyncedPendingData res:${JSON.stringify(res)}`);
//                     obj.totalPendingUnsyncedCount = res.length;
//                     return getCustomerPolicyMapper(res);
//                 }).then(function (response) {
//                     // console.log("response::::::::::::::",response);
//                     self.saveCommonLogs(`Common 7 response::::::::::::::${JSON.stringify(response)}`);
//                     var chain = $q.when();
//                     response.forEach(function (x) {
//                         chain = chain.then(function () {
//                             return getCvdStatus(x).then(function (customerRes) {
//                                 self.saveCommonLogs(`Common 8 customerRes::::::::::::::${JSON.stringify(customerRes)}`);
//                                 if (customerRes) {
//                                     cvdRejectedId.push(customerRes);
//                                 }
//                             });
//                         });
//                     });
//                     return chain.then(function () {
//                         if (cvdRejectedId.length > 0) {
//                             obj.isCvdRejected = 1;
//                         }
//                         return obj;
//                     });
//                 });
//         }
//         catch (Ex) {
//             console.log('Ex:', Ex);

//         }
//     }

//     function getUnsyncedPendingData() {
//         var arr = [];
//         try {
//             var deferred = $q.defer();
//             // var selectQuery = "SELECT * FROM policy where pendingSyncStatus==? and isActive=?";
//             var selectQuery = "SELECT id FROM policy where pendingSyncStatus==? and isActive=?";

//             // console.log("selectQuery::::::::::::::",selectQuery);

//             this.sqlLiteService.exec(selectQuery, [0, 1]).then(function (res) {
//                 // console.log("getUnsyncedPendingData::::::::::",res);

//                 for (var i = 0; i < res.rows.length; i++) {
//                     arr.push(res.rows.item(i));
//                 }
//                 deferred.resolve(arr);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     function getCustomerPolicyMapper(data) {
//         // console.log("getCustomerPolicyMapper:::::::::::::::",data);
//         try {
//             var chain = $q.when();
//             data.forEach(function (x, count) {
//                 chain = chain.then(function () {
//                     return self.getMasterFieldValue('customer', 'id', 'policyId', x.id).then(function (customerRes) {
//                         // console.log("customerRes:::::::::::",customerRes);
//                         if (customerRes && customerRes.length > 0) { //sign out issue handled with if condition.
//                             data[count].customerId = customerRes[0].id;
//                         }

//                     });
//                 });
//             });
//             return chain.then(function () {
//                 return data;
//             });
//         }
//         catch (Ex) {
//             console.log('Ex:', Ex);

//         }
//     }

//     function getCvdStatus(responseObj) {
//         var deferred = $q.defer();
//         try {
//             var selectQuery = "SELECT * FROM cvdPolicyStatus where customerId=? and policyStatus=?";
//             this.sqlLiteService.exec(selectQuery, [responseObj.customerId, 0]).then(function (resp) {
//                 if (resp.rows.length > 0) {
//                     deferred.resolve(resp.rows.item(0).id);
//                 } else {
//                     deferred.resolve();
//                 }
//             });
//         }
//         catch (Ex) {
//             console.log('Ex:', Ex);

//         }
//         return deferred.promise;
//     }

//     updatePendingSyncStatus = function () {
//         var deferred = $q.defer();
//         var query = "UPDATE policy SET pendingSyncStatus=? where id=" + localStorage.getItem('policyId');
//         this.sqlLiteService.exec(query, [0]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             deferred.reject();
//         });
//         return deferred.promise;
//     }

//     deleteMultiplePaymentInstruments = function (policyId) {
//         var deferred = $q.defer();
//         var query = "DELETE FROM paymentDetail WHERE policyId = " + policyId;
//         this.sqlLiteService.exec(query).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             deferred.reject();
//         });
//         return deferred.promise;
//     }

//     updateGridFsId = function (id, gridFsId, colName, tableName) {
//         var deferred = $q.defer();
//         var query = "UPDATE " + tableName + " SET " + colName + "=? where id=" + id;
//         this.sqlLiteService.exec(query, [gridFsId + ""]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             console.error(err);
//         });
//         return deferred.promise;
//     }

//     insertPaymentInstrument = function (instrument, policyId) {
//         var deferred = $q.defer();
//         console.log(instrument);

//         var query = "INSERT INTO paymentDetail (policyId, ddNo, dateOfIssue, bankName, bankBranch, paymentMode, amount, isProposalPayment, receiptNo, Name, relation, panNo, applicationNo, status, chequeType, paymentSameAsRemittance, ifscCode, AccountNumber, transactionId, instrumentIndex, paymentRenewalMode, isDirectDebit, mposMode, mposCardType, mposSdkRes) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

//         this.sqlLiteService.exec(query, [policyId, instrument.ddNo || '', instrument.dateOfIssue || '', instrument.bankName || '', instrument.bankBranch || '', instrument.mode || '', instrument.formattedAmt || '', instrument.isProposalPayment || 0, instrument.receiptNo || '', instrument.Name || '', instrument.relation || '', instrument.panNo || '', instrument.applicationNo || '', instrument.status || '', instrument.chequeType || '', instrument.paymentSameAsRemittance || 0, instrument.ifscCode || '', instrument.AccountNumber || '', instrument.transactionId || '', (instrument.instrumentIndex).toString() || '', instrument.renewalmode, instrument.isDirectDebit || 0, '','',''])
//             .then(function (res) {
//                 deferred.resolve('success');
//             }, function (err) {
//                 deferred.reject();
//             });
//         return deferred.promise;
//     }

//     getSavedPaymentInstrument = function (policyId) {
//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM paymentDetail where policyId=?";
//             this.sqlLiteService.exec(selectQuery, [policyId]).then(function (res) {
//                 for (var i = 0; i < res.rows.length; i++) {
//                     Obj.push(res.rows.item(i));
//                 }
//                 deferred.resolve(Obj);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (e) { }
//         return deferred.promise;
//     }



//     getCovidDetails = function (policyId) {
//         var Obj = [];
//         try {
//             var deferred = $q.defer();
//             var selectQuery = "SELECT * FROM commonProposalForm where policyId=?";
//             this.sqlLiteService.exec(selectQuery, [policyId]).then(function (res) {
//                 console.log(res)
//                 // for (var i = 0; i < res.rows.length; i++) {
//                 //     Obj.push(res.rows.item(i));
//                 // }
//                 deferred.resolve(res);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (e) { }
//         return deferred.promise;
//     };


//     insertFromDB = function (data) {
//         var deferred = $q.defer();
//         var query = "INSERT INTO commonProposalForm (policyId,appNo,visited , Nameofthecountry ,ToDurationOfStay ,FromDurationOfStay ,returnDatetoIndia , screenedattheairport ,coronavirus , diagnosis, diagnosisDetails, symptoms , ifPlan ,NameOfThecountryPlan ,todurationOfStayPlan ,fromdurationOfStayPlan, healthCareAgree, healthCareDetails, vaccinated, firstVaccinationDate, secondVaccinationDate, vaccinationAfterEffects, vaccinationAfterEffectDetails, vaccinationConfirmationRecord, vaccinationClinicDetails, isGoodheaalth,disclosedAllMaterial,BIshown,fraudRepresentation,premiumConditions,isExtraYes,submissionOfNonStandered,OccHazard,submittedByTheCustomer,personallySeen,lifeStage , totalMonthlyIncome , totalMonthlyExpense , totalSurplus , totalLifeCover , personalGoals , timeHorizon , ppt , returnOnSaving , ppt65Years , customerAnnualIncome , suitabilityChecklistMatrix , reason,LifeStagereason,symptomsInDays, covidsymptoms, symptomExplained,digitalVerificationToggle,sendEmailCount,Checkbox,isOTPverifed,isScreenDisabled,isMailSendOrnot,coronavirusLocation,coronavirusDate,remainingSeconds,showPdfOtpAuth,pdfOtp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//         this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), data.appNo, data['visited'], data.Nameofthecountry,
//         data.ToDurationOfStay, data.FromDurationOfStay, data.returnDatetoIndia, data.screenedattheairport, data.coronavirus,
//         data.diagnosis, data.diagnosisDetails, data.symptoms, data.ifPlan, data.NameOfThecountryPlan, data.todurationOfStayPlan, data.fromdurationOfStayPlan, data.healthCareAgree, data.healthCareDetails, data.vaccinated, data.firstVaccinationDate, data.secondVaccinationDate, data.vaccinationAfterEffects, data.vaccinationAfterEffectDetails, data.vaccinationConfirmationRecord, data.vaccinationClinicDetails, data.isGoodheaalth,
//         data.disclosedAllMaterial, data.BIshown, data.fraudRepresentation, data.premiumConditions,
//         data.isExtraYes, data.submissionOfNonStandered, data.OccHazard, data.submittedByTheCustomer, data.personallySeen, data.lifeStage,
//         data.totalMonthlyIncome, data.totalMonthlyExpense, data.totalSurplus, data.totalLifeCover, data.personalGoals,
//         data.timeHorizon, data.ppt, data.returnOnSaving, data.ppt65Years, data.customerAnnualIncome, data.data, data.reason, data.LifeStagereason, data.symptomsInDays, data.covidsymptoms, data.symptomExplained, data.digitalVerificationToggle || 0,
//         data.sendEmailCount, data.Checkbox || 0, data.isOTPverifed || 0, data.isScreenDisabled || 0, data.isMailSendOrnot || 0, data.coronavirusLocation || "", data.coronavirusDate || '', data.remainingSeconds || 0, data.showPdfOtpAuth || 0, data.pdfOtp || ""
//         ]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             console.log(err);

//         });
//         return deferred.promise;
//     }



//     insertIntoCustomerDeclaration = function (data, customerDeclaration, nasa, digitalVerificationToggle, sendEmailCount) {
//         var deferred = $q.defer();
//         var foreignCountryVisited = data['foreigncountryVisited'];
//         var planToVisitetForeignCountry = data['planToVisitetForeignCountry'];
//         var healthCareProfessional = data['healthCareProfessional'];
//         var completedVaccination = data['completedVaccination'];
//         var extraPremium = customerDeclaration['extraPremium'];
//         var incomeAndExpensePatt = nasa['incomeAndExpensePatt'];
//         var existingInsuranceDetails = nasa['existingInsuranceDetails'];
//         var SuitabilityChecklist = nasa['SuitabilityChecklist'];
//         // lifeStage , totalMonthlyIncome , totalMonthlyExpense , totalSurplus , totalLifeCover , personalGoals , timeHorizon , ppt , returnOnSaving , ppt65Years , customerAnnualIncome , suitabilityChecklistMatrix , reason 
//         var query = "INSERT INTO commonProposalForm (policyId,appNo,visited , Nameofthecountry ,ToDurationOfStay ,FromDurationOfStay ,returnDatetoIndia , screenedattheairport ,coronavirus , diagnosis, diagnosisDetails, symptoms , ifPlan ,NameOfThecountryPlan ,todurationOfStayPlan ,fromdurationOfStayPlan, healthCareAgree, healthCareDetails, vaccinated, firstVaccinationDate, secondVaccinationDate, vaccinationAfterEffects, vaccinationAfterEffectDetails, vaccinationConfirmationRecord, vaccinationClinicDetails ,isGoodheaalth,disclosedAllMaterial,BIshown,fraudRepresentation,premiumConditions,isExtraYes,submissionOfNonStandered,OccHazard,submittedByTheCustomer,personallySeen,lifeStage , totalMonthlyIncome , totalMonthlyExpense , totalSurplus , totalLifeCover , personalGoals , timeHorizon , ppt , returnOnSaving , ppt65Years , customerAnnualIncome , suitabilityChecklistMatrix , reason,LifeStagereason,symptomsInDays, covidsymptoms, symptomExplained,digitalVerificationToggle,sendEmailCount,Checkbox,isOTPverifed,isScreenDisabled,isMailSendOrnot,coronavirusLocation,coronavirusDate,remainingSeconds,showPdfOtpAuth,pdfOtp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//         this.sqlLiteService.exec(query, [localStorage.getItem('policyId'), localStorage.getItem('applicationNo'), foreignCountryVisited['visited'], foreignCountryVisited.Nameofthecountry,
//         foreignCountryVisited.ToDurationOfStay, foreignCountryVisited.FromDurationOfStay, foreignCountryVisited.returnDatetoIndia, foreignCountryVisited.screenedattheairport, data.coronavirus,
//         data.diagnosis, data.diagnosisDetails, data.symptoms, planToVisitetForeignCountry.ifPlan, planToVisitetForeignCountry.NameOfThecountry, planToVisitetForeignCountry.todurationOfStay, planToVisitetForeignCountry.fromdurationOfStay, healthCareProfessional.healthCareAgree, healthCareProfessional.healthCareDetails, completedVaccination.vaccinated, completedVaccination.firstVaccinationDate, completedVaccination.secondVaccinationDate, completedVaccination.vaccinationAfterEffects, completedVaccination.vaccinationAfterEffectDetails, completedVaccination.vaccinationConfirmationRecord, completedVaccination.vaccinationClinicDetails, data.isGoodheaalth,
//         customerDeclaration.disclosedAllMaterial, customerDeclaration.BIshown, customerDeclaration.fraudRepresentation, customerDeclaration.premiumConditions,
//         extraPremium.isExtraYes, extraPremium.submissionOfNonStandered, extraPremium.OccHazard, extraPremium.submittedByTheCustomer, extraPremium.personallySeen, nasa.lifeStage,
//         incomeAndExpensePatt.totalMonthlyIncome, incomeAndExpensePatt.totalMonthlyExpense, incomeAndExpensePatt.totalSurplus, existingInsuranceDetails.totalLifeCover, nasa.personalGoals,
//         nasa.timeHorizon, nasa.ppt, nasa.returnOnSaving, SuitabilityChecklist.ppt65Years, SuitabilityChecklist.customerAnnualIncome,
//         SuitabilityChecklist.suitabilityChecklistMatrix, SuitabilityChecklist.reason, nasa.LifeStagereason, data.symptomsInDays, data.covidsymptoms, data.symptomExplained, digitalVerificationToggle, sendEmailCount, data.Checkbox || 0, data.isOTPverifed, data.isScreenDisabled || 0, data.isMailSendOrnot, data.coronavirusLocation || "", data.coronavirusDate || '', data.remainingSeconds || 0, data.showPdfOtpAuth || 0, data.pdfOtp || ""
//         ]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             console.log(err);
//             deferred.resolve();

//         });
//         return deferred.promise;
//     };




//     updateIntoCustomerDeclaration = function (data, customerDeclaration, nasa, digitalVerificationToggle, sendEmailCount) {
//         var deferred = $q.defer();
//         var foreignCountryVisited = data['foreigncountryVisited'];
//         var planToVisitetForeignCountry = data['planToVisitetForeignCountry'];
//         var healthCareProfessional = data['healthCareProfessional'];
//         var completedVaccination = data['completedVaccination'];
//         var extraPremium = customerDeclaration['extraPremium']
//         var incomeAndExpensePatt = nasa['incomeAndExpensePatt'];
//         var existingInsuranceDetails = nasa['existingInsuranceDetails'];
//         var SuitabilityChecklist = nasa['SuitabilityChecklist'];
//         var query = "UPDATE commonProposalForm SET visited=?,Nameofthecountry=?,ToDurationOfStay=?,FromDurationOfStay=?,returnDatetoIndia=?,screenedattheairport=?,coronavirus=?, diagnosis=?, diagnosisDetails=?, symptoms=?,ifPlan=?,NameOfThecountryPlan=?,todurationOfStayPlan=?, fromdurationOfStayPlan=?, healthCareAgree=?, healthCareDetails=?, vaccinated=?, firstVaccinationDate=?, secondVaccinationDate=?, vaccinationAfterEffects=?, vaccinationAfterEffectDetails=?, vaccinationConfirmationRecord=?, vaccinationClinicDetails=?, isGoodheaalth=?,disclosedAllMaterial=?,BIshown=?,fraudRepresentation=?,premiumConditions=?,isExtraYes=?,submissionOfNonStandered=?,OccHazard=?,submittedByTheCustomer=?,personallySeen=?,lifeStage=?,totalMonthlyIncome=?,totalMonthlyExpense=?, totalSurplus=? ,totalLifeCover=? , personalGoals=? , timeHorizon=? , ppt=? , returnOnSaving=? , ppt65Years=? , customerAnnualIncome=? ,  suitabilityChecklistMatrix=? , reason=?,LifeStagereason=?,symptomsInDays=?, covidsymptoms=?, symptomExplained=?,digitalVerificationToggle=?,sendEmailCount=?,Checkbox=?,isOTPverifed=?,isScreenDisabled=?,isMailSendOrnot=?,coronavirusLocation=?,coronavirusDate=?,remainingSeconds=?,showPdfOtpAuth=?,pdfOtp=?  where policyId=" + localStorage.getItem('policyId');
//         this.sqlLiteService.exec(query, [foreignCountryVisited['visited'], foreignCountryVisited.Nameofthecountry, foreignCountryVisited.ToDurationOfStay, foreignCountryVisited.FromDurationOfStay,
//         foreignCountryVisited.returnDatetoIndia, foreignCountryVisited.screenedattheairport, data.coronavirus, data.diagnosis, data.diagnosisDetails, data.symptoms, planToVisitetForeignCountry.ifPlan,
//         planToVisitetForeignCountry.NameOfThecountry, planToVisitetForeignCountry.todurationOfStay, planToVisitetForeignCountry.fromdurationOfStay,
//         healthCareProfessional.healthCareAgree, healthCareProfessional.healthCareDetails,
//         completedVaccination.vaccinated, completedVaccination.firstVaccinationDate, completedVaccination.secondVaccinationDate, completedVaccination.vaccinationAfterEffects, completedVaccination.vaccinationAfterEffectDetails, completedVaccination.vaccinationConfirmationRecord, completedVaccination.vaccinationClinicDetails,
//         data.isGoodheaalth, customerDeclaration.disclosedAllMaterial, customerDeclaration.BIshown, customerDeclaration.fraudRepresentation, customerDeclaration.premiumConditions,
//         extraPremium.isExtraYes, extraPremium.submissionOfNonStandered, extraPremium.OccHazard, extraPremium.submittedByTheCustomer, extraPremium.personallySeen, nasa.lifeStage,
//         incomeAndExpensePatt.totalMonthlyIncome, incomeAndExpensePatt.totalMonthlyExpense, incomeAndExpensePatt.totalSurplus, existingInsuranceDetails.totalLifeCover, nasa.personalGoals,
//         nasa.timeHorizon, nasa.ppt, nasa.returnOnSaving, SuitabilityChecklist.ppt65Years, SuitabilityChecklist.customerAnnualIncome,
//         SuitabilityChecklist.suitabilityChecklistMatrix, SuitabilityChecklist.reason, nasa.LifeStagereason, data.symptomsInDays, data.covidsymptoms,
//         data.symptomExplained, digitalVerificationToggle, sendEmailCount, data.Checkbox || 0, data.isOTPverifed || false, data.isScreenDisabled || 0, data.isMailSendOrnot, data.coronavirusLocation || "", data.coronavirusDate || '', data.remainingSeconds || 0, data.showPdfOtpAuth || 0, data.pdfOtp || ""
//         ]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             console.log(err);

//         });
//         return deferred.promise;
//     };


//     updateMainToggle = function (digitalVerificationToggle) {
//         try {
//             var deferred = $q.defer();
//             var updatePolicyquery = "UPDATE commonProposalForm SET digitalVerificationToggle=? where policyId=" + localStorage.getItem('policyId');;
//             this.sqlLiteService.exec(updatePolicyquery, [digitalVerificationToggle, localStorage.getItem('policyId')]).then(function (res) {
//                 deferred.resolve(res);
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (Ex) { }

//         return deferred.promise;
//     }
//     addExtraAmountInPolicy = function (extraAmt, policyId) {
//         try {
//             var deferred = $q.defer();
//             var updatePolicyquery = "UPDATE policy SET extraAmt=? where id=?";
//             this.sqlLiteService.exec(updatePolicyquery, [extraAmt, policyId]).then(function (res) {
//                 deferred.resolve(res);
//             }, function (err) {
//                 console.log("error in adding extra amount");
//             });
//         } catch (Ex) { }

//         return deferred.promise;
//     }

//     saveCvdDeclinedPolicies = function (data, custType) {
//         var id, val;
//         if (custType == 1) {
//             id = localStorage.getItem('LA_ID');
//             val = 'personalDtl';
//         }
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 if (data[i].id) {
//                     var query = "UPDATE cvdDeclinedPolicy SET issueCompany=?,basePlanReasons=?,basePlanDec=? where customerId=" + id + " and id=" + data[i].id;
//                     this.sqlLiteService.exec(query, [data[i].issueCompany || '', data[i].basePlanReasons || '', data[i].basePlanDec || '']).then(function (res) {
//                         deferred.resolve('success');
//                     }, function (err) {
//                         console.error(err);
//                     });
//                 } else {
//                     var query = "INSERT INTO cvdDeclinedPolicy (customerId,issueCompany,basePlanReasons,basePlanDec) VALUES (?,?,?,?)";
//                     this.sqlLiteService.exec(query, [id, data[i].issueCompany || '', data[i].basePlanReasons || '', data[i].basePlanDec || '']).then(function (res) {
//                         angular.extend(eAppForm[val].cvdDeclinedPolicy[i], { id: res.insertId });
//                         deferred.resolve('success');
//                     }, function (err) {
//                         console.error(err);
//                     });
//                 }
//             })(i);
//         }
//         return deferred.promise;
//     }

//     insertPendingProposalsData = function (data, agentCode) {
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 var query = "INSERT INTO pendingProposalsData (appNo,laName,dateCreated,agentCode) VALUES (?,?,?,?)";
//                 this.sqlLiteService.exec(query, [data[i].appNo, data[i].LAData.personalDtl.fName + " " + data[i].LAData.personalDtl.lName, data[i].createdDate, agentCode]).then(function (res) {
//                     deferred.resolve('success');
//                 }, function (err) {
//                     console.error(err);
//                 });
//             })(i);
//         }
//         return deferred.promise;
//     }
//     getMasterStatusClonedById = function (tableName, fieldName, id) {
//         var Obj = [];
//         // console.log('parameterrrr are', tableName, fieldName, id);
//         try {
//             var deferred = $q.defer();


//             var selectQuery = "SELECT * FROM " + tableName + " where " + fieldName + "=" + "'" + id + "'";
//             //console.log(selectQuery);
//             this.sqlLiteService.exec(selectQuery, []).then(function (res) {
//                 // console.log("res::::::::::::::::::", res);

//                 for (var i = 0; i < res.rows.length; i++) {
//                     Obj.push(res.rows.item(i));
//                 }
//                 deferred.resolve(Obj);
//             }, function (err) {
//                 console.error(err);
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     insertPendingProposalsClonedData = function (data, agentCode) {
//         var deferred = $q.defer();
//         for (var i = 0; i < data.length; i++) {
//             (function (i) {
//                 // console.log('apppnooooo are', data[i].appNo);
//                 self.getMasterStatusClonedById('pendingProposalsData', 'appNo', data[i].appNo).then(function (res) {
//                     // console.log('insertingggggg', res);

//                     if (res.length == 0) {
//                         console.log('no replicaaa');
//                         var query = "INSERT INTO pendingProposalsData (appNo,laName,dateCreated,agentCode) VALUES (?,?,?,?)";
//                         this.sqlLiteService.exec(query, [data[i].appNo, data[i].LAData.personalDtl.fName + " " + data[i].LAData.personalDtl.lName, data[i].createdDate, agentCode]).then(function (res) {
//                             console.log("showww res", res);
//                             deferred.resolve('insert success');
//                         }, function (err) {
//                             console.error(err);
//                         });
//                     } else {
//                         deferred.resolve('data already present');
//                         // console.log('yesss replicaa', res);

//                     }
//                 });

//             })(i);
//         }
//         return deferred.promise;
//     }


//     saveReDigitalLogs = function (data) {
//         // console.log("saveReDigitalLogs:::::::::", data);

//         var deferred = $q.defer();
//         var query = "INSERT INTO resumeDigitalLogs (agentCode,appNo,resumeApplicationLog,digitalApplicationLog,logCreationDate) VALUES (?,?,?,?,?)";
//         this.sqlLiteService.exec(query, [data.agentCode, data.appNo, data.resumeApplicationLog || '', data.digitalApplicationLog || '', data.logCreationDate || '']).then(function (res) {
//             deferred.resolve('success in saving resumeDigitalLogs');
//         }, function (err) {
//             deferred.reject('error in saving resumeDigitalLogs', err);
//         });
//         return deferred.promise;
//     }
//     //
//     saveGenericLogs = function (data) {
//         try {
//             console.log("saveGenericLogs:::::::::", data);
//             var deferred = $q.defer();
//             var query = "INSERT INTO genericLogger (agentCode,logType,logText,logCreationDate) VALUES (?,?,?,?)";
//             this.sqlLiteService.exec(query, [data.agentCode, data.logType || '', data.logText || '', data.logCreationDate || '']).then(function (res) {
//                 deferred.resolve('success');
//             }, function (err) {
//                 deferred.reject('error in saving saveGenericLogs', err);
//             });
//             return deferred.promise;
//         }
//         catch (ex) {
//             console.log('ex:', ex);

//         }
//     }
//     //
//     saveLogInDb = function (data) {
//         var deferred = $q.defer();
//         var query = "INSERT INTO dataLogger (agentCode,appNo,stateName,stateEnterTime,stateExitTime,stateGroup) VALUES (?,?,?,?,?,?)";
//         this.sqlLiteService.exec(query, [data.agentCode, data.appNo, data.stateName, data.stateEnterTime, data.stateExitTime, data.stateGroup]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             deferred.reject('error');
//         });
//         return deferred.promise;
//     }

//     updateLogInDb = function (appNo) {
//         var deferred = $q.defer();
//         var query = "UPDATE dataLogger SET appNo=? where appNo=1";
//         this.sqlLiteService.exec(query, [appNo]).then(function (res) {
//             deferred.resolve('success');
//         }, function (err) {
//             deferred.reject('error');
//         });
//         return deferred.promise;
//     }

//     saveDirectSalesData = function (data) {
//         directSales = data;
//         console.log("direct sales data :::::");
//         console.log(directSales);
//     }

//     getDirectSalesData = function () {
//         return directSales;
//     }
//     selectDirectSalesPolicyData = function (applicationNumber) {
//         var data = {};
//         var deferred = $q.defer();
//         try {
//             var query = "SELECT * FROM policy WHERE appNo = ?";
//             this.sqlLiteService.exec(query, [applicationNumber]).then(function (res) {
//                 console.log("Select from policy success");
//                 var obj = res.rows.item(0);
//                 // $scope.drBusinessType = obj.businessType;
//                 // $scope.drUpsellPolicyNumber = obj.upsellPolicyNumber;
//                 // console.log($scope.drBusinessType,$scope.drupsellPolicyNumber);
//                 data['businessType'] = obj.businessType;
//                 data['upsellPolicyNumber'] = obj.upsellPolicyNumber;
//                 self.saveDirectSalesData(data);
//                 deferred.resolve('sucess');
//             }, function (err) {
//                 console.log("select from policy error " + err);
//                 deferred.reject(err);
//             })
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     deleteRemittanceDetails = function () {
//         let policyId = localStorage.getItem('policyId');
//         deleteDataFromTable('bankDetail', 'policyId', policyId).then(function (res) {
//             console.log(res);
//         });
//     }

//     deleteNomineeDetails = function () {
//         let policyId = localStorage.getItem('policyId');

//         deleteDataFromTable('nominee', 'policyId', policyId).then(function (res) {
//             console.log(res);
//         });
//     }

//     function deleteDataFromTable(tableName, fieldName, value) {
//         try {
//             var deferred = $q.defer();
//             var deleteQuery = "DELETE FROM " + tableName + " where " + fieldName + "=" + value;
//             this.sqlLiteService.exec(deleteQuery, []).then(function (res) {
//                 deferred.resolve('success');
//             }, function (err) {
//                 deferred.reject('error');
//             });
//         } catch (Ex) { }
//         return deferred.promise;
//     }

//     saveForm60ValueInPolicyTbl = function (data) {
//         console.log("form 60 dataaa ", data);
//         // let obj = {
//         //     'panFormValue': data,
//         //     'estAgIncome':'',
//         //     'estNonAgIncome':'',
//         //     'remarks':''
//         // }
//         let obj = {
//             'panFormValue': data
//         }

//         try {
//             if (eAppForm.form60Details && eAppForm.form60Details.panFormValue) {
//                 eAppForm.form60Details.panFormValue = data
//             } else {
//                 eAppForm.form60Details = obj;

//             }
//             var update = "UPDATE policy SET panFormValue=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, [data || '']).then(function (res) {
//                 console.log("form 60 save res-------", res);
//                 // eAppForm.form60Details.panFormValue = data;

//                 console.log("eappp form60", eAppForm);

//                 console.log("success in saving f60 data", data);
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("errror in f60 data", e);

//         }
//     }
//     initializeForm60ProfDetails = function () {
//         let obj = {}


//         console.log("updateForm60ProfDetails obj", obj);

//         try {
//             eAppForm.form60Details = obj;

//             var update = "UPDATE policy SET panFormValue=?, estAgIncome=?, estNonAgIncome=?, remarks=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, ['PAN', '', '', '']).then(function (res) {
//                 console.log("form 60 prof save res-------", res);
//                 // eAppForm.form60Details.panFormValue = data;
//                 // data.panFormValue = eAppForm.form60Details.panFormValue;
//                 //   -------------------------------------
//                 // eAppForm.form60Details = obj;
//                 // ----------------------------------------

//                 // eAppForm.form60Details.estAgIncome = data.estAgIncome;
//                 // eAppForm.form60Details.estNonAgIncome = data.estNonAgIncome;
//                 // eAppForm.form60Details.remarks = data.remarks;

//                 console.log("eappp form60", eAppForm);

//                 console.log("success in saving f60prof data");
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("errror in f60 profdata", e);

//         }
//     }


//     updateForm60ProfDetails = function (data) {
//         console.log("form 60 dataaa ", data);
//         let obj = {}
//         obj.panFormValue = eAppForm.form60Details.panFormValue;
//         obj.estAgIncome = data.estAgIncome;
//         obj.estNonAgIncome = data.estNonAgIncome;
//         obj.remarks = data.remarks;


//         console.log("updateForm60ProfDetails obj", obj);

//         try {
//             eAppForm.form60Details = obj;

//             var update = "UPDATE policy SET estAgIncome=?, estNonAgIncome=?, remarks=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, [data.estAgIncome, data.estNonAgIncome, data.remarks || '']).then(function (res) {
//                 console.log("form 60 prof save res-------", res);
//                 // eAppForm.form60Details.panFormValue = data;
//                 // data.panFormValue = eAppForm.form60Details.panFormValue;
//                 //    ---------------------------------------
//                 // eAppForm.form60Details = obj;
//                 // ------------------------------------------

//                 // eAppForm.form60Details.estAgIncome = data.estAgIncome;
//                 // eAppForm.form60Details.estNonAgIncome = data.estNonAgIncome;
//                 // eAppForm.form60Details.remarks = data.remarks;

//                 console.log("eappp form60", eAppForm);

//                 console.log("success in saving f60prof data", data);
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("errror in f60 profdata", e);

//         }

//     }

//     saveAgeIncomeMapping = function (data) {
//         try {
//             var deferred = $q.defer();
//             if (data) {
//                 let count = 0;

//                 for (var i = 0; i < data.length; i++) {
//                     let age = data[i].age;
//                     let income = data[i].income;
//                     var ageIncomeQuery = "INSERT INTO ageIncomeMapping (age,income)) VALUES (?,?)";
//                     this.sqlLiteService.exec(ageIncomeQuery, [age, income]).then(function (res) {
//                         count = count + 1;
//                         if (count == data.length) {
//                             console.log("res ageincome res", res);
//                             deferred.resolve(res[0]);
//                         }
//                         console.log("field added");

//                     }, function (err) {
//                         console.error(err);
//                     });

//                 }

//             }

//         } catch (Ex) { }
//         return deferred.promise
//     }
//     updateOclDsdDetails = function (data) {

//         let ocl = data.ocl;
//         let dsd = data.dsd;
//         try {
//             var update = "UPDATE policy SET ocl=?, dsd=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, [ocl, dsd]).then(function (res) {
//                 console.log("form 60 prof save res-------", res);
//                 // angular.exte
//                 eAppForm.suppDocAddtnlDtls = data;



//                 console.log("eappp form60", eAppForm);

//                 console.log("success in saving f60prof data", data);
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("errror in f60 profdata", e);

//         }

//     }

//     updateCusDocUpload = function (data) {

//         let cusDocUpload = data.selected;
//         let cusDocLinkSent = data.linkSent;
//         let cusDocMailCount = data.sendMailCount;
//         try {
//             var update = "UPDATE policy SET cusDocUploadSelected=?, cusDocLinkSent=?, cusDocMailCount=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, [cusDocUpload, cusDocLinkSent, cusDocMailCount]).then(function (res) {
//                 console.log("CusdocUpload save res-------", res);
//                 eAppForm.cusDocUpload = data;

//                 console.log("eappp CusdocUpload", eAppForm);

//                 console.log("success in saving CusdocUpload data", data);
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("errror in cusdocUpload", e);

//         }

//     }
//     updateCustomerDocs = function (data) {

//         let checkbox = data.checkbox || false;
//         let downloaded = data.downloaded || false;
//         try {
//             var update = "UPDATE policy SET customerDocCheckbox=?, customerDocDownloaded=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, [checkbox, downloaded]).then(function (res) {
//                 console.log("CustomerDocs save res-------", res);
//                 eAppForm.customerDocs = data;

//                 console.log("eappp CustomerDocs", eAppForm);

//                 console.log("success in saving CustomerDocs data", data);
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("error in CustomerDocs", e);

//         }

//     }

//     resetForm60Details = function () {
//         try {
//             // eAppForm.form60Details = obj;

//             var update = "UPDATE policy SET estAgIncome=?, estNonAgIncome=?, remarks=? where id='" + localStorage.getItem('policyId') + "' ";
//             this.sqlLiteService.exec(update, ['', '', '']).then(function (res) {
//                 console.log("resetForm60Details res-------", res);
//                 console.log("eappp form60", eAppForm);
//                 console.log("success in saving f60prof data");
//             }, function (err) {
//                 console.log(err);
//             });
//         } catch (e) {
//             console.log("errror in f60 profdata", e);

//         }
//     }
//     resetOccupationData = function (cId) {
//         console.log("ciddddddddd:::::::::::::", cId);

//         try {
//             var updateEducationTbl = "UPDATE education SET occupation=?,orgType=?,desgn=?,nameOfOrg=? where customerId=" + cId;
//             this.sqlLiteService.exec(updateEducationTbl, ['', '', '', '']).then(function (res) {
//                 console.log("res for resettinggg::::::::::", res);

//             }, function (err) {
//                 console.error("err for resetting::::::::", err);
//             });
//         } catch (Ex) { }
//     }

//     //
//     saveCommonLogs = function (e) {
//         var obj = {
//             'agentCode': '',
//             'logType': '',
//             'logCreationDate': '',
//             'logText': ''
//         };
//         let aC = ''
//         if (localStorage.getItem('agent') && JSON.parse(localStorage.getItem('agent')).AgentCode) {
//             aC = JSON.parse(localStorage.getItem('agent')).AgentCode
//         }
//         try {
//             obj.agentCode = aC || '',
//                 obj.logType = 'Common';
//             obj.logCreationDate = new Date();
//             obj.logText = e;
//             self.saveGenericLogs(obj);
//         } catch (e) {
//             console.log(e);
//         }
//     }
//     //
//     deleteNotifications = function () {
//         try {
//             var deferred = $q.defer();
//             var delNotisQuery = "DELETE FROM notifications";
//             this.sqlLiteService
//                 .exec(delNotisQuery)
//                 .then((res) => {
//                     deferred.resolve("Notification table deleted");
//                 })
//                 .catch((err) => {
//                     deferred.reject(err);
//                 });
//         } catch (err) {
//             console.log(err);
//         }
//         return deferred.promise;
//     };

//     // insert or update data to notifications table
//     insertNotifications = function (id, title, status, stNoti, customMessage, channel) {
//         try {
//             var deferred = $q.defer();

//             var insertQuery = "INSERT INTO notifications (id,title, status, staticNotification,customMessage, channel) VALUES (?,?,?,?,?,?)";
//             this.sqlLiteService
//                 .exec(insertQuery, [id, title, status, stNoti, customMessage, channel])
//                 .then(function (res) {
//                     deferred.resolve("Notification table Inserted");
//                 })
//                 .catch((err) => {
//                     deferred.reject(err);
//                 });
//         } catch (err) {
//             console.log(err);
//         }

//         return deferred.promise;
//     };

//     newNotificationToShow = async function (title, customMessage) {
//         let result = await newNotificationToShow1(title, customMessage);
//         console.log("result--------------->", result);
//         if (result && result == "insert") {
//             insertNewNotification(title, customMessage);
//         } else if (result && result == "update") {
//             updateNewNotification(title, customMessage);
//         }
//     };

//     function insertNewNotification(title, customMessage) {
//         console.log("New noti to show func ");
//         try {
//             var deferred = $q.defer();
//             let insertQuery =
//                 "INSERT INTO notificationsToShow (title,customMessage,isSeen) VALUES (?,?,?)";

//             this.sqlLiteService
//                 .exec(insertQuery, [title, customMessage, 0])
//                 .then(function (res) {
//                     deferred.resolve("Notification added to NTS");
//                 })
//                 .catch((err) => {
//                     deferred.reject(err);
//                 });
//         } catch (err) {
//             console.log(err);
//         }

//         return deferred.promise;
//     }
//     function updateNewNotification(title, customMessage) {
//         console.log("New noti to show func ");
//         try {
//             var deferred = $q.defer();
//             var query =
//                 "UPDATE notificationsToShow SET customMessage=?,isSeen=? WHERE title=?";
//             this.sqlLiteService.exec(query, [customMessage, 0, title]).then(
//                 function (res) {
//                     console.log("Update notificationToShow success");
//                 },
//                 function (err) {
//                     console.log("Update notificationToShow failed");
//                 }
//             );
//         } catch (err) {
//             console.log(err);
//         }

//         return deferred.promise;
//     }

//     newNotificationToShow1 = function (title, customMessage) {
//         try {
//             var deferred = $q.defer();
//             var query = "SELECT * FROM notificationsToShow WHERE title = ?";
//             this.sqlLiteService.exec(query, [title]).then(
//                 function (res) {
//                     console.log("Select from policy success");
//                     var obj = res.rows.item(0);
//                     if (obj && obj.id) {
//                         deferred.resolve("update");
//                     } else {
//                         deferred.resolve("insert");
//                     }
//                 },
//                 function (err) {
//                     console.log("select from policy error " + err);
//                     deferred.reject(err);
//                 }
//             );
//         } catch (Ex) { }
//         return deferred.promise;
//     };

//     delNotificationToShow = function (title) {
//         try {
//             var deferred = $q.defer();
//             let delQuery = "DELETE FROM notificationsToShow WHERE title=?";
//             this.sqlLiteService
//                 .exec(delQuery, [title])
//                 .then(function (res) {
//                     deferred.resolve("Notification deleted");
//                 })
//                 .catch((err) => {
//                     deferred.reject(err);
//                 });
//         } catch (err) {
//             console.log(err);
//         }

//         return deferred.promise;
//     };

// }