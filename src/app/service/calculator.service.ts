// import { Injectable } from "@angular/core";
// import { eAppFormService } from "./eApp-form-service.service";

// @Injectable({
//     providedIn: 'root'
// })

// export class CalculatorService {

//     constructor(private eAppFormService: eAppFormService) { }

//     calculaterSelectedData;
//     paymentGatwayResponse;
//     eAppForm = this.eAppFormService.getEappForm();
//     resumeCalculatorData = {};
//     Pdf = this.eAppForm.Pdf || {};
//     cvdCareSelectedData;
//     cvdCarePlusSelectedData;
//     calculateBenefitIntialValue;
//     productCategoryType;
//     //  self = this;
//     reloadDt;
//     statusValue = false;

//     //
//     saveProductCategoryType = function (data, productCategoryMapping) {
//         console.log('data:::::::::::::::::::', data);
//         let product_Uin = data.productGuid;
//         console.log('productCategoryMapping::::::::::::::::::::', productCategoryMapping);
//         let found;
//         let type;
//         if (productCategoryMapping) {
//             if (productCategoryMapping.isTradition == true && !type) {
//                 found = this.matchProdCategoryType(productCategoryMapping.traditionProduct, product_Uin);
//                 type = found ? 'traditionalProductCategory' : '';
//             }
//             if (productCategoryMapping.isUlip == true && !type) {
//                 found = this.matchProdCategoryType(productCategoryMapping.ulipProduct, product_Uin);
//                 type = found ? 'ulipProductCategory' : '';
//             }
//             if (productCategoryMapping.isHealth == true && !type) {
//                 found = this.matchProdCategoryType(productCategoryMapping.healthProduct, product_Uin);
//                 type = found ? 'healthProductCategory' : '';
//             }
//             if (productCategoryMapping.isPos == true && !type) {
//                 found = this.matchProdCategoryType(productCategoryMapping.posProduct, product_Uin);
//                 type = found ? 'posProductCategory' : '';
//             }
//             this.setProductCategoryType(type);
//             //let policy_Id = localStorage.getItem('policyId');
//             // conditionalUpdatePolicy('productCategoryType',type,policy_Id); //coz inseton in policy table happens after calculate benefit
//         }


//     }
//     matchProdCategoryType = function (productArr, product_Uin) {
//         let found = false;
//         productArr.forEach((data) => {
//             if (data == product_Uin) {
//                 found = true;
//             }
//         });
//         return found;
//     }
//     setProductCategoryType = function (type) {
//         this.productCategoryType = type;
//     }
//     getProductCategoryType = function () {
//         return this.productCategoryType;
//     }
//     clearProductCategoryType = function () {
//         this.productCategoryType = '';
//     }
//     //
//     saveCalculateBenefitInitialValue = function (data) {
//         this.calculateBenefitIntialValue = 0;
//         this.calculateBenefitIntialValue = data;
//     }

//     getCalculateBenefitInitialValue = function () {
//         return this.calculateBenefitIntialValue;
//     }

//     saveCalculatorSelectedData = function (data) {

//         this.calculaterSelectedData = '';
//         this.calculaterSelectedData = data;
//     }
//     setBIPdf = function (url) {
//         this.eAppFormService.setBIPdf(url);
//         this.Pdf['BenefitIllustrator'] = url;
//     }
//     setposPdf = function (url) {
//         this.Pdf['posKfd'] = url;
//     }
//     getposPdf = function () {
//         return this.eAppForm.Pdf.posKfd;
//     }
//     getBIPdf = function () {
//         let bIPdf = this.eAppFormService.getBIPdf();
//         return bIPdf;
//         //return eAppForm.Pdf.BenefitIllustrator;   // due to BI mismatch production issue
//     }
//     clearCalculatorSelectedData = function () {
//         this.calculaterSelectedData = '';
//         this.cvdCareSelectedData = '';
//         this.cvdCarePlusSelectedData = '';
//     }

//     getCalculatorSelectedData = function () {
//         return this.calculaterSelectedData;
//     }

//     savePaymentGatwayResponse = function (data) {
//         this.paymentGatwayResponse = '';
//         this.paymentGatwayResponse = data;
//     }
//     getPaymentGatwayResponse = function () {
//         return this.paymentGatwayResponse;
//     }
//     clearPaymentGatwayResponse = function () {
//         this.paymentGatwayResponse = '';
//     }
//     saveReloadData = function (data) {
//         this.reloadDt = '';
//         this.reloadDt = data;
//     }

//     getReloadData = function () {
//         return this.reloadDt;
//     }
//     getStatusValue = function () {
//         return this.statusValue;
//     }
//     saveStatusValue = function (data) {
//         this.statusValue = false;
//         this.statusValue = data;
//     }



