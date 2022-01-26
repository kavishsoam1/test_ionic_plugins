  import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'sidenav',
    loadChildren: () => import('./sidenav/sidenav.module').then( m => m.SidenavPageModule)
  },
  {
    path: 'com-bandrit-base64',
    loadChildren: () => import('./shared/com-bandrit-base64/com-bandrit-base64.module').then( m => m.ComBandritBase64PageModule)
  },
  {
    path: 'com-gkcgautam-asset2sd',
    loadChildren: () => import('./shared/com-gkcgautam-asset2sd/com-gkcgautam-asset2sd.module').then( m => m.ComGkcgautamAsset2sdPageModule)
  },
  {
    path: 'com-mantra-mfs100',
    loadChildren: () => import('./shared/com-mantra-mfs100/com-mantra-mfs100.module').then( m => m.ComMantraMfs100PageModule)
  },
  {
    path: 'com-ourcodeworld-plugins-Filebrowser',
    loadChildren: () => import('./shared/ourcodeworld-filebrowser/ourcodeworld-filebrowser.module').then( m => m.OurcodeworldFilebrowserPageModule)
  },
  {
    path: 'inapp-browser',
    loadChildren: () => import('./shared/inapp-browser/inapp-browser.module').then( m => m.InappBrowserPageModule)
  },
  {
    path: 'build-information',
    loadChildren: () => import('./shared/build-information/build-information.module').then( m => m.BuildInformationPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
