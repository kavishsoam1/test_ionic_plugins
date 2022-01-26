import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InappBrowserPage } from './inapp-browser.page';

const routes: Routes = [
  {
    path: '',
    component: InappBrowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InappBrowserPageRoutingModule {}