//     insertPolicyTbl = function () {
//         var deferred = $q.defer();
//         var policyId = localStorage.getItem('policyId');
//         if (policyId) {
//             updatePolicyTbl();
//         } else {
//             this.insertPolicyData();
//         }
//         return deferred.promise;
//     }

//     insertPolicyData() {
//         var lcCodeForBanca = '';
//         var lgCodeForBanca = '';
//         var UrnNoForBanca = '';
//         var barnchId = '';
//         var branchName = '';
//         var lcCodeAgentName = '';
//         var cvdProductType = '';
//         var dldBranchCode = '';
//         var defenceServiceType = '';
//         var paramilitaryType = '';
//         var paramilitaryCode = '';
//         var pacs = '';
//         var isTPDGPD = '';
//         var selectedChannelType = ''
//         var unifiedCurrentLogin = '';
//         var businessType = '';
//         var upsellPolicyNumber = '';

//         var productCode = this.calculaterSelectedData.Userproduct.prCode;
//         this.Pdf['BenefitIllustrator'] = this.eAppFormService.getBIPdf();
//         if (this.calculaterSelectedData.Userproduct.UIN == '140N052V01') {
//             if (this.calculaterSelectedData.deathBenefitOption == "Level") {
//                 productCode = 'T30';
//             }
//         }
//         if (this.$rootScope.IsCVDProduct) {
//             cvdProductType = this.calculaterSelectedData.cvdProductType;
//         }
//         var bancaData = bancaService.getbancaData();
//         var employeeType = bancaService.getEmployeeType();
//         console.log('bancaData', bancaData)
//         if (bancaData) {
//             lcCodeForBanca = bancaData.LcCode;
//             lgCodeForBanca = bancaData.LgCode;
//             pacs = bancaData.pacs || ''
//             UrnNoForBanca = bancaData.URN;
//             barnchId = bancaData.branchId;
//             branchName = bancaData.branchName;
//             lcCodeAgentName = bancaData.LcName;
//             dldBranchCode = bancaData.dldBranchCode;
//             selectedChannelType = bancaData.channelType;
//         }
//         var tpdData = eAppFormService.getIfGPDorTPD();
//         console.log("tpdData::::::::::::::::::::", tpdData);
//         if (tpdData != null) {
//             isTPDGPD = tpdData;
//         }
//         var defenceData = defenceService.getdefenceData();
//         if (defenceData) {
//             defenceServiceType = defenceData.defenceService;
//             if (defenceData.paramilitaryTypeVal) {
//                 paramilitaryType = defenceData.paramilitaryTypeVal;
//                 paramilitaryCode = defenceData.paramilitaryCode;
//             }
//             console.log("defenceServiceType", defenceServiceType);
//             console.log("paramilitaryType", paramilitaryType);
//         }
//         var directSalesData = eAppFormService.getDirectSalesData();
//         if (directSalesData) {
//             businessType = directSalesData.businessType;
//             upsellPolicyNumber = directSalesData.upsellPolicyNumber || '';
//         }
//         console.log("Direct Sales Business Type" + businessType);
//         console.log("Direct sales upsell policy number" + upsellPolicyNumber);
//         if (JSON.parse(localStorage.getItem('parentChannel'))) {
//             var parentChannel = JSON.parse(localStorage.getItem('parentChannel')).channel;
//         }
//         var agentforunified = JSON.parse(localStorage.getItem('agent')).Type;
//         if (parentChannel == 'X-Sell' || parentChannel == 'UCB' || parentChannel == 'banca_assurance' || agentforunified == 'LVB' || agentforunified == 'DLB' || agentforunified == 'DHFL' || agentforunified == 'GPD' || agentforunified == 'TPD') {
//             unifiedCurrentLogin = agentforunified;
//         }

//         try {
//             console.log("calculator selected data:::::::", calculaterSelectedData);
//             if (calculaterSelectedData.Userproduct.UIN == "140N074V01") {
//                 calculaterSelectedData.UserPolicyTerm = 0;
//                 calculaterSelectedData.UserPremiumPaymentTerm = 0;
//                 calculaterSelectedData.UserApiResult.sumAssured = 0;
//             }

