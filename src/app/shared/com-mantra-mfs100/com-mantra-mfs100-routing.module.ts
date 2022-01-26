import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComMantraMfs100Page } from './com-mantra-mfs100.page';

const routes: Routes = [
  {
    path: '',
    component: ComMantraMfs100Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComMantraMfs100PageRoutingModule {}
