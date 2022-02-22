// import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
// })

// export class policySyncService {
//     var self = this;

// this.getPolicyDataById = function (policyId) {

//     var deferred = $q.defer();
//     resumeDataService.getAppDataById(policyId).then(function (res) {
//         console.log("policyServiceeeeee 1 resss:::::::", res);
//         var chain = $q.when();
//         res.multipleInstruments.forEach(function (paymentData, count) {
//             chain = chain.then(function () {
//                 return getMicrCode(paymentData).then(function (micrCode) {
//                     res.multipleInstruments[count].micrCode = micrCode;
//                 }).catch(function (err) {
//                     throw err;
//                 });
//             });
//         });
//         return chain.then(function () {
//             return res;
//         });
//     }).then(function (res) {
//         console.log('resume start+++++++++++', res);
//         var obj = res;
//         var calcData = {};
//         var policyData = res.policyData;
//         var policyLinkedData = res.policyLinkedData || '';
//         let eAppData = {
//             LAData: {},
//             ProposerData: {},
//             loveCardDetails: {},
//             form60Details: {},
//             suppDocAddtnlDtls: {},
//             cusDocUpload: {},
//             customerDocs: {},
//         };
//         console.log("policy dataaaaaa res 3::::::::::", policyData);
//         eAppData.suppDocAddtnlDtls = res.suppDocAddtnlDtls
//         eAppData.cusDocUpload = res.cusDocUpload;
//         eAppData.customerDocs = res.customerDocs;
//         eAppData.form60Details = res.form60Details
//         eAppData.loveCardDetails = res.loveCardDetails;
//         eAppData.bancaAgentDtl = res.bancaAgentDtl;
//         eAppData.dhflAgentDtl = res.dhflAgentDtl;
//         eAppData.nominee = res.additionalDtls.nominee;
//         eAppData.LAData.personalDtl = res.personalDtl.customer.dtl;
//         eAppData.LAData.address = res.personalDtl.customer.address;
//         eAppData.LAData.familyDtl = res.personalDtl.familyDtl;
//         eAppData.LAData.otherPolicy = res.personalDtl.otherPolicy;
//         eAppData.LAData.cvdDeclinedPolicy = res.personalDtl.cvdDeclinedPolicy;
//         eAppData.LAData.profDtl = res.personalDtl.otherDtl.profDtl.dtl;
//         eAppData.policyLinkedData = policyLinkedData;
//         eAppData.ProposerData.personalDtl = res.otherMemberDtl.customer.dtl;
//         eAppData.ProposerData.address = res.otherMemberDtl.customer.address;
//         eAppData.ProposerData.otherPolicy = res.otherMemberDtl.otherPolicy;
//         eAppData.ProposerData.profDtl = res.otherMemberDtl.otherDtl.profDtl.dtl;
//         // eAppData.lumSumOnMaturity=res.lumSumOnMaturity;
//         eAppData['commonProposalForm'] = res['commonProposalForm'][0];
//         eAppData.enachRegistrationForm = res.enachRegistrationForm;
//         eAppData.ir = res.additionalDtls.ir;

//         indexDBService.getDataFromTable("natureOfDutiesMaster", 'code', res.personalDtl.otherDtl.profDtl.dtl.desgn).then(function (res) {
//             eAppData.LAData.profDtl['desgnName'] = res[0].name;

//             return eAppData;
//         }).then(function (eAppData) {
//             return indexDBService.getDataFromTable("natureOfDutiesMaster", 'code', res.otherMemberDtl.otherDtl.profDtl.dtl.desgn).then(function (res) {
//                 eAppData.ProposerData.profDtl['desgnName'] = res[0].name;

//                 return eAppData;
//             });
//         }).then(function (eAppData) {
//             return indexDBService.getMasterFieldValue('irMasterNew', 'key', 'value', res.additionalDtls.ir.plan).then(function (res) {
//                 if (eAppData.ir.plan) {
//                     eAppData.ir['planVal'] = res[0] ? res[0] : ''
//                 }

//                 return eAppData;
//             });
//         }).then(function (eAppData) {
//             return indexDBService.getMasterFieldValue('irMasterNew', 'key', 'value', res.additionalDtls.ir.irName).then(function (res) {
//                 if (eAppData.ir.irName) {
//                     eAppData.ir['irNameVal'] = res[0] ? res[0] : ''
//                 }

//                 return eAppData;
//             });
//         }).then(function (eAppData) {
//             console.log("eAppData::::::::::::::::::::::::::::::::::::", eAppData);
//             eAppData.accountDtl = res.personalDtl.accDetail || {};
//             // eAppData.ir = res.additionalDtls.ir;
//             eAppData.lifeStyleDtl = res.lifeStyleDtl;
//             eAppData.disclaimer = res.disclaimer;
//             eAppData.fatca = res.additionalDtls.fatca;
//             eAppData.multipleInstruments = res.multipleInstruments;
//             eAppData.paymentLinkDetails = res.paymentLinkDetails;
//             eAppData.accountDtl.accNo = res.personalDtl.accDetail.accNo;

//             for (var i = 0; i < eAppData.nominee.length; i++) {
//                 if (!eAppData.nominee[i].appointee_nomineeId) {
//                     eAppData.nominee[i].relationship = eAppData.nominee[i].relationLA;
//                     eAppData.nominee[i].contactNo = eAppData.nominee[i].contact;
//                     eAppData.nominee[i].sharePercentage = eAppData.nominee[i].sharePercentage;
//                 } else {
//                     for (var j = 0; j < eAppData.nominee.length; j++) {
//                         if (eAppData.nominee[i].appointee_nomineeId == eAppData.nominee[j].id) {
//                             eAppData.nominee[j].appointeeDetails = {};
//                             eAppData.nominee[j].appointeeDetails.relationship = eAppData.nominee[i].relationLA;
//                             eAppData.nominee[j].appointeeDetails.contactNo = eAppData.nominee[i].contact;
//                             eAppData.nominee[j].appointeeDetails.name = eAppData.nominee[i].name;
//                             eAppData.nominee[j].appointeeDetails.dob = eAppData.nominee[i].dob;
//                         }
//                     }
//                 }
//             }

//             var newArray = eAppData.nominee.filter(function (obj) {
//                 return !obj.appointee_nomineeId;
//             });

//             eAppData.nominee = newArray;

//             if (eAppData.nominee.length == 1) {
//                 eAppData.nominee[0].sharePercentage = "100";
//             }

//             eAppData.document = res.additionalDtls.document;
//             eAppData.onlineTransaction = res.onlineTransaction;

//             if (res.personalDtl.customer.dtl.gender == 'male') {
//                 eAppData.LAData.personalDtl.gender = 'M';
//             } else {
//                 eAppData.LAData.personalDtl.gender = 'F';
//             }
//             if (res.otherMemberDtl.customer.dtl.gender == 'male') {
//                 eAppData.ProposerData.personalDtl.gender = 'M';
//             } else {
//                 eAppData.ProposerData.personalDtl.gender = 'F';
//             }
//             eAppData.LAData.personalDtl.title = res.personalDtl.customer.dtl.title.toUpperCase();
//             if (res.otherMemberDtl.customer.dtl.title) {
//                 eAppData.ProposerData.personalDtl.title = res.otherMemberDtl.customer.dtl.title.toUpperCase();
//             }
//             if (res.otherMemberDtl.customer.dtl.dob) {
//                 eAppFormService.getAge(res.otherMemberDtl.customer.dtl.dob).then(function (res) {
//                     eAppData.ProposerData.personalDtl.age = res;
//                 });
//             }
//             if (res.personalDtl.customer.dtl.dob) {
//                 eAppFormService.getAge(res.personalDtl.customer.dtl.dob).then(function (res) {
//                     eAppData.LAData.personalDtl.age = res;
//                 });
//             }
//             var completeData = angular.extend(eAppData, policyData);
//             console.log("checking calculator data:", calculatorService.getCalculatorSelectedData());
//             if (completeData.UIN == '140N074V01') {
//                 let agentType = JSON.parse(localStorage.getItem('agent')).Type || '';
//                 let subAgentCategory = localStorage.getItem('AGENT_CATEGORY') || '';

//                 if (agentType == "PL" || subAgentCategory == "POS Agent") {
//                     completeData['productCode'] = 'T46';
//                 }
//                 completeData['ppt'] = "1";
//                 completeData['term'] = "99";
//                 var calculatorData = calculatorService.getCalculatorSelectedData();
//                 if (calculatorData) {
//                     console.log("Adding BRMS values :", calculatorData.UserApiResult);
//                     completeData['annuityPayout'] = calculatorData.UserApiResult.annuityPayout;
//                     completeData['purchasePriceIncTax'] = calculatorData.UserApiResult.purchasePriceIncTax;
//                     completeData['purchasePriceExcTax'] = calculatorData.UserApiResult.purchasePriceExcTax;
//                     completeData['gstAndCess'] = calculatorData.UserApiResult.gstAndCess;
//                 }
//             } else {
//                 // resetting spouse details for products other than saral pension product
//                 completeData.LAData.personalDtl.spouseGender = "";
//                 completeData.LAData.personalDtl.spouseRelationship = "";
//                 completeData.LAData.personalDtl.spouseDOB = "";
//             }
//             console.log('completeData::::::', completeData);
//             console.log("policdata unifiedCurrentLogin::::::::::", policyData.unifiedCurrentLogin);

//             var agentDetails = res.agentDetails;
//             completeData['stpRule'] = genericServices.getStpRules();
//             console.log("policy Going for Syncing", completeData['stpRule']);
//             // resetting all stp rules to false for saral pension product
//             if (completeData.UIN == '140N074V01') {
//                 completeData.stpRule.LAHeightWeight = false;
//                 completeData.stpRule.LAHealthQuestionarie = false;
//                 completeData.stpRule.LifeAssuredFamilyDetail = false;
//                 completeData.stpRule.LifeAssuredPreviouPolicies = false;
//                 completeData.stpRule.disclaimer = false;
//             }
//             completeData['eNachStatus'] = eAppFormService.getEnachStatus();
//             console.log('policyData::: parent chhananel', policyData.parentChannel);
//             if (policyData.unifiedCurrentLogin && policyData.unifiedCurrentLogin == 'LVB' || policyData.unifiedCurrentLogin == 'DLB' || policyData.unifiedCurrentLogin == 'GPD' || policyData.parentChannel == 'banca_assurance' || policyData.parentChannel == 'UCB' || policyData.unifiedCurrentLogin == 'DHFL' || policyData.parentChannel == 'X-Sell') {
//                 var bancaAgentDtl = res.bancaAgentDtl;
//                 completeData['agentChannel'] = bancaAgentDtl.channelType;
//                 completeData['agentBranch'] = bancaAgentDtl.agentBranch;
//                 completeData['CHANNEL_CODE'] = bancaAgentDtl.channelCode;
//                 completeData['LOB'] = bancaAgentDtl.lob;
//                 completeData['BRANCH_CODE'] = bancaAgentDtl.branchCode;
//                 completeData['ZONE'] = bancaAgentDtl.zone;
//                 completeData['COLLECTION_BANK'] = bancaAgentDtl.collectionBank;
//                 completeData['COLLECTION_CENTRE'] = bancaAgentDtl.collectionCenter;
//             }
//             //  else if (policyData.unifiedCurrentLogin == 'DHFL' || policyData.parentChannel == 'X-Sell') {
//             //     var bancaAgentDtl = res.bancaAgentDtl;
//             //     completeData['agentChannel'] = bancaAgentDtl.channelType;
//             //     completeData['agentBranch'] = agentDetails.agentBranch;
//             //     completeData['CHANNEL_CODE'] = bancaAgentDtl.channelCode;
//             //     completeData['LOB'] = bancaAgentDtl.lob;
//             //     completeData['BRANCH_CODE'] = agentDetails.BRANCH_CODE;
//             //     completeData['ZONE'] = bancaAgentDtl.zone;
//             //     completeData['COLLECTION_BANK'] = agentDetails.COLLECTION_BANK;
//             //     completeData['COLLECTION_CENTRE'] = agentDetails.COLLECTION_CENTRE;
//             // }
//             else {
//                 completeData['agentChannel'] = agentDetails.agentChannel;
//                 completeData['agentBranch'] = agentDetails.agentBranch;
//                 completeData['CHANNEL_CODE'] = agentDetails.CHANNEL_CODE;
//                 completeData['LOB'] = agentDetails.LOB;
//                 completeData['BRANCH_CODE'] = agentDetails.BRANCH_CODE;
//                 completeData['ZONE'] = agentDetails.ZONE;
//                 completeData['COLLECTION_BANK'] = agentDetails.COLLECTION_BANK;
//                 completeData['COLLECTION_CENTRE'] = agentDetails.COLLECTION_CENTRE;
//             }

