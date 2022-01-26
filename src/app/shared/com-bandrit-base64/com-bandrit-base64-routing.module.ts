import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComBandritBase64Page } from './com-bandrit-base64.page';

const routes: Routes = [
  {
    path: '',
    component: ComBandritBase64Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComBandritBase64PageRoutingModule {}
