import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuildInformationPage } from './build-information.page';

const routes: Routes = [
  {
    path: '',
    component: BuildInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuildInformationPageRoutingModule {}
