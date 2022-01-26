import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComGkcgautamAsset2sdPage } from './com-gkcgautam-asset2sd.page';

const routes: Routes = [
  {
    path: '',
    component: ComGkcgautamAsset2sdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComGkcgautamAsset2sdPageRoutingModule {}