//             // completeData['agentType'] = agentDetails.agentType;
//             console.log('policy Data lower', policyData.parentChannel)
//             if (policyData.unifiedCurrentLogin && (policyData.unifiedCurrentLogin == 'LVB' || policyData.unifiedCurrentLogin == 'DLB' || policyData.unifiedCurrentLogin == 'DHFL' || policyData.unifiedCurrentLogin == 'GPD' || policyData.parentChannel == 'banca_assurance' || policyData.parentChannel == 'X-Sell' || policyData.parentChannel == 'UCB')) {
//                 agentDetails.agentCode = agentDetails.agentCode.toString();
//                 if (agentDetails.agentCode.length < 5) {
//                     var padZero = "";
//                     for (var k = 1; k <= (5 - agentDetails.agentCode.length); k++) {
//                         padZero = padZero + "0";
//                     }
//                     agentDetails.agentCode = padZero + agentDetails.agentCode;
//                 }
//             }
//             completeData['isDigitalYes'] = (eAppData['commonProposalForm'] && eAppData['commonProposalForm']['digitalVerificationToggle']) ? 1 : 0;
//             completeData['isEnachRegistrationOpted'] = (eAppData.enachRegistrationForm && eAppData.enachRegistrationForm.enachToggle) ? 1 : 0;
//             completeData['businessType'] = res.policyData.businessType;
//             completeData['upsellPolicyNumber'] = res.policyData.upsellPolicyNumber;
//             completeData['productCategoryType'] = res.policyData.productCategoryType;
//             completeData['agentCode'] = agentDetails.agentCode;
//             completeData['agentName'] = agentDetails.agentName;
//             completeData['agentMobile'] = agentDetails.mobile;
//             completeData['agentEmail'] = agentDetails.email;
//             completeData['proposalSubmitDate'] = res.policyData.proposalSubmitDate;
//             completeData['appVersion'] = version.appVersion;
//             completeData['deviceId'] = localStorage.getItem('deviceID') || '';
//             eAppFormService.selectWhatsappConsent(policyId).then(function (response) {
//                 console.log("wtc responseee on resuomeee", response);
//                 // eAppData.review.whatsappConsent = policyData.wtConsent ? true : false
//                 if (response == "") {
//                     completeData['wtConsent'] == true;
//                 } else {
//                     completeData['wtConsent'] = response.wtConsent == 1 ? true : false
//                 }
//                 // eAppData.review.whatsappConsent=false;
//             })
//             if (completeData['productCode'] == 'T03') {
//                 completeData['ppt'] = completeData['term'];
//             }
//             var ifGPDorTPD = eAppFormService.getIfGPDorTPD();
//             console.log("ifGPDorTPD::::::::::::::::::::::", ifGPDorTPD);
//             if (ifGPDorTPD && ifGPDorTPD == 'GPD') {
//                 completeData['agentType'] = 'GPD';
//             } else if (ifGPDorTPD && ifGPDorTPD == 'TPD') {
//                 completeData['agentType'] = 'TPD';
//             } else if (policyData.unifiedCurrentLogin && (policyData.unifiedCurrentLogin == 'LVB' || policyData.parentChannel == 'banca_assurance')) {
//                 completeData['agentType'] = policyData.unifiedCurrentLogin

