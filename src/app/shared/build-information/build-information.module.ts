import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildInformationPageRoutingModule } from './build-information-routing.module';

import { BuildInformationPage } from './build-information.page';
import { SidenavPageModule } from 'src/app/sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildInformationPageRoutingModule,
    SidenavPageModule
  ],
  declarations: [BuildInformationPage]
})
export class BuildInformationPageModule {}
