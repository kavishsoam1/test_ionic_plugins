import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { DbService } from '../service/db.service';
import { DocumentScanner, DocumentScannerOptions } from '@awesome-cordova-plugins/document-scanner/ngx';
import { Platform } from '@ionic/angular';
import { SyncService } from '../service/sync.service';
import { IndexedCrudService } from '../service/indexed-crud.service';
import { AsyncPromiseService } from '../service/async-promise.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
declare var window: any;
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  clickedImage: string;

  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  mainForm: FormGroup;
  Data: any[] = []
  pdfData: any;
  scannedImage: string;
  applicationStatus: any = [];
  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private documentScanner: DocumentScanner,
    private router: Router,
    private camera: Camera,
    private platform: Platform,
    private syncService: SyncService,
    private earthquakeService: IndexedCrudService,
    private asyncService: AsyncPromiseService,
    private iab: InAppBrowser
    // @Inject('Window') window: Window
  ) { }
  opts: DocumentScannerOptions = {
    sourceType: 1,
    fileName: '.png',
    quality: 5.0,
    returnBase64: true
  };

  captureImage() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.clickedImage = base64Image;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  ngOnInit() {

    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        //Subscribe on pause i.e. background
        this.platform.pause.subscribe(() => {
          console.log('Application paused');
          this.applicationStatus.push('paused');
          //   //Hello pause
        });
        //Subscribe on resume i.e. foreground 
        this.platform.resume.subscribe(() => {
          console.log('Application resumed');
          this.applicationStatus.push('Resumed');
          // window['paused'] = 0;
        });
      }
    });

    this.db.dbState().subscribe((res) => {
      if (res) {
        this.db.fetchDataList().subscribe(item => {
          this.Data = item
        })
      }
    });

    this.mainForm = this.formBuilder.group({
      user_name: [''],
      process: ['']
    })
    // this.syncService.getSyncData();

    //! this.asyncService.createUpdateDB().then(res=>{
    // !  console.log('intitated kavish indexedDB ==>>>',res);
    //! })

    this.earthquakeService.initProvider()
      .then((res: any) => {
        console.log('kavish soam indexeddb earthquake -->>', res);
      })
      .catch(err => console.log(err));

    //  const storedFilter = localStorage.getItem('filter');
    //  if (storedFilter) {
    //    this.filter = JSON.parse(storedFilter);
    //  }
    //  navigator.geolocation.getCurrentPosition(position => {
    //    this.filter.myLocation = position.coords;

    //    this.earthquakeService.initProvider()
    //      .then(() => this.filterEarthquakes())
    //      .catch(err => console.log(err));

    //  }, () => {
    //    this.filter.myLocation = {longitude: 7.5663964, latitude: 46.9268287};
    //    this.earthquakeService.initProvider()
    //      .then(() => this.filterEarthquakes())
    //      .catch(err => console.log(err));
    //  });

    //  if (this.geoWatchId) {
    //    navigator.geolocation.clearWatch(this.geoWatchId);
    //  }

    //  this.geoWatchId = navigator.geolocation.watchPosition(position => {
    //    this.filter.myLocation = position.coords;
    //  });

  }


  // async filterEarthquakes(hideLoading = false): Promise<void> {
  //   localStorage.setItem('filter', JSON.stringify(this.filter));

  //   let loading = null;

  //   if (!hideLoading) {
  //     loading = await this.loadingCtrl.create({
  //       message: 'Please wait...'
  //     });
  //     await loading.present();
  //   }

  //   const start = performance.now();
  //   this.earthquakes = await this.earthquakeService.filter(this.filter);
  //   this.elapsedTime = performance.now() - start;

  //   if (loading) {
  //     loading.dismiss();
  //   }
  // }


  storeData() {
    if (!this.mainForm.controls.user_name.value || !this.mainForm.controls.process.value)
      return
    this.db.addUser(
      this.mainForm.value.user_name,
      this.mainForm.value.process
    ).then((res) => {
      this.mainForm.reset();
    })
  }

  deleteUser(id) {
    this.db.deleteUser(id).then(async (res) => {
      let toast = await this.toast.create({
        message: 'User deleted',
        duration: 2500
      });
      toast.present();
    })
  }

  navigate(id) {
    this.router.navigate(['edit', id]);
  }

  openSccanner() {
    let opts: DocumentScannerOptions = {};
    let base64Attachment: any;
    this.documentScanner.scanDoc(opts).then(res => {
      console.log('scanner_succ ', res);
      console.log(window);
      console.log(window.plugins);
      console.log(window.plugins.base64);
      window.plugins.base64.encodeFile(res, function (base64) {
        console.log(base64);
        base64Attachment = base64.replace("data:image/*;charset=utf-8;base64,", "");
        console.log(base64Attachment);
      })
      let base64Image = 'data:image/jpeg;base64,' + res;
      this.scannedImage = base64Image;
    }).catch(err => {
      console.log('scanner_err ==>', err);
    });
  }

  onPay(refNo) {
    return new Promise((resolve, reject) => {
      console.log("mPOS SDK called...");

      const configObj = {
        demoAppKey: "04415207-91c7-4057-b5b3-69edda77357e",
        prodAppKey: "04415207-91c7-4057-b5b3-69edda77357e", //check key for prod
        merchantName: "DHFL_SDK_D180_79",
        userName: "DHFL_SDK_D180_79",
        currencyCode: "INR",
        appMode: "DEMO", //for testing DEMO - PROD
        captureSignature: "false",
        prepareDevice: "false",
      };

      const customerObj = {
        // name: $scope.eAppForm?.personalDtl?.customer?.dtl?.fName + " " + $scope.eAppForm?.personalDtl?.customer?.dtl?.lName || "mpos payment",
        // mobileNo: $scope.eAppForm?.personalDtl?.customer?.dtl?.mobile || "1234567890",
        // email: $scope.eAppForm?.personalDtl?.customer?.dtl?.email || "abc@gmail.com",
        name: 'mpos payment',
        mobileNo: '1234567890',
        eail: 'abc@gmail.com'
      };

      const referencesObj = { reference1: refNo, reference2: 321 };
      const optionsObj = { references: referencesObj, customer: customerObj };
      const orderObj = { amount: "1", mode: "SALE", options: optionsObj }; //change amount for prod
      // EzeTapWrapper.payWithEzeTap(
      //   configObj,
      //   orderObj,
      //   function onResult(result) {
      //     console.log("sdk result: " + result);
      //     result = JSON.parse(result);
      //     resolve(result);
      //   },
      //   function onError(error) {
      //     console.log("sdk error: " + error);
      //     error = JSON.parse(error);
      //     if (error.error && error.error.message) {
      //       reject(error.error.message);
      //     } else {
      //       reject(error);
      //     }
      //   }
      // );
    });
  }

  openBrowser() {
    const browser = this.iab.create('https://pramericalife.in:9098/LMS/MobileVerification.aspx');
    browser.on('loadstop').subscribe(event => {
      console.log(event);
      browser.insertCSS({ code: "body{color: red;" });
    });
  }


  openWebpage() {
    const browser = this.iab.create('https://cordova.apache.org/docs/en/10.x/guide/cli/', '_self', 'hideurlbar=yes');
    browser.on('loadstop').subscribe(event => {
      console.log(event);
      browser.insertCSS({ code: "body{color: red;" });
    });
  }


}