//             var deferred = $q.defer();
//             var query = "INSERT INTO policy (appNo,prodName,term,ppt,paymentMode,inputMode,modalPrem,receiptPrem,UIN,agentCode,sumAssured,premium,stsCode,maturityBenefit,deathBenefit,occFlatExtra,selectedPremium,selectedSumAssured,isActive,productCode,premiumPaymentModeCode,debtFund,growthFund,balanceFund,largeCapEquityFund, SystematicTransferPlan,sTPDuration,adbRider,adbRiderSumAssured,adbRiderTerm,adbRiderOccupational,serviceTax_yearOne,serviceTax_yearSecond,educationCess,totalPremiumWithOutTax,monthlyPayout,rdSmoketab,LGCode,LCCode,URN,barnchId,branchName,deathBenefit_1stYr,createdDate,LCName,bIPdf,cvdProductType,dldBranchCode,solutionId,lumSumOnMaturity,defenceServiceType,paramilitaryType,paramilitaryCode, pacs,isTPDGPD,selectedChannelType,unifiedCurrentLogin,businessType,upsellPolicyNumber,parentChannel,productCategoryType,premiumPayOption,sppPlanOption,annuityType,purchasePriceIncTax,purchasePriceExcTax,gstAndCess,annuityPayout,annuityMode,gst_yearOne,gst_yearSecond,educationCess,ocrToggle,rakshakPlanOptionSelected,rakshakPayoutFrequency) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//             sqlLiteService.exec(query, [localStorage.getItem('applicationNo'), calculaterSelectedData.Userproduct.Name, calculaterSelectedData.UserPolicyTerm, calculaterSelectedData.UserPremiumPaymentTerm, calculaterSelectedData.UserPaymentMode, calculaterSelectedData.UserInputMode, calculaterSelectedData.UserApiResult.modalPremium_fstYr, calculaterSelectedData.UserApiResult.receiptpremium, calculaterSelectedData.Userproduct.UIN, '', calculaterSelectedData.UserApiResult.sumAssured, calculaterSelectedData.UserApiResult.annualPremiumPayable || 0, 1, calculaterSelectedData.UserApiResult.MaturityBenefit, calculaterSelectedData.UserApiResult.DeathBenefit, calculaterSelectedData.UserOtherrdOccupational, calculaterSelectedData.UserPremium, calculaterSelectedData.UserbasicSumAssured, 1, productCode, calculaterSelectedData.UserPaymentModeCode, calculaterSelectedData.fundAllocation.debtFund, calculaterSelectedData.fundAllocation.GrowthFund, calculaterSelectedData.fundAllocation.BalanceFund, calculaterSelectedData.fundAllocation.LargeCapEquityFund, calculaterSelectedData.fundAllocation.STP, calculaterSelectedData.fundAllocation.STPDuration, calculaterSelectedData.adbRider.RiderSelecedtab, calculaterSelectedData.adbRider.SelectedSumAsssured, calculaterSelectedData.adbRider.term, calculaterSelectedData.adbRider.rdOccupationaltab, calculaterSelectedData.UserApiResult.serviceTax_yearOne, calculaterSelectedData.UserApiResult.serviceTax_yearSecond, calculaterSelectedData.UserApiResult.educationCess, calculaterSelectedData.UserApiResult.totalPremiumWithOutTax, calculaterSelectedData.UserApiResult.monthlyPayout, calculaterSelectedData.rdSmoketab, lgCodeForBanca, lcCodeForBanca, UrnNoForBanca, barnchId, branchName, calculaterSelectedData.UserApiResult.deathBenefit_1stYr, new Date(), lcCodeAgentName, Pdf.BenefitIllustrator || '', cvdProductType, dldBranchCode, calculaterSelectedData.SolutionId, calculaterSelectedData.lumSumOnMaturity, defenceServiceType, paramilitaryType, paramilitaryCode, pacs || '', isTPDGPD || '', selectedChannelType || '', unifiedCurrentLogin, businessType, upsellPolicyNumber, parentChannel, productCategoryType, calculaterSelectedData.premiumPayOption, calculaterSelectedData.sppPlanOption || "", calculaterSelectedData.UserApiResult.annuityType || "", calculaterSelectedData.UserApiResult.purchasePriceIncTax || "", calculaterSelectedData.UserApiResult.purchasePriceExcTax || "", calculaterSelectedData.UserApiResult.gstAndCess || "", calculaterSelectedData.UserApiResult.annuityPayout || "", calculaterSelectedData.UserApiResult.annuityMode || "", calculaterSelectedData.UserApiResult.gst_yearOne || "", calculaterSelectedData.UserApiResult.gst_yearSecond || "", calculaterSelectedData.UserApiResult.educationCess || "", 1, calculaterSelectedData.rakshakPlanOptionSelected || "", calculaterSelectedData.rakshakPayoutFrequency || ""]).then(function (res) {
//                 console.log("response--------------------------", res);
//                 getIdFromTbl().then(function (res) {
//                     console.log("resss-----");
//                     localStorage.setItem('policyId', parseInt(res));
//                     updateCustomerTbl();
//                     if (parentChannel == 'banca_assurance' || parentChannel == 'UCB') {
//                         insertBnacaAgentData();

//                     } else if (parentChannel == 'X-Sell') {
//                         insertBnacaAgentData();
//                         insertDhflDetail();
//                     }
//                     insertIntoPolicyLinkedData(calculaterSelectedData);
//                 });

//             }, function (err) {
//                 //                 console.log("error for error debugging")
//                 console.error(err);
//             });

