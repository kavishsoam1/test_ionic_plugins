import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurcodeworldFilebrowserPage } from './ourcodeworld-filebrowser.page';

const routes: Routes = [
  {
    path: '',
    component: OurcodeworldFilebrowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurcodeworldFilebrowserPageRoutingModule {}