//             } else if (policyData.unifiedCurrentLogin && (policyData.unifiedCurrentLogin == 'DLB' || policyData.parentChannel == 'UCB')) {
//                 completeData['agentType'] = policyData.unifiedCurrentLogin

//             } else if (policyData.unifiedCurrentLogin && (policyData.unifiedCurrentLogin == 'DHFL' || policyData.parentChannel == 'X-Sell')) {
//                 completeData['agentType'] = policyData.unifiedCurrentLogin
//             } else if (policyData.unifiedCurrentLogin && (policyData.unifiedCurrentLogin == 'GPD' || policyData.parentChannel == 'UCB')) {
//                 completeData['agentType'] = policyData.unifiedCurrentLogin
//             } else if (policyData.unifiedCurrentLogin && (policyData.unifiedCurrentLogin == 'TPD' || policyData.parentChannel == 'UCB')) {
//                 completeData['agentType'] = policyData.unifiedCurrentLogin
//             } else {
//                 completeData['agentType'] = agentDetails.agentType || policyData.unifiedCurrentLogin
//             }
//             completeData['parentChannel'] = policyData.parentChannel
//             console.log(completeData['agentType'])
//             // if(agentDetails.agentType =='GPD' && completeData['isTPDGPD'] && completeData['isTPDGPD']=='TPD'){
//             //     console.log("completeData['isTPDGPD']",completeData['isTPDGPD']);
//             //   completeData['agentType'] = completeData['isTPDGPD'];
//             //   console.log("completeData['agentType']",completeData['agentType']);
//             // }
//             completeData.LAData.personalDtl.customerId = completeData.LAData.personalDtl.id;
//             completeData.ProposerData.personalDtl.customerId = completeData.ProposerData.personalDtl.id;
//             completeData.multipleInstruments.forEach(function (x, index) {
//                 x["instrumentRefNo"] = completeData.BRANCH_CODE.substring(0, 3) + completeData.appNo.substring(4) + index;
//             });
//             // instrumentRefNo- 11 characters -- 3 (initial 3 digits of branch code) + 7 (last 7 digits of appNo) + 1 (instrument index)
//             delete completeData.id;
//             delete completeData.LAData.personalDtl.id;
//             delete completeData.LAData.personalDtl.type;
//             delete completeData.ProposerData.personalDtl.id;
//             delete completeData.ProposerData.personalDtl.type;
//             delete completeData.onlineTransaction.id;
//             delete completeData.bancaAgentDtl.id;
//             for (var i = 0; i < completeData.LAData.familyDtl.length; i++) {
//                 delete completeData.LAData.familyDtl[i].id;
//             }
//             for (var i = 0; i < completeData.nominee.length; i++) {
//                 delete completeData.nominee[i].id;
//             }
//             for (var i = 0; i < completeData.multipleInstruments.length; i++) {
//                 delete completeData.multipleInstruments[i].id;
//             }
//             for (var i = 0; i < completeData.LAData.otherPolicy.length; i++) {
//                 delete completeData.LAData.otherPolicy[i].id;
//             }
//             for (var i = 0; i < completeData.ProposerData.otherPolicy.length; i++) {
//                 delete completeData.ProposerData.otherPolicy[i].id;
//             }
//             for (var i = 0; i < completeData.document.length; i++) {
//                 completeData.document[i].docId = completeData.document[i].id;
//                 delete completeData.document[i].id;
//             }
//             if (completeData.fatca.TaxDetails) {
//                 for (var i = 0; i < completeData.fatca.TaxDetails.length; i++) {
//                     delete completeData.fatca.TaxDetails[i].id;
//                 }
//             }
//             if (completeData.fatca.TaxDetailsProposer) {
//                 for (var i = 0; i < completeData.fatca.TaxDetailsProposer.length; i++) {
//                     delete completeData.fatca.TaxDetailsProposer[i].id;
//                 }
//             }

//             delete completeData.ir.id;
//             delete completeData.disclaimer.id;
//             delete completeData.fatca.id;
//             delete completeData.dhflAgentDtl.id;
//             console.log('data sent for syncing', completeData);
//             if (!completeData.disclaimer || completeData.disclaimer == {}) {
//                 console.log('disclaimer failed in policy service for app ' + completeData.appNo);
//             }
//             ocrService.getOcrToggleData().then(function (res) {
//                 completeData.ocrToggle = res.ocrToggle;
//             });
//             // completeData.ocrToggle = 0;

