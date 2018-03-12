import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentLines, Documents } from '../../class/app-objects';
import { AppSettings } from '../../providers/settings';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { InvoiceDetailsPage } from './invoice-details/invoice-details';
import { InvoiceContentPage } from './invoice-content/invoice-content';

/**
 * Generated class for the InvoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: `invoice.html`,
})
export class InvoicePage {
  tab1;
  tab2;
  tab3;
  //tab2Root=LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public appSettings:AppSettings) {
    this.tab1=InvoiceContentPage;
    this.tab2=InvoiceDetailsPage;
    this.tab3=InvoiceDetailsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

}
