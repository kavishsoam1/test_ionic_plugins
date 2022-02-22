import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-inapp-browser',
  templateUrl: './inapp-browser.page.html',
  styleUrls: ['./inapp-browser.page.scss'],
})
export class InappBrowserPage implements OnInit {


  constructor(private iab: InAppBrowser) { }

  ngOnInit() {


  }

  openBrowser() {
    const browser = this.iab.create('https://pramericalife.in:9098/LMS/MobileVerification.aspx');
    browser.on('loadstop').subscribe(event => {
      console.log(event);
      browser.insertCSS({ code: "body{color: red;" });
    });
  }

}
