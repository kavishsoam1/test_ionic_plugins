import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { DbService } from '../service/db.service';
import { DocumentScanner, DocumentScannerOptions } from '@awesome-cordova-plugins/document-scanner/ngx';
import { Platform } from '@ionic/angular';
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
  pdfData:any;
  scannedImage: string;
  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private documentScanner: DocumentScanner,
    private router: Router,
    private camera: Camera,
    private platform : Platform
  ) { }
  opts: DocumentScannerOptions = {
    sourceType : 1,
    fileName : '.png',
    quality : 5.0,
    returnBase64 : true
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
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchDataList().subscribe(item => {
          this.Data = item
        })
      }
    });

    this.mainForm = this.formBuilder.group({
      user_name: [''],
      process: ['']
    })
  }

  storeData() {
    if(!this.mainForm.controls.user_name.value || !this.mainForm.controls.process.value)
    return
    this.db.addUser(
      this.mainForm.value.user_name,
      this.mainForm.value.process
    ).then((res) => {
      this.mainForm.reset();
    })
  }

  deleteUser(id){
    this.db.deleteUser(id).then(async(res) => {
      let toast = await this.toast.create({
        message: 'User deleted',
        duration: 2500
      });
      toast.present();      
    })
  }

  navigate(id) {
    this.router.navigate(['edit',id]);
  }

  openSccanner() {
    let opts: DocumentScannerOptions = {returnBase64 : true};
    this.documentScanner.scanDoc(opts).then(res => {
      console.log('scanner_succ ',res);
      let base64Image = 'data:image/jpeg;base64,' + res;
      this.scannedImage = base64Image;
    }).catch(err => {
      console.log('scanner_err ==>',err);
    });
  }


}
