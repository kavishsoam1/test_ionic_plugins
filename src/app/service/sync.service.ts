import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { Network } from '@awesome-cordova-plugins/network/ngx';
import PouchDB from 'node_modules/pouchdb';
// import * as PouchDB from 'pouchdb'; 

@Injectable({
    providedIn: 'root'
  })
  
  export class SyncService {
    pouchdb: any;
    pouchDBMap = {};
    failedSyncAttempts = {};
    syncCollections = [
        'stateMaster',
        'addressProofMaster',
        'ageProofMaster',
        'banksMaster',
        'basePlanDecisionMaster',
        'BIProductMaster',
        'causeOfDeathMaster',
        'channelProductMapping',
        'chequeTypeMaster',
        'cityMaster',
        'countryMaster',
        'eduMaster',
        'eNachBankMapping',
        'familyRelationMaster',
        'healthInsuranceCompaniesMaster',
        'healthStatusMaster',
        'identityProofMaster',
        'incomeProofMaster',
        'insuranceCompaniesMaster',
        'irMasterNew',
        'photoIdProofMaster',
        'maritalStatusMaster',
        'nationalityMaster',
        'natureOfDutiesMaster',
        'nomineeRelationMaster',
        'occupationMaster',
        'orgMaster',
        'paramilitarySubsection',
        'passwordRuleMaster',
        'payerRelationMaster',
        'pincodeMaster',
        'productFeatureMaster',
        'proposerRelationMaster',
        'qualificationMaster',
        'residentialStatusMaster',
        'appointeeRelationMaster',
        'cvdDeclinedReason',
        'cvdPrevPolicyProductCiteria',
        'channelAllowedDigitalPage',
        'ageIncomeMappingMaster',
        'bankCodes',
        'BIProductMaster2',

    ];

    constructor(
        public platform : Platform,
        public network : Network
    ) {
        this.syncCollections.forEach((item,i)=>{
            this.pouchDBMap[item] = {
                localDbName: item,
                local: new PouchDB(item, { revs_limit: 1, auto_compaction: true }),
                remote: 'https://aceappUATSync.pramericalife.in/db/' + item,
                //remote: new PouchDB({ adapter: 'socket', name: e, url: appConstants.syncUrl }),
                timeIndex: (i + 1) * 100
            } 
            this.pouchDBMap[item].local.setMaxListeners(50);
        })
        // this.getSyncData();
    }

    getSyncData() {
        // var db = new PouchDB('kittens');
        // this.pouchdb = new PouchDB("pouchform");
        // console.log(this.pouchdb);
        // console.log(db);
        console.log(this.pouchDBMap);
    }

    syncAll = () => {
        console.log("starting Sync");
        console.log(this.pouchDBMap);
        for (let key in this.pouchDBMap) {
            this.failedSyncAttempts[this.pouchDBMap[key].localDbName] = 0;
            this.replicate(this.pouchDBMap[key], { timeout: 7000, batch_size: 1000 })
        }
        console.log(this.pouchDBMap);
    }


    replicate(pouchObj, options) { 
        console.log('kavish===>>>>',pouchObj,options);
        // console.log("failedSyncAttempts : ", failedSyncAttempts);
        let db : any;
        db = PouchDB.replicate(pouchObj.remote, pouchObj.local, options)
            .on('change', function(info) {
                console.log("change", info)
            })
            .on('paused', function(err) {
                //db.cancel();
                // console.log("paused", err)
            })
            .on('active', function(info) {
                console.log("active", info)
            })
            .on('denied', function(err) {
                console.log("denied", err)
            })
            .on('complete', function(info) {

            })
            .on('error', function(err) {
                console.log("Error : ", err);
                db.cancel();
                // start sync only if internet is present
                if (this.platform.isWebView() && this.network.isOnline()) {
                    console.log("I am on device");
                    this.rescheduleSync(pouchObj, options);
                } else if (!this.platform.isWebView() && navigator.onLine) {
                    console.log("I am on Web");
                    this.rescheduleSync(pouchObj, options);
                }
                // console.log("error", err)
            });

            console.log(db);
            console.log(this.pouchDBMap);
    }

    rescheduleSync(pouchObj, options) {
        if (this.failedSyncAttempts[pouchObj.localDbName]++ < 3)
            setTimeout(() => {
                console.log('restart sync')
                this.replicate(pouchObj, options)
            }, 8000)
    }



  }