import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  order = {
    createdAt:'12-2-2022',
    address: {
      flatNumber :'R-450',
      street:'saket town',
      locality:'Gaur city',
      name:'Kavish'
    },
    paymentId:'DJE3453JDNQPS1',
    products:[
      {
        name : 'product1',
        salePrice : 120
      },
      {
        name : 'product2',
        salePrice : 140
      }
    ],
    grandTotal : 260
  };
  content: string;
  constructor(private modalContrller: ModalController, private pdfGenerator: PDFGenerator) {
  }
  closeModal() {
    this.modalContrller.dismiss();
  }
  downloadInvoice() {
    this.content = document.getElementById('PrintInvoice').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'Order-Invoice.pdf'
    };
    this.pdfGenerator.fromData(this.content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });

  }
  ngOnInit() {
    console.log('Invoice Page2', this.order);
  }

}
