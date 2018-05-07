import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents, DocumentLines } from '../../../class/app-objects';
import { AppSettings } from '../../../providers/settings';
import { ShareService } from '../../../providers/shareservice';
import { InvoiceCustomerPage } from '../invoice-customer/invoice-customer';
import { ItemDetailsPage } from '../../item-details/item-details';

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
    this.document.lines[0].quantity=this.document.lines[0].quantity+1;
    this.shareService.invoice.lines[0].quantity=this.shareService.invoice.lines[0].quantity+1;
    //this.navCtrl.push(ItemDetailsPage,{lineIndex:index});
  }

  addLine(line:DocumentLines){
    this.document.setLine(line);
  }

  removeLine(index:number){
    this.document.removeLine(index);
  }
}