//             console.log("completeData----------------------------", completeData);
//             //resumeDataService.setResumeForm(formData);
//             if (completeData.cvdProductType) {
//                 // LA
//                 completeData.LAData.address.permanent.addr3 = null;
//                 completeData.LAData.address.communication.addr3 = null;

//                 // PO
//                 completeData.ProposerData.address.permanent.addr3 = null;
//                 completeData.ProposerData.address.communication.addr3 = null;

//                 // FATCA
//                 completeData.fatca = null;

//                 cvdService.getValueFromDB(completeData.LAData.personalDtl.customerId, completeData.UIN).then(function (cvdRes) {
//                     completeData.cvdData = {};
//                     angular.extend(completeData.cvdData, cvdRes);
//                     deferred.resolve(completeData);
//                 });
//             }
//             //wealth
//             else if (!completeData.cvdProductType) {
//                 wealthMaximizerService.getValueFromDBForSyncing(completeData.LAData.personalDtl.customerId).then(function (res) {


//                     completeData.wealthMaxData = {};
//                     console.log("completeData--------------------------", completeData);
//                     completeData.disclaimer['politicalExposedDetail'] = res.wealthPolicyExtra.politicalExposedDetail;
//                     angular.extend(completeData.wealthMaxData, res);
//                     if (completeData.wealthMaxData && !completeData.wealthMaxData.lifeStyleExtraData) {
//                         var wealthMaxDataObj = wealthMaximizerService.getWealthMaxData();
//                         if (wealthMaxDataObj != null && wealthMaxDataObj.lifeStyleExtraData) {
//                             completeData.wealthMaxData.lifeStyleExtraData = wealthMaxDataObj.lifeStyleExtraData;
//                         } else {

//                             lifeStyleExtraData = {
//                                 tobaccoDetails: {
//                                     cigrattee: {
//                                         text: "Cigarette",
//                                         dayQuantity: 0,
//                                         noOfYears: 0,
//                                         isAddicted: false,
//                                         itemKey: "cigrattee"
//                                     },
//                                     beedi: {
//                                         text: "Beedi",
//                                         dayQuantity: 23,
//                                         noOfYears: 12,
//                                         isAddicted: 0,
//                                         itemKey: "beedi"
//                                     },
//                                     gutka: {
//                                         text: "Gutka",
//                                         dayQuantity: null,
//                                         noOfYears: null,
//                                         isAddicted: false,
//                                         itemKey: "gutka"
//                                     },
//                                     cigar: {
//                                         text: "Cigar",
//                                         dayQuantity: null,
//                                         noOfYears: null,
//                                         isAddicted: false,
//                                         itemKey: "cigar"
//                                     },
//                                     panMasala: {
//                                         text: "Pan Masala",
//                                         dayQuantity: null,
//                                         noOfYears: null,
//                                         isAddicted: false,
//                                         itemKey: "panMasala"
//                                     },
//                                     others: {
//                                         text: "Others",
//                                         dayQuantity: null,
//                                         noOfYears: null,
//                                         isAddicted: false,
//                                         itemKey: "others"
//                                     }
//                                 },
//                                 alcoholDetails: {

//                                     hardLiquor: {
//                                         text: "Hard Liquor",
//                                         perWeek: null,
//                                         noOfYears: null,
//                                         isAddicted: false,
//                                         itemKey: "hardLiquor"
//                                     },
//                                     beer: {
//                                         text: "Beer",
//                                         perWeek: null,
//                                         noOfYears: null,
//                                         isAddicted: false,
//                                         itemKey: "beer"
//                                     },
//                                     wine: {
//                                         text: "Wine",
//                                         perWeek: null,
//                                         noOfYears: null,
//                                         isAddicted: false,
//                                         itemKey: "wine"
//                                     }

//                                 }
//                             }

//                             completeData.wealthMaxData.lifeStyleExtraData = Object.assign({}, lifeStyleExtraData);

