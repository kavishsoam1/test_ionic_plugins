import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InappBrowserPageRoutingModule } from './inapp-browser-routing.module';

import { InappBrowserPage } from './inapp-browser.page';
import { SidenavPageModule } from 'src/app/sidenav/sidenav.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InappBrowserPageRoutingModule,
    SidenavPageModule
  ],
  declarations: [InappBrowserPage]
})
export class InappBrowserPageModule {}
