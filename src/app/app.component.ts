import { Component } from '@angular/core';
import { AsyncPromiseService } from './service/async-promise.service';
import { IndexedDbService } from './service/indexdb.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private service: AsyncPromiseService, private syncService: IndexedDbService) {
    this.syncService.getDataFromTable('occupationMaster', 'value', 'AC')
  }

  activePageTitle = 'Blog';

  Pages = [
    {
      title: 'Home',
      url: 'tabs/tab1',
      icon: 'home',
      color: ''
    },
    {
      title: 'webview-Iframe',
      url: '/iframe',
      icon: 'file-tray-full',
      color: 'primary'
    },
    {
      title: 'com-badrit-base64',
      url: '/com-bandrit-base64',
      icon: 'file-tray-full',
      color: 'primary'
    },
    {
      title: 'com.gkcgautam.asset2sd',
      url: '/com-gkcgautam-asset2sd',
      icon: 'file-tray-full',
      color: 'primary'
    },
    {
      title: 'com.mantra.mfs100',
      url: '/com-mantra-mfs100',
      icon: 'file-tray-full',
      color: 'primary'
    },
    {
      title: 'com.ourcodeworld.plugins.Filebrowser',
      url: '/filebrowser',
      icon: 'file-tray-full',
      color: 'primary'
    },
    {
      title: 'com.payment.billdesk',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'danger'
    },
    {
      title: 'cordova-base64-to-gallery',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'primary'
    },
    {
      title: 'cordova-filepath-resolver',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'primary'
    },
    {
      title: 'cordova-plugin-background-mode',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-browsertab',
      url: '/inapp-browser',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-buildinfo',
      url: '/build-information',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-camera',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-compat',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-crop',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-datepicker',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-device',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-file',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-file-opener2',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-file-transfer',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-filechooser',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-google-analytics',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-inappbrowser',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-jumbomode',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-mfilechooser',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-network-information',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-splashscreen',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'
    },
    {
      title: 'cordova-plugin-whitelist',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'

    },
    {
      title: 'cordova-sqlite-storage',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color: 'success'

    },
    {
      title: 'sqli-cordova-disk-space-plugin',
      url: '/tabs/tab1',
      icon: 'file-tray-full'
    },
    {
      title: 'Details',
      url: '/tabs/tab1',
      icon: 'cube'
    },
    {
      title: 'Versions',
      url: '/tabs/tab1',
      icon: 'information-circle'
    }
  ];

}
