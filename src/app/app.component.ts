import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  activePageTitle = 'Blog';

  Pages = [
    {
      title: 'Home',
      url: 'tabs/tab1',
      icon: 'home',
      color : ''
    },
    {
      title: 'com-badrit-base64',
      url: '/com-bandrit-base64',
      icon: 'file-tray-full',
      color : 'primary'
    },
    {
      title: 'com.gkcgautam.asset2sd',
      url: '/com-gkcgautam-asset2sd',
      icon: 'file-tray-full',
      color : 'primary'
    },
    {
      title: 'com.mantra.mfs100',
      url: '/com-mantra-mfs100',
      icon: 'file-tray-full',
      color : 'primary'
    },
    {
      title: 'com.ourcodeworld.plugins.Filebrowser',
      url: '/com-ourcodeworld-plugins-Filebrowser',
      icon: 'file-tray-full',
      color : 'primary'
    },
    {
      title: 'com.payment.billdesk',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color : 'danger' 
    },
    {
      title: 'cordova-base64-to-gallery',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color : 'primary'
    },
    {
      title: 'cordova-filepath-resolver',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color : 'primary'
    },
    {
      title: 'cordova-plugin-background-mode',
      url: '/tabs/tab1',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-browsertab',
      url: '/inapp-browser',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-buildinfo',
      url: '/build-information',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-camera',
      url: '/contact',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-compat',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-crop',
      url: '/contact',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-datepicker',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-device',
      url: '/contact',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-file',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-file-opener2',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-file-transfer',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-filechooser',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-google-analytics',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-inappbrowser',
      url: '/contact',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-jumbomode',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-mfilechooser',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-network-information',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'cordova-plugin-splashscreen',
      url: '/contact',
      icon: 'file-tray-full',
      color : 'success'
    },
    {
      title: 'cordova-plugin-whitelist',
      url: '/contact',
      icon: 'file-tray-full',
      color : 'success'

    },
    {
      title: 'cordova-sqlite-storage',
      url: '/contact',
      icon: 'file-tray-full',
      color : 'success'

    },
    {
      title: 'sqli-cordova-disk-space-plugin',
      url: '/contact',
      icon: 'file-tray-full'
    },
    {
      title: 'Details',
      url: '/contact',
      icon: 'cube'
    },
    {
      title: 'Versions',
      url: '/contact',
      icon: 'information-circle'
    }
  ];
  
}