//         } catch (Ex) {
//             console.log("error for debugging")
//         }
//         return deferred.promise;
//     }
//     insertCustomerData = function (name, dob, gender) {
//         var deferred = $q.defer();
//         genericServices.splitName(name).then(function (splitNameRes) {
//             try {
//                 var gender_value = redirectService.getRoutePath().genderSelected;
//                 console.log('print gender value', gender_value);

//                 var fName = splitNameRes.fName;
//                 var lName = splitNameRes.lName;
//                 var title = 'Mr';
//                 if (gender == 'female') {
//                     title = 'Ms';
//                 }

//                 if (gender_value != gender) {
//                     console.log('executed title update');
//                     redirectService.setGender(gender);
//                     var updateCustomerquery1 = "UPDATE customer SET title=?, fName=?,lName=?,dob=?,gender=? where id=" + localStorage.getItem('LA_ID');
//                     sqlLiteService.exec(updateCustomerquery1, [title, fName, lName, dob, gender]).then(function (res) { }, function (err) {
//                         console.log("error in update customer");
//                     });
//                 } else {
//                     console.log('no title update occured');
//                     var updateCustomerquery2 = "UPDATE customer SET fName=?,lName=?,dob=?,gender=? where id=" + localStorage.getItem('LA_ID');
//                     sqlLiteService.exec(updateCustomerquery2, [fName, lName, dob, gender]).then(function (res) { }, function (err) {
//                         console.log("error in update customer");
//                     });
//                 }

//             } catch (Ex) {
//                 console.log(Ex);
//             }

//         })
//         return deferred.promise;
//     }


//     function updateCustomerTbl() {
//     var deferred = $q.defer();
//     genericServices.splitName(calculaterSelectedData.UserName).then(function (splitNameRes) {
//         try {
//             if (localStorage.getItem('fneExits')) {
//                 var updateCustomerquery = "UPDATE customer SET policyId=? where id=" + localStorage.getItem('PROPOSER_ID');
//                 sqlLiteService.exec(updateCustomerquery, [localStorage.getItem('policyId')]).then(function (res) { }, function (err) { });
//             }
//             var gender_value = redirectService.getRoutePath().genderSelected;
//             var fName = splitNameRes.fName;
//             var lName = splitNameRes.lName;
//             var title = 'Mr';
//             if (calculaterSelectedData.UserGender == 'female') {
//                 title = 'Ms';
//             }
//             if (gender_value != calculaterSelectedData.UserGender) {
//                 var updateCustomerquery1 = "UPDATE customer SET title=?, fName=?,lName=?,dob=?,gender=?,policyId=? where id=" + localStorage.getItem('LA_ID');
//                 sqlLiteService.exec(updateCustomerquery1, [title, fName, lName, calculaterSelectedData.UserDOBDate, calculaterSelectedData.UserGender, localStorage.getItem('policyId')]).then(function (res) { }, function (err) { });
//             } else {
//                 var updateCustomerquery2 = "UPDATE customer SET  fName=?,lName=?,dob=?,gender=?,policyId=? where id=" + localStorage.getItem('LA_ID');
//                 sqlLiteService.exec(updateCustomerquery2, [fName, lName, calculaterSelectedData.UserDOBDate, calculaterSelectedData.UserGender, localStorage.getItem('policyId')]).then(function (res) { }, function (err) { });
//             }


//         } catch (Ex) { }
//     })

//     return deferred.promise;
// }

// // updates spouse details for Saral pension policy
// updateCustomerSpouseDetails = function (val) {
//     console.log(val);
//     try {
//         var deferred = $q.defer();
//         var updateSpousequery = "UPDATE customer SET maritalStatus=?,spouseName=?,spouseGender=?,spouseRelationship=?,spouseDOB=? where id=" + val.id;

//         sqlLiteService.exec(updateSpousequery, [val.maritalStatus || '', val.spouseName || '', val.spouseGender || '', val.spouseRelationship || '', val.spouseDOB || '']).then(function (res) {
//             this.getMasterStatusById('customer', 'id', val.id).then(function (res) {
//                 deferred.resolve(res[0]);
//             });
//             console.log("success in updating spouse details");
//         }, function (err) {
//             console.log("error in updating spouse details");
//         });
//     } catch (Ex) { }

//     return deferred.promise;
// }

// function updatePolicyTbl() {
//     try {
//         var paymnetCode = 01;
//         var cvdProductType = '';
//         if (calculaterSelectedData.UserPaymentMode == 'Single') { paymnetCode = 00; }
//         if (calculaterSelectedData.UserPaymentMode == 'Semi-Annual') { paymnetCode = 02; }
//         if (calculaterSelectedData.UserPaymentMode == 'Quarterly') { paymnetCode = 04; }
//         if (calculaterSelectedData.UserPaymentMode == 'Monthly') { paymnetCode = 12; }

