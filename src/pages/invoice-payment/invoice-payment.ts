import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents,Payment, DocumentLine } from '../../class/app-objects';
import { ShareService } from '../../providers/shareservice';
import { PaymentDetailsPage } from '../payment-details/payment-details';
import { AppSettings } from '../../providers/settings';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService:ShareService, private appSettings:AppSettings) {
    shareService.invoice=new Documents(appSettings,shareService);
    shareService.payment=new Payment(appSettings,shareService);

    let line:DocumentLine=new DocumentLine(appSettings);
    line.itemCode="13010001";
    line.itemName="CEMENTO GRIS ARGOS PIEDRAZUL (BOLSA)";
    line.unitMsr="UNID";
    line.whsCode="S2TGU";
    line.price=185;
    line.taxPrcnt=15;
    line.quantity=1000;    

    shareService.invoice.lines.add(line);
        
    line=new DocumentLine(appSettings);
    line.itemCode="01010001";
    line.itemName="AVELLANADOR 211-12MM (1/2) P/METAL (S)";
    line.price=100;
    line.unitMsr="UNID";
    line.whsCode="S2TGU";
    line.taxPrcnt=15;
    line.quantity=100;
    
    shareService.invoice.lines.add(line);
    
    
    line=new DocumentLine(appSettings);
    line.itemCode="12030007";
    line.itemName="VARILLA HIERRO DEF.3/8 x 9 MTS GRADO-40";
    line.price=180;
    line.unitMsr="UNID";
    line.whsCode="S2TGU";
    line.taxPrcnt=15;
    line.quantity=20;
    shareService.invoice.lines.add(line);

    this.invoice=shareService.invoice;
    this.payment=shareService.payment;  
    console.log(this.invoice);
  }

  paymentDetails(code:string,type:string){
    this.navCtrl.push(PaymentDetailsPage,{type:type,data:null});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicePaymentPage');
  }

}
