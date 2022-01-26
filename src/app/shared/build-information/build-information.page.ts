import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BuildInfo } from '@awesome-cordova-plugins/build-info/ngx';

@Component({
  selector: 'app-build-information',
  templateUrl: './build-information.page.html',
  styleUrls: ['./build-information.page.scss'],
})
export class BuildInformationPage implements OnInit {

  constructor(private platform : Platform, private BuildInfo : BuildInfo) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      console.log('BuildInfo.baseUrl        =' + this.BuildInfo.baseUrl)
      console.log('BuildInfo.packageName    =' + this.BuildInfo.packageName)
      console.log('BuildInfo.basePackageName=' + this.BuildInfo.basePackageName)
      console.log('BuildInfo.displayName    =' + this.BuildInfo.displayName)
      console.log('BuildInfo.name           =' + this.BuildInfo.name)
      console.log('BuildInfo.version        =' + this.BuildInfo.version)
      console.log('BuildInfo.versionCode    =' + this.BuildInfo.versionCode)
      console.log('BuildInfo.debug          =' + this.BuildInfo.debug)
      console.log('BuildInfo.buildType      =' + this.BuildInfo.buildType)
      console.log('BuildInfo.flavor         =' + this.BuildInfo.flavor)
      console.log('BuildInfo.buildDate      =' + this.BuildInfo.buildDate)
      console.log('BuildInfo.installDate    =' + this.BuildInfo.installDate)
  })
  }

}
