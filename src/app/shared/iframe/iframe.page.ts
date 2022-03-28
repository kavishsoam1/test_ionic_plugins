import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage implements OnInit {
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {}

  openURL() {
    // https://pramericalife.in:9098/LMS/MobileVerification.aspx
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://pramericalife.in:9098/LMS/MobileVerification.aspx'
    );
  }
}
