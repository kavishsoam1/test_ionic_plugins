import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page, 
    // children:[
    //   {
    //     path: 'edit/:id',
    //     loadChildren: () => import('../edit/edit.module').then(m => m.EditPageModule)
    //   }
    // ]
  },
  
  // {
  //   path: '',
  //   redirectTo: 'tab/tab2/edit',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