//                         }

//                     }
//                     console.log("CompleteData:::::::::::::::::::::", completeData);

//                     if (completeData.UIN == '140N074V01') {
//                         completeData.LAData.familyDtl = [];
//                         completeData.LAData.otherPolicy = [];
//                         completeData.LAData.personalDtl.isFamilyActive = 0;
//                         completeData.LAData.personalDtl.isOtherPolicyActive = 0;
//                         completeData.lifeStyleDtl.femaleQues = [];
//                         completeData.lifeStyleDtl.healthQues = [];
//                         completeData.lifeStyleDtl.lifestyle = {};
//                         completeData.wealthMaxData = "";
//                         completeData.disclaimer = "";
//                         console.log("CompleteData For SPP : ", completeData);
//                     }

//                     deferred.resolve(completeData);

//                 });
//             } else if (completeData.UIN == '140COMBO01') {
//                 comboProductService.getValueFromDBForSyncing(completeData.LAData.personalDtl.customerId).then(function (res) {
//                     completeData.comboData = {};
//                     completeData.disclaimer['politicalExposedDetail'] = res.wealthPolicyExtra.politicalExposedDetail;
//                     angular.extend(completeData.comboData, res);
//                     deferred.resolve(completeData);

//                 });
//             }
//             //wealth
//             else {

//                 deferred.resolve(completeData);
//             }
//         });
//     }).catch(function (err) {
//         deferred.reject(err);
//     });
//     return deferred.promise;
// }

// this.modifyPolicyDataForPendingProposals = function (policyData) {
//     var policyId = policyData.LAData.personalDtl.policyId;
//     policyData['cvdRejectionStatus'] = 1;
//     if (policyData.cvdProductType) {
//         policyData['cvdRejectionStatus'] = policyData.cvdData.cvdPolicyStatus.policyStatus;
//     }
//     return eAppFormService.getMasterStatusById('applicationState', 'policyId', policyId).then(function (res) {
//         policyData.lastAppState = res[0].state;
//         return policyData;
//     }).then(function (policyData) {
//         return eAppFormService.getMasterStatusById('pageStatus', 'policyId', policyId).then(function (res) {
//             var pageStatus = [];
//             policyData.pageStatus = res;
//             return policyData;
//         });
//     }).then(function (policyData) {
//         for (var i = 0; i < policyData.pageStatus.length; i++) {
//             delete policyData.pageStatus[i].id;
//             delete policyData.pageStatus[i].policyId;
//         }
//         return policyData;
//     }).then(function (policyData) {
//         let agentDataForUnified = eAppFormService.getDataForUnified();
//         console.log("sync agent dataa", agentDataForUnified);

//         if (policyData.agentType == 'LVB' || policyData.agentType == 'DLB' || policyData.agentType == 'GPD') {
//             policyData.employeeType = "BANCA";
//         } else if (policyData.agentType == "DHFL") {
//             policyData.employeeType = "DHFL";

//         }
//         return eAppFormService.selectAgentCategory(policyData.appNo).then(function (response) {
//             policyData['AGENT_CATEGORY'] = localStorage.getItem('AGENT_CATEGORY') || '';
//             return policyData;

//             // return eAppFormService.selectAgentCategory(localStorage.getItem('applicationNo')).then(function(response){
//             //     policyData['AGENT_CATEGORY'] = localStorage.getItem('AGENT_CATEGORY') || '';
//             //     return policyData;
//         });
//     })
// }

// function getMicrCode(paymentData) {
//     var deferred = $q.defer();
//     var result = "";
//     if (paymentData.paymentMode != "Online" && paymentData.ifscCode) {
//         ifscService.getBankDetails(paymentData.ifscCode).then(function (ifscRes) {
//             var output = ifscRes.res.data.result[0];
//             if (output) {
//                 if (output.MICR) {
//                     result = output.MICR;
//                 }
//             }
//             deferred.resolve(result);
//         }).catch(function (error) {
//             deferred.reject(error);
//         });
//     } else {
//         deferred.resolve(result);
//     }
//     return deferred.promise;
// }
// }