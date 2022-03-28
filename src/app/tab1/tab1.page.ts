import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as payment from '../../../plugins/com.payment.billdesk/www/payment';
// declare var payment: any;
// declare var cordova: any;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  baseUrl: any = 'http://pramericalife.in:9098/LMS/MobileVerification.aspx';
  openURL() {
    // https://pramericalife.in:9098/LMS/MobileVerification.aspx
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://cordova.apache.org/docs/en/10.x/guide/cli/'
    );
  }

  ngOnInit(): void {
    console.log('payment');
    var unformatedAmount = 2; //on uat
    var action =
      'makePayment|' +
      '1234' +
      '|' +
      unformatedAmount +
      '|https://dengueshield.pramericalife.in/Home/mobileappupdatetransaction';
    payment.makePayment(action, this.success(''), this.failed(''));

    // const configObj = {
    //   demoAppKey: '04415207-91c7-4057-b5b3-69edda77357e',
    //   prodAppKey: '04415207-91c7-4057-b5b3-69edda77357e', //check key for prod
    //   merchantName: 'DHFL_SDK_D180_79',
    //   userName: 'DHFL_SDK_D180_79',
    //   currencyCode: 'INR',
    //   appMode: 'DEMO', //for testing DEMO - PROD
    //   captureSignature: 'false',
    //   prepareDevice: 'false',
    // };

    // const customerObj = {
    //   name: 'Kavish',
    //   mobileNo: '1234567890',
    //   email: 'abc@gmail.com',
    // };

    // const referencesObj = {
    //   reference1: 'qweqweqweddfew',
    //   reference2: 'er2jndjewq3',
    // };
    // const optionsObj = { references: referencesObj, customer: customerObj };
    // const orderObj = { amount: '1', mode: 'SALE', options: optionsObj }; //change amount for prod
    // cordova.plugins.EzeTapWrapper.payWithEzeTap(
    //   configObj,
    //   orderObj,
    //   function onResult(result) {
    //     console.log('sdk result: ' + result);
    //     result = JSON.parse(result);
    //   },
    //   function onError(error) {
    //     console.log('sdk error: ' + error);
    //     error = JSON.parse(error);
    //     if (error.error && error.error.message) {
    //     } else {
    //     }
    //   }
    // );
  }

  MakePaymentFunction() {
    console.log('payment called');
    var unformatedAmount = 2; //on uat
    var action =
      'makePayment|' +
      '1234' +
      '|' +
      unformatedAmount +
      '|https://dengueshield.pramericalife.in/Home/mobileappupdatetransaction';
    payment.makePayment(action, this.success(''), this.failed(''));
    console.log(payment);
  }

  success(response) {
    console.log(response);
    // $(".blockOverlay").css("display", "block");
    // console.log("savePaymentGatwayResponse successss::::::::", response.Data);
    // //response.Data = ''; // only for testing remove when testing is over -> Nidhi
    // calculatorService.savePaymentGatwayResponse(response.Data);
    // let statusValue = false;
    // calculatorService.saveStatusValue(statusValue);
    // $timeout(function () {
    //     $(".blockOverlay").css("display", "none");
    //     $state.go('home.eApplication.paymentDetails.paymentStatus');
    // }, 100);
  }

  failed(error) {}
}
