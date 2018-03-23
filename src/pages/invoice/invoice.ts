import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentLines, Documents } from '../../class/app-objects';
import { AppSettings } from '../../providers/settings';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { InvoiceDetailsPage } from './invoice-details/invoice-details';
import { InvoiceContentPage } from './invoice-content/invoice-content';
import { ShareService } from '../../providers/shareservice';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public appSettings:AppSettings,shareService:ShareService) {
    shareService.invoice=new Documents(appSettings,shareService);

    let line:DocumentLines=new DocumentLines(appSettings);
    line.itemCode="13010001";
    line.itemName="CEMENTO GRIS ARGOS PIEDRAZUL (BOLSA)";
    line.price=185;
    line.taxPrcnt=15;
    line.quantity=1000;
    shareService.invoice.setLine(line);

    line=new DocumentLines(appSettings);
    line.itemCode="01010001";
    line.itemName="AVELLANADOR 211-12MM (1/2) P/METAL (S)";
    line.price=100;
    line.taxPrcnt=15;
    line.quantity=100;
    shareService.invoice.setLine(line);

    line=new DocumentLines(appSettings);
    line.itemCode="12030007";
    line.itemName="VARILLA HIERRO DEF.3/8 x 9 MTS GRADO-40";
    line.price=180;
    line.taxPrcnt=15;
    line.quantity=20;
    shareService.invoice.setLine(line);

    this.tab1=InvoiceContentPage;
    this.tab2=InvoiceDetailsPage;
    this.tab3=InvoiceDetailsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePage');
  }

}
