import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents, DocumentLines } from '../../../class/app-objects';
import { AppSettings } from '../../../providers/settings';
import { ShareService } from '../../../providers/shareservice';

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
    console.log('ionViewDidLoad InvoiceContentPage');
  }

}