//         // For Saral Pension Product
//         if (calculaterSelectedData.UserPaymentMode == 'Yearly') { paymnetCode = 01; }
//         if (calculaterSelectedData.UserPaymentMode == 'Half yearly') { paymnetCode = 02; }

//         var lcCodeForBanca = '';
//         var lgCodeForBanca = '';
//         var UrnNoForBanca = '';
//         var barnchId = '';
//         var branchName = '';
//         var lcCodeAgentName = '';
//         var dldBranchCode = '';
//         var pacs = ''
//         var defenceServiceType = '';
//         var paramilitaryType = '';
//         var paramilitaryCode = '';
//         var isTPDGPD = '';
//         var selectedChannelType = ''
//         var unifiedCurrentLogin = '';
//         var businessType = '';
//         var upsellPolicyNumber = '';
//         var productCode = calculaterSelectedData.Userproduct.prCode;
//         Pdf['BenefitIllustrator'] = eAppFormService.getBIPdf();

//         if (calculaterSelectedData.Userproduct.UIN == '140N052V01') {
//             if (calculaterSelectedData.deathBenefitOption == "Level") {
//                 productCode = 'T30';
//             }
//         }
//         if ($rootScope.IsCVDProduct) {
//             cvdProductType = calculaterSelectedData.cvdProductType;
//         }
//         var bancaData = bancaService.getbancaData();
//         var employeeType = bancaService.getEmployeeType();
//         if (bancaData) {
//             lcCodeForBanca = bancaData.LcCode;
//             lgCodeForBanca = bancaData.LgCode;
//             UrnNoForBanca = bancaData.URN;
//             barnchId = bancaData.branchId;
//             branchName = bancaData.branchName;
//             lcCodeAgentName = bancaData.LcName;
//             dldBranchCode = bancaData.dldBranchCode;
//             pacs = bancaData.pacs;
//             selectedChannelType = bancaData.channelType
//         }
//         var tpdData = eAppFormService.getIfGPDorTPD();
//         console.log("tpdData::::::::::::::::::::", tpdData);
//         if (tpdData != null) {
//             isTPDGPD = tpdData;
//         }

