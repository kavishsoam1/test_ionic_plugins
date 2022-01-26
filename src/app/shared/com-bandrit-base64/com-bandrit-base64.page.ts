import { Component, OnInit } from '@angular/core';
// declare var window : any;  //IMPORTANT COMMENTED
@Component({
  selector: 'app-com-bandrit-base64',
  templateUrl: './com-bandrit-base64.page.html',
  styleUrls: ['./com-bandrit-base64.page.scss'],
})
export class ComBandritBase64Page implements OnInit {

  path : any = "file://storage/0/downloads/myimage.png";
  constructor() { }

  ngOnInit() {
    // Convert image
  this.getFileContentAsBase64(this.path,function(base64Image){
  //window.open(base64Image);
  console.log(base64Image); 
  // Then you'll be able to handle the myimage.png file as base64
});
  }

  /**
 * This function will handle the conversion from a file to base64 format
 *
 * @path string
 * @callback function receives as first parameter the content of the image
 */
 getFileContentAsBase64(path,callback){
  // window.resolveLocalFileSystemURL(path, gotFile, fail);  
          
  function fail(e) {
        alert('Cannot found requested file');
  }

  function gotFile(fileEntry) {
         fileEntry.file(function(file) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
                 var content = this.result;
                 callback(content);
            };
            // The most important point, use the readAsDatURL Method from the file plugin
            reader.readAsDataURL(file);
         });
  }
}





}
