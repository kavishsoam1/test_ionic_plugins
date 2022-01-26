import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {
  url: string;

  constructor(
    private route : Router
  ) {
    this.url = this.route.url.split('/')[1];
   }

  ngOnInit() {
  }

}
