import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurcodeworldFilebrowserPageRoutingModule } from './ourcodeworld-filebrowser-routing.module';

import { OurcodeworldFilebrowserPage } from './ourcodeworld-filebrowser.page';
import { SidenavPageModule } from 'src/app/sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurcodeworldFilebrowserPageRoutingModule,
    SidenavPageModule
  ],
  declarations: [OurcodeworldFilebrowserPage]
})
export class OurcodeworldFilebrowserPageModule {}