//         if (JSON.parse(localStorage.getItem('parentChannel'))) {
//             var parentChannel = JSON.parse(localStorage.getItem('parentChannel')).channel;
//         }
//         var defenceData = defenceService.getdefenceData();
//         if (defenceData) {
//             defenceServiceType = defenceData.defenceService;
//             if (defenceData.paramilitaryTypeVal) {
//                 paramilitaryType = defenceData.paramilitaryTypeVal;
//                 paramilitaryCode = defenceData.paramilitaryCode;
//             }
//             console.log("defenceServiceType", defenceServiceType);
//             console.log("paramilitaryType", paramilitaryType);
//         }
//         var directSalesData = eAppFormService.getDirectSalesData();
//         if (directSalesData) {
//             businessType = directSalesData.businessType;
//             upsellPolicyNumber = directSalesData.upsellPolicyNumber || '';
//         }
//         console.log("Direct Sales Business Type" + businessType);
//         console.log("Direct sales upsell policy number" + upsellPolicyNumber);
//         var agentforunified = JSON.parse(localStorage.getItem('agent')).Type;
//         if (parentChannel == 'X-Sell' || parentChannel == 'UCB' || parentChannel == 'banca_assurance' || agentforunified == 'LVB' || agentforunified == 'DLB' || agentforunified == 'DHFL' || agentforunified == 'GPD' || agentforunified == 'TPD') {
//             unifiedCurrentLogin = agentforunified;
//         }
//         if (calculaterSelectedData.Userproduct.UIN == "140N074V01") {
//             calculaterSelectedData.UserPolicyTerm = 0;
//             calculaterSelectedData.UserPremiumPaymentTerm = 0;
//             calculaterSelectedData.UserApiResult.sumAssured = 0;
//             calculaterSelectedData.UserApiResult.annualPremiumPayable = 0;
//         }
//         var deferred = $q.defer();
//         var updatePolicy = "UPDATE policy SET prodName=?,term=?,ppt=?,paymentMode=?,inputMode=?,modalPrem=?,receiptPrem=?,UIN=?,sumAssured=?,premium=?,maturityBenefit=?,deathBenefit=?,occFlatExtra=?,selectedPremium=?,selectedSumAssured=?,productCode=?,premiumPaymentModeCode=?,debtFund=?,growthFund=?,balanceFund=?,largeCapEquityFund=?, SystematicTransferPlan=?,sTPDuration=?,adbRider=?,adbRiderSumAssured=?,adbRiderTerm=?,adbRiderOccupational=?,serviceTax_yearOne=?,serviceTax_yearSecond=?,educationCess=?,totalPremiumWithOutTax=?,monthlyPayout=?,rdSmoketab=?,LGCode=?,LCCode=?,URN=?,barnchId=?,branchName=?,deathBenefit_1stYr=?,LCName=?,bIPdf=?,cvdProductType=?,dldBranchCode=?,solutionId=?,lumSumOnMaturity=?,defenceServiceType=?,paramilitaryType=?,pacs=?,paramilitaryCode=?,isTPDGPD=?,selectedChannelType=?,unifiedCurrentLogin=?,businessType=?,upsellPolicyNumber=?,parentChannel=?,productCategoryType=?,premiumPayOption=?,sppPlanOption=?,annuityType=?,purchasePriceIncTax=?,purchasePriceExcTax=?,gstAndCess=?,annuityPayout=?,annuityMode=?,gst_yearOne=?,gst_yearSecond=?,educationCess=?,rakshakPlanOptionSelected=?,rakshakPayoutFrequency=? where id=" + localStorage.getItem('policyId');
//         sqlLiteService.exec(updatePolicy, [calculaterSelectedData.Userproduct.Name, calculaterSelectedData.UserPolicyTerm, calculaterSelectedData.UserPremiumPaymentTerm, calculaterSelectedData.UserPaymentMode, calculaterSelectedData.UserInputMode, calculaterSelectedData.UserApiResult.modalPremium_fstYr, calculaterSelectedData.UserApiResult.receiptpremium, calculaterSelectedData.Userproduct.UIN, calculaterSelectedData.UserApiResult.sumAssured, calculaterSelectedData.UserApiResult.annualPremiumPayable, calculaterSelectedData.UserApiResult.MaturityBenefit, calculaterSelectedData.UserApiResult.DeathBenefit, calculaterSelectedData.UserOtherrdOccupational, calculaterSelectedData.UserPremium, calculaterSelectedData.UserbasicSumAssured, productCode, paymnetCode, calculaterSelectedData.fundAllocation.debtFund, calculaterSelectedData.fundAllocation.GrowthFund, calculaterSelectedData.fundAllocation.BalanceFund, calculaterSelectedData.fundAllocation.LargeCapEquityFund, calculaterSelectedData.fundAllocation.STP, calculaterSelectedData.fundAllocation.STPDuration, calculaterSelectedData.adbRider.RiderSelecedtab, calculaterSelectedData.adbRider.SelectedSumAsssured, calculaterSelectedData.adbRider.term, calculaterSelectedData.adbRider.rdOccupationaltab, calculaterSelectedData.UserApiResult.serviceTax_yearOne, calculaterSelectedData.UserApiResult.serviceTax_yearSecond, calculaterSelectedData.UserApiResult.educationCess, calculaterSelectedData.UserApiResult.totalPremiumWithOutTax, calculaterSelectedData.UserApiResult.monthlyPayout, calculaterSelectedData.rdSmoketab, lgCodeForBanca, lcCodeForBanca, UrnNoForBanca, barnchId, branchName, calculaterSelectedData.UserApiResult.deathBenefit_1stYr, lcCodeAgentName, Pdf.BenefitIllustrator || '', cvdProductType, dldBranchCode, calculaterSelectedData.SolutionId, calculaterSelectedData.lumSumOnMaturity, defenceServiceType, paramilitaryType, pacs, paramilitaryCode, isTPDGPD, selectedChannelType, unifiedCurrentLogin, businessType, upsellPolicyNumber, parentChannel, productCategoryType, calculaterSelectedData.premiumPayOption, calculaterSelectedData.sppPlanOption, calculaterSelectedData.UserApiResult.annuityType, calculaterSelectedData.UserApiResult.purchasePriceIncTax, calculaterSelectedData.UserApiResult.purchasePriceExcTax, calculaterSelectedData.UserApiResult.gstAndCess, calculaterSelectedData.UserApiResult.annuityPayout, calculaterSelectedData.UserApiResult.annuityMode, calculaterSelectedData.UserApiResult.gst_yearOne, calculaterSelectedData.UserApiResult.gst_yearSecond, calculaterSelectedData.UserApiResult.educationCess, calculaterSelectedData.rakshakPlanOptionSelected, calculaterSelectedData.rakshakPayoutFrequency]).then(function (res) {
//             updateCustomerTbl();
//             if (parentChannel == 'banca_assurance' || parentChannel == 'UCB') {
//                 updateBnacaAgentData();

//             } else if (parentChannel == 'X-Sell') {
//                 updateBnacaAgentData();
//                 updateDhflDetail();
//             }
//             updatePolicyLinkedData(calculaterSelectedData)

//         }, function (err) {
//             console.error(err);
//         });
//     } catch (Ex) { }

//     return deferred.promise;
// }

