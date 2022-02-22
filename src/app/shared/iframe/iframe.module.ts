import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IframePageRoutingModule } from './iframe-routing.module';

import { IframePage } from './iframe.page';
import { SidenavPageModule } from 'src/app/sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IframePageRoutingModule,
    SidenavPageModule
  ],
  declarations: [IframePage]
})
export class IframePageModule { }
