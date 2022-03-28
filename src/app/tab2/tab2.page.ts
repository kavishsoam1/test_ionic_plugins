import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private sanitizer: DomSanitizer) {}

  openURL() {
    // https://pramericalife.in:9098/LMS/MobileVerification.aspx
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://pramericalife.in:9098/LMS/MobileVerification.aspx'
    );
  }
}
