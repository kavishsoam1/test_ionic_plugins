import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SQLite } from "@awesome-cordova-plugins/sqlite/ngx";

@Injectable({
    providedIn : 'root'
})

export class sqlLiteService {

    dbName : any = 'ace_app.db';
    location : any = 'default';

    constructor(
        private cordovaSQLite : SQLite,
        private http : HttpClient ) {
        try {
            var db = this.cordovaSQLite.create({
                name: this.dbName,
                location: 'default'
            });
            this.setDatabase(db);
        } catch (e) { }
        try {
            this.initTables();
            this.initData();
        } catch (e) { }
    }

    db : any = null;
    // self : any = this;
    promise : any = [];

    setDatabase(dbInstance) {
        this.db = dbInstance;
    };

    bulkInsert = function (mockfileUrl, tablename, columns) {
        try {
            this.http.get(mockfileUrl).then(function (res) {
                var data = res.data;
                var query = "INSERT INTO " + tablename + " (" + columns.join(',') + ") VALUES (";
                query = query + data.map(function (item) {
                    if (Array.isArray(item)) {
                        return JSON.stringify(item).replace("[", "").replace("]", "");
                    } else {
                        return JSON.stringify(item);
                    }
                }).join('),(');
                query = query + ')';
                promise.push(this.exec(query, []));
            }, function (err) {
                console.log(err);
            });
        } catch (e) {

        }
    }

    exec(query, params?) {
        try {

            return this.cordovaSQLite.execute(this.db, query, params);
        } catch (e) {

            var deferred = $q.defer();
            if (e.message == 'Cannot read property \'transaction\' of null' || e.message == "db is null") {

                $http.post('http://localhost:3000/exec', {
                    query: query,
                    params: params
                }).then(function (res) {
                    deferred.resolve({
                        rows: {
                            length: res.data.rows ? res.data.rows.length : 0,
                            item: function (index) {
                                return res.data.rows[index]
                            }
                        },
                        insertId: res.data.insertId
                    })
                });
            } else {
                setTimeout(function () {
                    deferred.reject('Database error --> Sqlite not supported');
                }, 0);
            }
            return deferred.promise;
        }
    };

    dropTables = function () {
        var dropTablArr = ['productCategory', 'nominee', 'lifestyleDetails', 'healthDetails', 'FNE', 'categoryProduct', 'product',
            'category', 'productType', 'productFeatures', 'customer', 'address', 'commPreference', 'education', 'prevPolicy',
            'healthDetail', 'familyDetail', 'policy', 'bankDetail', 'paymentDetail', 'onlineTransaction', 'maritalStatusMaster',
            'eduMaster', 'qualificationMaster', 'occupationMaster', 'nationalityMaster', 'ageProofMaster', 'orgMaster', 'identityProofMaster',
            'addressProofMaster', 'stpRules', 'incomeProofMaster', 'stateMaster', 'cityMaster', 'nomineeRelationMaster', 'familyRelationMaster', 'pincodeMaster', 'photoIdProofMaster', 'causeOfDeath', 'payerRelationMaster', 'proposerRelationMaster', 'appointeeRelationMaster', 'basePlanDecisionMaster', 'agentLogin'
        ];

        for (var i = 0; i < dropTablArr.length; i++) {
            var queryDrop = "DROP TABLE IF EXISTS " + dropTablArr[i];
            this.exec(queryDrop).then(function (res) {
                console.log("successfully dropped all tables");
            }, function (err) {
                console.error(err);
            });
        }
    }

