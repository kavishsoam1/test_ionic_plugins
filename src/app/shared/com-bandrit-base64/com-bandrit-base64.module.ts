import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComBandritBase64PageRoutingModule } from './com-bandrit-base64-routing.module';

import { ComBandritBase64Page } from './com-bandrit-base64.page';
import { SidenavPageModule } from 'src/app/sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComBandritBase64PageRoutingModule,
    SidenavPageModule
  ],
  declarations: [ComBandritBase64Page]
})
export class ComBandritBase64PageModule {}
