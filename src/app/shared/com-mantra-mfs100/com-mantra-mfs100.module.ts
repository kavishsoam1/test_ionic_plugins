import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComMantraMfs100PageRoutingModule } from './com-mantra-mfs100-routing.module';

import { ComMantraMfs100Page } from './com-mantra-mfs100.page';
import { SidenavPageModule } from 'src/app/sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComMantraMfs100PageRoutingModule,
    SidenavPageModule
  ],
  declarations: [ComMantraMfs100Page]
})
export class ComMantraMfs100PageModule {}