// conditionalUpdatePolicy(updatedField, updateVal, whereVal) {
//     try {
//         var deferred = $q.defer();
//         var updatePolicy = "UPDATE policy SET " + updatedField + "=? where id=" + whereVal;
//         sqlLiteService.exec(updatePolicy, [updateVal]).then(function (res) {
//             deferred.resolve();
//         }, function (err) {
//             console.error(err);
//             deferred.reject();
//         });
//     } catch (Ex) { }

//     return deferred.promise;
// }


// // conditionalUpdatePolicy = function (updatedField, updateVal, whereVal) {
// //     try {
// //         var deferred = $q.defer();
// //         var updatePolicy = "UPDATE policy SET " + updatedField + "=? where id=" + whereVal;
// //         sqlLiteService.exec(updatePolicy, [updateVal]).then(function (res) {

// //             try {
// //                 var selectQuery = "SELECT * FROM policy ";
// //                 console.log("selectQuery::::::::::::::", selectQuery);

// //                 sqlLiteService.exec(selectQuery, []).then(function (resp) {
// //                     console.log("getting all polucy data::::::::::", resp);

// //                     //    for (var i = 0; i < res.rows.length; i++) {
// //                     //        arr.push(res.rows.item(i));
// //                     //    }
// //                     //    deferred.resolve(arr);
// //                     deferred.resolve();

// //                 }, function (err) {
// //                     console.error(err);
// //                 });
// //             } catch (Ex) { }


// //             // deferred.resolve();
// //         }, function (err) {
// //             console.error(err);
// //             deferred.reject();
// //         });
// //     } catch (Ex) { }



// //     return deferred.promise;
// // }

// function getIdFromTbl(tableName) {
//     try {
//         var deferred = $q.defer();
//         var selectQuery = "SELECT ROWID from policy order by ROWID DESC limit 1";
//         sqlLiteService.exec(selectQuery, []).then(function (res) {
//             deferred.resolve(res.rows.item(0).id);
//         }, function (err) {
//             console.error(err);
//         });

//     } catch (e) { }
//     return deferred.promise;
// }

// insertDefaultPolicyData = function (id) {
//     try {
//         var deferred = $q.defer();
//         var query = "INSERT INTO policy (id,appNo,prodName,term,ppt,paymentMode,inputMode,modalPrem,receiptPrem,UIN,agentCode,sumAssured,premium,stsCode,maturityBenefit,deathBenefit,occFlatExtra,selectedPremium,selectedSumAssured,isActive,productCode,premiumPaymentModeCode,debtFund,growthFund,balanceFund,largeCapEquityFund, SystematicTransferPlan,sTPDuration,adbRider,adbRiderSumAssured,adbRiderTerm,adbRiderOccupational,serviceTax_yearOne,serviceTax_yearSecond,educationCess,totalPremiumWithOutTax,monthlyPayout,'productCategoryType') VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//         sqlLiteService.exec(query, [id, '', '', '', '', '', '', '', '', '', '', '', '', 0, '', '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']).then(function (res) {

//         }, function (err) {
//             console.error(err);
//         });

//     } catch (Ex) {

//     }
//     return deferred.promise;
// }


// function insertBnacaAgentData() {
//     try {
//         var result = JSON.parse(localStorage.getItem('bancaAgentData'));
//         var data = result[0];
//         var deferred = $q.defer();
//         var query = "INSERT INTO bancaAgentDtl (policyId,appNo,agentCode,agentName,agentStatus,agentType,branchCode,branchName,channelCode,collectionBank,collectionCenter,channelType,clientCode,dob,dpliManager,lob,mobile,zone) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//         sqlLiteService.exec(query, [localStorage.getItem('policyId'), localStorage.getItem('applicationNo'), data.AGENT_CODE, data.AGENT_NAME, data.AGENT_STATUS, data.AGENT_TYPE, data.BRANCH_CODE, data.BRANCH_NAME, data.CHANNEL_CODE, data.COLLECTION_BANK, data.COLLECTION_CENTRE, data['Channel Type'], data['Client Code'], data.DATE_OF_BIRTH, data['DPLI Manager'], data.LOB, data['Mobile No'], data.ZONE]).then(function (res) {

//         }, function (err) {
//             console.error(err);
//         });

//     } catch (Ex) {

//     }
//     return deferred.promise;
// }

// function updateBnacaAgentData() {
//     try {
//         var result = JSON.parse(localStorage.getItem('bancaAgentData'));
//         var data = result[0];
//         if (!data) {
//             data = result;
//         }
//         var deferred = $q.defer();
//         var updateQuery = "UPDATE bancaAgentDtl SET agentCode=?,agentName=?,agentStatus=?,agentType=?,branchCode=?,branchName=?,channelCode=?,collectionBank=?,collectionCenter=?,channelType=?,clientCode=?,dob=?,dpliManager=?,lob=?,mobile=?,zone=? where appNo='" + localStorage.getItem('applicationNo') + "'"
//         sqlLiteService.exec(updateQuery, [data.AGENT_CODE, data.AGENT_NAME, data.AGENT_STATUS, data.AGENT_TYPE, data.BRANCH_CODE, data.BRANCH_NAME, data.CHANNEL_CODE, data.COLLECTION_BANK, data.COLLECTION_CENTRE, data['Channel Type'], data['Client Code'], data.DATE_OF_BIRTH, data['DPLI Manager'], data.LOB, data['Mobile No'], data.ZONE]).then(function (res) {
//             console.log(res);
//         }, function (err) {
//             console.error(err);
//         });
//     } catch (Ex) { }