    createTables() {
        var promises = [];

        promises.push(this.exec("PRAGMA foreign_keys=ON;"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS agentLogin (id integer primary key AUTOINCREMENT, mobile number,pin number,agentCode number,agentChannel text,dob text,agentName text,empCode text,agentType text,clientCode text,agentBranch text,agentStatus text,communicationCity text,communicationPin text,communicationState text, communicationAddress text,dpliManager text,email text,licenseExpiryDate text,licenseNo text,licenseStartDate text,permanentAddress text,permanentCity text,permanentPinCode text ,permanentState text,region text,unitHeadName text,imageUrl text,CHANNEL_CODE text,LOB text,BRANCH_CODE text,ZONE text,COLLECTION_BANK text,COLLECTION_CENTRE text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS users (id integer primary key, empId text, empPswd text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS FNE (id integer PRIMARY KEY , aadhaarNo number,dob text,age integer,name text,phNo number,gender text,childAge text,priorities text,pOther text,annInc number,remYr integer,monPrem number,selProdId text,selProdGuid text,img text)"));
        //promises.push(this.exec("CREATE TABLE IF NOT EXISTS product (id integer PRIMARY KEY,name text,desc text, url text,productGuid text NOT NULL  UNIQUE)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS category (id integer PRIMARY KEY, desc text,img text,priority integer, categoryGuid text NOT NULL  UNIQUE)"));

        /*Fne Tables*/
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS categoryProduct (id integer PRIMARY KEY,productGuid text , categoryGuid text ,priority integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS FNETABLE(id integer PRIMARY KEY AUTOINCREMENT NOT NULL,bDay text,gender text,title text,imageUrl text ,isLifeandProposerSame integer ,mobile text,name text , familyMembers text ,gapBlock integer,gapIncOld text ,gapIncmin integer ,gapIncmax integer ,gapIncomeInput text,annualInc text,jobyears integer ,priority text,productid text,productname text,producturl text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS fneFamilyTable(id integer PRIMARY KEY AUTOINCREMENT NOT NUll,name text,age integer,gender text,formName text,Fneid integer)"));

        //User Credentials Table
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS userCred(id integer PRIMARY KEY AUTOINCREMENT,agentName text,agentCode text,agentStatus text,agentType text,branchName text,channelType text,clientCode text,communicationCity text,communicationPin text,communicationState text, communicationAddress text, dob text, dpliManager text,email text,empId text,licenseExpiryDate text,licenseNo text,licenseStartDate text,mobileNo text,permanentAddress text,permanentCity text,permanentPinCode text ,permanentState text,region text,unitHeadName text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS userData (id integer PRIMARY KEY AUTOINCREMENT,empId text, empPswd text,empDOB text)"));
        //promises.push(this.exec("CREATE TABLE IF NOT EXISTS productFeatures (id integer PRIMARY KEY,featureName text,productGuid text NOT NULL)"));

        // e-application form tables
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS customer (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,type integer NOT NULL,title text NOT NULL,fName text NOT NULL,mName text,lName text NOT NULL,fatherName text,motherName text,ageProof text,dob text NOT NULL,gender text NOT NULL,maritalStatus integer,nationality text,residentialStatus text,age integer,mobile text,email text,landline text,relationLA text,UID text,pan text,aadhaar text,prevPolAssu text,policyId integer,isLifeandProposerSame integer,isPermAndCommAddrSame integer,isFamilyActive integer,isOtherPolicyActive integer,isCustomerNotHealthy integer,imageUrl text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS address (customerId integer NOT NULL,addrType text NOT NULL,addr1 text,addr2 text,landmark text,city text,state text,country text,addrProof text,pincode number,stdCode number,sameAsLA integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS commPreference (customerId integer PRIMARY KEY NOT NULL,email text,sms text,language text,day text,fromTime number,toTime number)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS education (customerId integer PRIMARY KEY NOT NULL,education integer,qualification integer,occupation integer,subOccu text,orgType text,nameOfOrg text,desgn text,experience integer,annInc number,incProof text,idenProof text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS prevPolicy (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,customerId integer NOT NULL,issueCompany text,basicSA number,basePlanDec text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS familyDetail (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,customerId integer NOT NULL,relationWithLA text,age integer,healthStatus text,cause text,ageAtDeath integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS policy (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,appNo text NOT NULL,prodName text NOT NULL,term number NOT NULL,ppt number NOT NULL,paymentMode text NOT NULL,inputMode text NOT NULL,modalPrem number,receiptPrem number,UIN text NOT NULL,agentCode text ,sumAssured number NOT NULL,premium number NOT NULL,stsCode number,taxAmt number,discAmt number,date text,maturityBenefit number,deathBenefit number,occFlatExtra integer,selectedPremium number,selectedSumAssured number,productCode text,isActive integer,premiumPaymentModeCode text,proposalSubmitDate text,debtFund number,growthFund number,balanceFund number,largeCapEquityFund number, SystematicTransferPlan integer,sTPDuration number,adbRider integer,adbRiderSumAssured number,adbRiderTerm number,adbRiderOccupational integer,serviceTax_yearOne number,serviceTax_yearSecond number,educationCess number,totalPremiumWithOutTax number,monthlyPayout number ,agentRelated integer,agentRelationDetail text,reviewAcceptance integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS bankDetail (policyId text NOT NULL,payerName text,relWithProposer text,accHolderName text,accNo text,accType text,micrCode text,bankName text,bankBranchName text,ifscCode text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS onlineTransaction (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId text,appNo text NOT NULL,referenceNo text,date text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS lifestyleDetails (customerId PRIMARY KEY NOT NULL,height integer,weight integer,tobacco integer,alcohol integer,narcotics integer,alcohol_perDay text,alcohol_perWeek text,tobaccoDayQuan text,tobaccoNoYear text,NarcoticsDetails text,NarcoticsQuantity number,NarcoticsNoOfYears number)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS healthDetails (customerId integer NOT NULL,questionId text,answer integer,docName text,natureOfDisease text,dateOfDiagnosis text,recoveryStatus integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS nominee (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId integer NOT NULL,name text,dob text,contact number,relationLA text,appointee_nomineeId integer,sharePercentage integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS paymentDetail (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId text NOT NULL,ddNo text,dateOfIssue text,bankName text,bankBranch text,paymentMode text,amount number,isProposalPayment integer,receiptNo text,Name text,relation text,panNo text,applicationNo text,status integer,chequeType text,paymentSameAsRemittance integer,ifscCode text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS applicationState (policyId integer NOT NULL,state text NOT NULL)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS FATCA (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId integer NOT NULL,spouseName text,isUsPerson integer,isBirthCounIndia integer,birthCountry text,place text,isChecked integer,otherCountryTaxResident integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS FATCATaxResidencyDtl (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId integer NOT NULL,country text,idenNo text,idenType text,reason text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS IR(id integer PRIMARY KEY AUTOINCREMENT NOT NULL ,policyId text NOT NULL,elecPolicy text,IrAcc text,plan text,irAccNum text,irName text,email text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS supportedDocument(id integer PRIMARY KEY AUTOINCREMENT NOT NULL ,policyId text NOT NULL,typeOfProof text,proofURL text,nameOfProof text,idenNo text,expiryDate text,gridFsId text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS syncStatus (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,desc text NOT NULL)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS disclaimer (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId integer NOT NULL,country text,armyEmployed integer,convHistoryDtl text,dangerActDtl text,dangerousActivity integer,durationOfTravel text,historyOfConviction integer,intendToTravel integer,lastExamCateg text,lastExamDate text,name text,occuDtl text,occupation integer,politicallyExposed integer,positionPEP text,purposeOfTravel text,rank text,dept text,relationship text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS femaleDetails (customerId integer NOT NULL,questionId text,answer text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS pageStatus(id integer PRIMARY KEY AUTOINCREMENT NOT NULL ,page text,valid text,visited text,policyId integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS settings(id integer PRIMARY KEY AUTOINCREMENT NOT NULL ,prevVersion integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS paymentLinkDetails(id integer PRIMARY KEY AUTOINCREMENT NOT NULL ,policyId text NOT NULL,name text,mobile number,email text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS healthQuesMaster (id text NOT NULL,text text NOT NULL)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS countryMaster(code integer NOT NULL,name text NOT NULL UNIQUE)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS bancaAgentDetail (id integer primary key AUTOINCREMENT,policyId text,appNo text,agentCODE number,agentNAME text,agentSTATUS text,agentTYPE text,branchCODE text,branchNAME text,channelCODE text,collectionBANK text,collectionCENTRE text,channelType text,clientCode text,CommunicationCity text,CommunicationPin text,CommunicationState text,CommunicationAddress text,dob text,designationCode text,designationName text,dpliManager text,email text,employeeId text,licenseExpityDate text,licenseNumber text,licenseStartDate text,lob number,mobile number,permanentAddress text,permanentCity text,permanentPinCode text,permanentState text,region text,sellable text,UnitHeadName text,zone text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS bancaAgentDtl (id integer primary key AUTOINCREMENT,policyId text,appNo text,agentCode number,agentName text,agentStatus text,agentType text,branchCode text,branchName text,channelCode text,collectionBank text,collectionCenter text,channelType text,clientCode text,dob text,dpliManager text,lob number,mobile numbe,zone text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS dhflDtl (id integer primary key AUTOINCREMENT, policyId text, partnerCode text, partnerName text,campaignCode1 text, campaignCode2 text, campaignCode3 text, campaignCode4 text, loanAccountNo text, customerSegmentCode text, customerSegmentName text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS pioneerData (id integer primary key AUTOINCREMENT NOT NULL,gender text,title text,loanType text,name text,mob text,dob text,mrta text,loanselect text,mrtaselect text,loanamount text,interest text,tenure text,emi text,liability text,principal text,mrtaLoan text,mrtaMonthOffSet text,mrtaOffSetPaid text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS cvdLfExtrData (id integer primary key AUTOINCREMENT NOT NULL,customerId integer,itemKey text,typeOfProduct text,itemText text,dayQuantity number,noOfYears number,isAddicted integer,perWeek number)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS cvdDeclinedPolicy (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,customerId integer NOT NULL,issueCompany text,basePlanReasons text,basePlanDec text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS cvdHealthQuestion(id integer primary key AUTOINCREMENT NOT NULL,customerId integer,questionId text,answer integer,textAnswer text,mainQuestionId text,requireDetail integer,genderRestricted text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS cvdPolicyStatus(id integer primary key AUTOINCREMENT NOT NULL,customerId integer,policyStatus integer,rejectedAt text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS cvdPolicyExtraData(id integer primary key AUTOINCREMENT NOT NULL,customerId integer,extraData text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS cvdCardiacPolicy(id integer primary key AUTOINCREMENT NOT NULL,customerId integer,issueCompany text,basicSA text,basePlanDec text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS pendingProposalsData(id integer primary key AUTOINCREMENT NOT NULL,appNo text,laName text,dateCreated text,agentCode text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS dataLogger(id integer primary key AUTOINCREMENT NOT NULL,agentCode text,appNo text,stateName text,stateEnterTime text,stateExitTime text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS agentDetailStatus(id integer primary key AUTOINCREMENT NOT NULL,agentCode text,startDate integer,endDate integer,flag integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS wealthQuestion(id integer primary key AUTOINCREMENT NOT NULL,policyId integer NOT NULL,questionId text,answer integer,doctorName text,mainQuestionId text,requireDetail integer,genderRestricted text,natureOfDisease text,dateOfDiagnosis text,recoveryStatus text,address text,textAnswer text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS wealthFemaleQuestion(id integer primary key AUTOINCREMENT NOT NULL,policyId integer NOT NULL,questionId text,answer integer,mainQuestionId text,requireDetail integer,textAnswer text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS wealthDrugQuestion (id integer primary key AUTOINCREMENT NOT NULL,policyId integer,itemKey text,typeOfProduct text,itemText text,dayQuantity number,noOfYears number,isAddicted integer,perWeek number)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS policyLinkedData (id integer primary key AUTOINCREMENT NOT NULL,policyId integer,isSumAssuredIncrease integer,sumAssuredIncreaseBy text,portFolioStrategy integer )"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS wealthMaxInActivePolicy (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,customerId integer NOT NULL,issueCompany text,basePlanReasons text,basePlanDec text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS genericQuestion(id integer primary key AUTOINCREMENT NOT NULL,policyId integer NOT NULL,questionId text,otherQuesId text,answer integer,doctorName text,mainQuestionId text,requireDetail integer,genderRestricted text,natureOfDisease text,dateOfDiagnosis text,recoveryStatus text,address text,textAnswer text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS genericFemaleQuestion(id integer primary key AUTOINCREMENT NOT NULL,policyId integer NOT NULL,questionId text,otherQuesId text,answer integer,mainQuestionId text,requireDetail integer,textAnswer text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS wealthPolicyExtraData(id integer primary key AUTOINCREMENT NOT NULL,customerId integer,extraData text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS stpRules(id integer primary key AUTOINCREMENT NOT NULL,customerId integer,stpObj text)"));

        promises.push(this.exec("CREATE TABLE IF NOT EXISTS FATCAproposer (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId integer NOT NULL,isUsPersonProposer integer,isBirthCounIndiaProposer integer,birthCountryProposer text,placeProposer text,isChecked integer,otherCountryTaxResidentProposer integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS FATCATaxResidencyDtlProposer (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId integer NOT NULL,country text,idenNo text,idenType text,reason text)"));
        // , fromdurationOfStay1 text,isGoodheaalth text
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS commonProposalForm (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId text, appNo text,visited integer, Nameofthecountry text,ToDurationOfStay text,FromDurationOfStay text,returnDatetoIndia text, screenedattheairport text,coronavirus text, diagnosis text,symptoms text, ifPlan integer,NameOfThecountryPlan text,todurationOfStayPlan text,fromdurationOfStayPlan text,isGoodheaalth text,disclosedAllMaterial integer,BIshown integer, fraudRepresentation integer, premiumConditions integer, isExtraYes integer, submissionOfNonStandered integer, OccHazard integer, submittedByTheCustomer integer, personallySeen integer,lifeStage text, totalMonthlyIncome text, totalMonthlyExpense text, totalSurplus text, totalLifeCover text, personalGoals text, timeHorizon text, ppt text, returnOnSaving text, ppt65Years integer, customerAnnualIncome integer, suitabilityChecklistMatrix integer, reason text, LifeStagereason text, symptomsInDays integer, covidsymptoms text, symptomExplained text, digitalVerificationToggle integer, sendEmailCount integer,Checkbox integer,isOTPverifed integer, isScreenDisabled integer, isMailSendOrnot integer, coronavirusLocation text, coronavirusDate text, showPdfOtpAuth integer, pdfOtp text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS enachRegistrationForm (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId text, appNo text,verifyBy integer, authenticationMode text,otherBankToggle integer,otherBankDetail_accountNumber text,otherBankDetail_ifscCode text, otherBankDetail_bankName text,otherBankDetail_bankBranch text,otherBankDetail_accountType text,enachToggle number,paymentBankDetail_accountNumber text,paymentBankDetail_accountType text,MdtID number,eMandateURL text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS posDocumentDetail(id integer PRIMARY KEY AUTOINCREMENT NOT NULL ,appNo integer,docName text,docUrl text,posKfdGridfsId text)"));

        //adding one more table for agentCategory
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS agentCategoryType (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,applicationNo text,agentCategory text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS directSales (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,applicationNo text,businessType text, upsellPolicyNumber text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS resumeDigitalLogs(id integer primary key AUTOINCREMENT NOT NULL,agentCode text,appNo text,resumeApplicationLog text,digitalApplicationLog text,logCreationDate text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS whatsappconsent (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,policyId text,wtConsent integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS ageIncomeMapping (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,age integer,income integer)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS genericLogger(id integer primary key AUTOINCREMENT NOT NULL,agentCode text,logType text,logText text,logCreationDate text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS notifications (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,title text,status text,staticNotification text,customMessage text, channel text)"));
        promises.push(this.exec("CREATE TABLE IF NOT EXISTS notificationsToShow (id integer PRIMARY KEY AUTOINCREMENT NOT NULL,title text,customMessage text, isSeen integer)"));
        $q.all(promises).then(function (res) {
            this.checkDefaultInsertion().then(function (res) {
                this.alterTables().then(function (res) {
                    //alert(res);
                    try {
                        console.log("New DB version now:", res);
                        //   alert('update called');
                        var query = "UPDATE settings SET prevVersion=? where id=1";
                        this.exec(query, [res]).then(function (callRes) {
                            console.log(query, callRes);
                         }, function (err) {
                            console.error(err);
                        });

                    } catch (Ex) {
                        console.log(Ex);
                    }
                }).catch(function (err) {
                    console.error("Alter table error");
                    console.error(err);
                });
            });
        });
    }

    //this function checks whether data synced or not inside tables, if no data is present it will insert data into sqlite db
    checkDefaultInsertion() {
        var deferred = $q.defer();
        var query = "SELECT * FROM settings";
        this.exec(query).then(function (res) {
            if (res.rows.length < 1) {
                $(".blockOverlay").css("display", "block");
                this.insertData().then(function () {
                    deferred.resolve('success');
                });
            } else {
                deferred.resolve('success');
            }
        }, function (err) {
            console.log(err);
        });
        return deferred.promise;
    }

    insertData() {

        var query1 = "INSERT INTO category (id ,desc,img,priority,categoryGuid  ) VALUES (?,?,?,?,?)";
        promise.push(this.exec(query1, ["1", "Protection for Family", "img/fne/categoryIcons/priority_1_icon.svg", 1, "CG1"]));
        promise.push(this.exec(query1, ["2", "Kid's Education", "img/fne/categoryIcons/priority_2_icon.svg", 2, "CG2"]));
        promise.push(this.exec(query1, ["3", "Wealth Creation", "img/fne/categoryIcons/priority_3_icon.svg", 3, "CG3"]));
        promise.push(this.exec(query1, ["4", "Savings for Retirement", "img/fne/categoryIcons/priority_4_icon.svg", 4, "CG4"]));

        var syncStatus = "INSERT INTO syncStatus (desc) VALUES (?)";
        promise.push(this.exec(syncStatus, ["Pending"]));
        promise.push(this.exec(syncStatus, ["Syncing"]));
        promise.push(this.exec(syncStatus, ["Synced"]));
        promise.push(this.exec(syncStatus, ["Completed"]));
        promise.push(this.exec(syncStatus, ["Deleted"]));

        var dbVersionQuery = "INSERT INTO settings (prevVersion) VALUES (?)";
        promise.push(this.exec(dbVersionQuery, [0]));

        var healthQuesMasterData = {
            mockfileUrl: 'mocks/healthQues.master.json',
            tableName: 'healthQuesMaster',
            columns: ['id', 'text']
        }

        this.bulkInsert(healthQuesMasterData.mockfileUrl, healthQuesMasterData.tableName, healthQuesMasterData.columns);

        // var productMasterData = {
        //     mockfileUrl: 'mocks/product.master.json',
        //     tableName: 'product',
        //     columns: ['id', 'name', 'desc', 'url', 'productGuid']
        // }

        // self.bulkInsert(productMasterData.mockfileUrl, productMasterData.tableName, productMasterData.columns);

        // var productFeaturesMasterData = {
        //     mockfileUrl: 'mocks/productFeatures.master.json',
        //     tableName: 'productFeatures',
        //     columns: ['id', 'featureName', 'productGuid']
        // }

        // self.bulkInsert(productFeaturesMasterData.mockfileUrl, productFeaturesMasterData.tableName, productFeaturesMasterData.columns);

        var categoryProductMasterData = {
            mockfileUrl: 'mocks/categoryProduct.master.json',
            tableName: 'categoryProduct',
            columns: ['id', 'productGuid', 'categoryGuid', 'priority']
        }

        this.bulkInsert(categoryProductMasterData.mockfileUrl, categoryProductMasterData.tableName, categoryProductMasterData.columns);

        var countryMasterData = {
            mockfileUrl: 'mocks/country.data.json',
            tableName: 'countryMaster',
            columns: ['code', 'name']
        }

        this.bulkInsert(countryMasterData.mockfileUrl, countryMasterData.tableName, countryMasterData.columns);

        var branchData = {
            mockfileUrl: 'mocks/branchList.master.json',
            tableName: 'branch',
            columns: ['id', 'branch']
        }

        this.bulkInsert(branchData.mockfileUrl, branchData.tableName, branchData.columns);

        var branchLcCodeData = {
            mockfileUrl: 'mocks/lcCode.master.json',
            tableName: 'branchLcCode',
            columns: ['branchId', 'lcCode']
        }

        this.bulkInsert(branchLcCodeData.mockfileUrl, branchLcCodeData.tableName, branchLcCodeData.columns);

        //insertIntoLcCode();

        return $q.all(promise).then(function (res) {
            console.log(res);
            $(".blockOverlay").css("display", "none");
        });



    }

    alterTables() {
        var deferred = $q.defer();
        var patches = this.patchVersion.version;
        var currentDbVersion = Object.keys(patches).length;
        var totalDbVersion = currentDbVersion
        console.log("New Patches Count:", totalDbVersion);
        try {


            var query = "SELECT prevVersion FROM settings where id=1";
            this.exec(query).then(function (res) {
                if (res.rows.item(0)) {

                    var prevDbVersion = res.rows.item(0).prevVersion || 0;
                    //  alert(prevDbVersion);
                    console.log("Old Patches Count:", prevDbVersion);
                    var allPatches = [];
                    for (var i = prevDbVersion + 1; i <= currentDbVersion; i++) {
                        var currentPatch = patches[i];

                        for (var j = 0; j < currentPatch.length; j++) {
                            allPatches.push(currentPatch[j]);
                        }
                    }
                    console.log("Sending to apply:", allPatches);

                    this.applyAllPatches(allPatches).then(function (afterPatch) {
                        console.log("After Patch:", afterPatch); //undefined
                        deferred.resolve(totalDbVersion);
                    }).catch(function (err) {
                        console.error(err);
                        deferred.reject(err);
                    });

                }
            }, function (err) {
                console.error(err);
                deferred.reject(err);
            });

        } catch (ex) {
            console.error("alter table catch::::::::::::", ex);
            deferred.reject(ex);
        }
        return deferred.promise;
    }

    applyAllPatches(patches) {

        //alert('patches length: ' + patches.length);
        console.log("Applying these patches:", patches);

        var chain = $q.when();
        patches.forEach(function (patch) {
            //alert(patch);

            chain = chain.then(function () {
                // return self.exec(patch);
                return this.exec(patch).then(function (patchRes) {
                    console.log("Patch Applied:", patch);
                    console.log(patchRes)
                }).catch(function(patchErr){
                    console.error("Error in applying the patch:", patch, ". Fix your code (dbPatches.js) or remove that patch before sending in PRODUCTION!");
                    console.error(patchErr)
                });
            });
        });e
        return chain;
    }

    initTables() {
        //self.dropTables();
        this.createTables();

    };

    initData = function () {

    }

    insertIntoLcCode() {
        $http.get('../mocks/lcCode.data.json').
            success(function (res) {
                this.insertLcCode(res.lcCodes);
            }).
            error(function (err) {
                //console.log('error while fetchinf data');
                console.log(err);
            });
    };

    insertLcCode(data) {
        try {
            var deferred = $q.defer();
            var query = "INSERT INTO lcCode (id ,branch, lcCode) values (?, ?, ?)";
            for (var i = 0; i < data.length; i++) {
                sqlLiteService.exec(query, [data[i].id, data[i].branch, data[i].lcCode]).then(function (res) {
                }, function (err) {
                    console.log("Insert into lcCode error " + err);
                });
            }
        } catch (Ex) { }
        return deferred.promise;
    }

}