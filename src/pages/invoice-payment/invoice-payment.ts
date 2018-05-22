import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents,Payment } from '../../class/app-objects';
import { ShareService } from '../../providers/shareservice';

/**
 * Generated class for the InvoicePaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-payment',
  templateUrl: 'invoice-payment.html',
})
export class InvoicePaymentPage {
  invoice:Documents;
  payment:Payment;

  constructor(public navCtrl: NavController, public navParams: NavParams,public shareService:ShareService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePaymentPage');
  }

}