//     return deferred.promise;
// }

// function insertDhflDetail() {
//     try {
//         var deferred = $q.defer();
//         var campaignCodeData = bancaService.getcampaignCodeData();
//         var bancaData = bancaService.getbancaData();
//         var query = "INSERT INTO dhflDtl (policyId,partnerCode,partnerName, campaignCode1,campaignCode2,campaignCode3,campaignCode4, loanAccountNo, customerSegmentCode, customerSegmentName) VALUES (?,?,?,?,?,?,?,?,?,?)";

//         sqlLiteService.exec(query, [localStorage.getItem('policyId'), bancaData.partnerCode, bancaData.partnerName, campaignCodeData.type1, campaignCodeData.type2, campaignCodeData.type3, campaignCodeData.type4, campaignCodeData.loanAccountNo, campaignCodeData.customerSegmentCode, campaignCodeData.customerSegmentName]).then(function (res) {

//         }, function (err) {
//             console.error(err);
//         });

//     } catch (Ex) {

//     }
//     return deferred.promise;
// }

// function updateDhflDetail() {
//     try {
//         var deferred = $q.defer();
//         var campaignCodeData = bancaService.getcampaignCodeData();
//         var bancaData = bancaService.getbancaData();
//         var query = "UPDATE dhflDtl SET partnerCode=?,partnerName=?,campaignCode1=?,campaignCode2=?,campaignCode3=?,campaignCode4=?, loanAccountNo=?, customerSegmentCode=?, customerSegmentName=? WHERE policyId=?";
//         sqlLiteService.exec(query, [bancaData.partnerCode, bancaData.partnerName, campaignCodeData.type1, campaignCodeData.type2, campaignCodeData.type3, campaignCodeData.type4, campaignCodeData.loanAccountNo, campaignCodeData.customerSegmentCode, campaignCodeData.customerSegmentName, localStorage.getItem('policyId')]).then(function (res) { }, function (err) {
//             console.error(err);
//         });

//     } catch (Ex) {

//     }
//     return deferred.promise;
// }


// function insertIntoPolicyLinkedData(policyData) {
//     try {
//         var deferred = $q.defer();
//         var query = "INSERT INTO policyLinkedData (policyId,isSumAssuredIncrease,sumAssuredIncreaseBy,portFolioStrategy,wealthEnhancerPlanType,multiCapEquityFund) VALUES (?,?,?,?,?,?)";
//         sqlLiteService.exec(query, [localStorage.getItem('policyId'), policyData.weathMaximiser.sumAssuredIncrease, policyData.weathMaximiser.sumAssuredIncreaseBy, policyData.weathMaximiser.lifeStagePortfolio, policyData.weathMaximiser.wealthEnhancerPlanType, policyData.fundAllocation.MultiCapEquityFund]).then(function (res) { }, function (err) {
//             console.error(err);
//         });

//     } catch (Ex) {

//     }
//     return deferred.promise;
// }

// function updatePolicyLinkedData(policyData) {
//     try {
//         var deferred = $q.defer();
//         var query = "UPDATE policyLinkedData SET isSumAssuredIncrease=?,sumAssuredIncreaseBy=?,portFolioStrategy=?,wealthEnhancerPlanType=?,multiCapEquityFund=? WHERE policyId=?";
//         sqlLiteService.exec(query, [policyData.weathMaximiser.sumAssuredIncrease, policyData.weathMaximiser.sumAssuredIncreaseBy, policyData.weathMaximiser.lifeStagePortfolio, policyData.weathMaximiser.wealthEnhancerPlanType, policyData.fundAllocation.MultiCapEquityFund, localStorage.getItem('policyId')]).then(function (res) { }, function (err) {
//             console.error(err);
//         });

//     } catch (Ex) {

//     }
//     return deferred.promise;
// }

// saveCvdCareData = function (data) {
//     cvdCareSelectedData = '';
//     cvdCareSelectedData = data;
// }

// getcvdCareSelectedData = function () {
//     return cvdCareSelectedData;
// }

// saveCvdCarePlusData = function (data) {
//     cvdCarePlusSelectedData = '';
//     cvdCarePlusSelectedData = data;
// }

// getcvdCarePlusSelectedData = function () {
//     return cvdCarePlusSelectedData;
// }
// }