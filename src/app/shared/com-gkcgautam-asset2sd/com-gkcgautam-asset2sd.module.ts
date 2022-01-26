import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComGkcgautamAsset2sdPageRoutingModule } from './com-gkcgautam-asset2sd-routing.module';

import { ComGkcgautamAsset2sdPage } from './com-gkcgautam-asset2sd.page';
import { SidenavPageModule } from 'src/app/sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComGkcgautamAsset2sdPageRoutingModule,
    SidenavPageModule
  ],
  declarations: [ComGkcgautamAsset2sdPage]
})
export class ComGkcgautamAsset2sdPageModule {}
