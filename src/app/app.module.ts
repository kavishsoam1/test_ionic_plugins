import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator/ngx';
import { DocumentScanner } from '@awesome-cordova-plugins/document-scanner/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { BuildInfo } from '@awesome-cordova-plugins/build-info/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { BackgroundMode } from '@awesome-cordova-plugins/background-mode/ngx';
import { SyncService } from './service/sync.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
// import { makePayment } from 'plugins/com.payment.billdesk/www/payment.js';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  providers: [
    SQLite,
    SQLitePorter,
    Camera,
    PDFGenerator,
    DocumentScanner,
    InAppBrowser,
    BuildInfo,
    Network,
    // makePayment,
    BackgroundMode,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
