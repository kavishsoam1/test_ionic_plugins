import { Component, OnInit } from '@angular/core';
import { PDFGenerator } from '@awesome-cordova-plugins/pdf-generator/ngx';
import * as payment from '../../../../plugins/com.payment.billdesk/www/payment';

@Component({
  selector: 'app-ourcodeworld-filebrowser',
  templateUrl: './ourcodeworld-filebrowser.page.html',
  styleUrls: ['./ourcodeworld-filebrowser.page.scss'],
})
export class OurcodeworldFilebrowserPage implements OnInit {
  content: string;
  constructor(private pdfGenerator: PDFGenerator) {}

  ngOnInit() {}

  wealthMaxHealthMapper(a) {
    return true;
  }

  wealthMaxFemaleMapper(a) {
    return true;
  }

  downloadInvoice() {
    this.content = document.getElementById('PrintInvoice2').innerHTML;
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'Order-Invoice.pdf',
    };
    // this.pdfGenerator
    //   .fromData(this.content, options)
    //   .then((base64) => {
    //     console.log('OK', base64);
    //   })
    //   .catch((error) => {
    //     console.log('error', error);
    //   });
    var action = 'htmlToPdf|' + 'pdfName' + '|' + this.content + '|' + !!true;

    payment.htmlToPdf(action, this.success(''), this.failed(''));
  }

  success(res) {}
  failed(res) {}
}
