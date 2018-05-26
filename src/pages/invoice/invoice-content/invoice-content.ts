import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents, DocumentLine } from '../../../class/app-objects';
import { AppSettings } from '../../../providers/settings';
import { ShareService } from '../../../providers/shareservice';
import { InvoiceCustomerPage } from '../invoice-customer/invoice-customer';
import { ItemDetailsPage } from '../../item-details/item-details';
import { IDocumentLines } from '../../../interfaces/app-interfaces';
import { InvoicePaymentPage } from '../../invoice-payment/invoice-payment';

/**
 * Generated class for the InvoiceContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-content',
  templateUrl: 'invoice-content.html',
})
export class InvoiceContentPage {
  document:Documents;

  constructor(public navCtrl: NavController, public navParams: NavParams,private shareService:ShareService) {
    this.document=shareService.invoice;

  }

  ionViewDidLoad() {
    
  }

  customerDetails(){
    this.navCtrl.push(InvoiceCustomerPage);
  }

  itemDetails(index){    
    this.navCtrl.push(ItemDetailsPage,{lineIndex:index});
  }

  addLine(line:DocumentLine){    
    this.document.lines.add(line);
  }

  removeLine(index:number){    
    this.document.lines.remove(index);    
  }

  goToPayment(){
    this.navCtrl.push(InvoicePaymentPage);
  }
}
