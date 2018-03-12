import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents, DocumentLines } from '../../../class/app-objects';
import { AppSettings } from '../../../providers/settings';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public appSettings:AppSettings) {
    this.document=new Documents(appSettings);
    this.document.customer.cardCode="C9999S02";
    this.document.customer.cardName="CONSUMIDOR FINAL";

    let line:DocumentLines=new DocumentLines(appSettings);
    line.itemCode="13010001";
    line.itemName="CEMENTO PIEDRA AZUL";
    line.price=195;
    line.taxPrcnt=15;
    this.document.setLine(line);

    line=new DocumentLines(appSettings);
    line.itemCode="01010001";
    line.itemName="AVELLANADOR";
    line.price=100;
    line.taxPrcnt=15;
    this.document.setLine(line);

    line=new DocumentLines(appSettings);
    line.itemCode="120300007";
    line.itemName="VARILLA DE 3/4";
    line.price=180;
    line.taxPrcnt=15;
    this.document.setLine(line);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceContentPage');
  }

}
