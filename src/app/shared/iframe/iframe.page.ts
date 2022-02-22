import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.page.html',
  styleUrls: ['./iframe.page.scss'],
})
export class IframePage implements OnInit {

  constructor(
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  openURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://cordova.apache.org/docs/en/10.x/guide/cli/');
  }

}
