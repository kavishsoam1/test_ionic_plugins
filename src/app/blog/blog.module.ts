import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPageRoutingModule } from './blog-routing.module';

import { BlogPage } from './blog.page';
import { SidenavPageModule } from '../sidenav/sidenav.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
    BlogPageRoutingModule,
    SidenavPageModule,
  ],
  declarations: [BlogPage]
})
export class BlogPageModule {}
