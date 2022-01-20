import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { DbService } from '../service/db.service';

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

  constructor(
    private db: DbService,
    public formBuilder: FormBuilder,
    private toast: ToastController,
    private router: Router,
    private camera: Camera
  ) { }

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


}
