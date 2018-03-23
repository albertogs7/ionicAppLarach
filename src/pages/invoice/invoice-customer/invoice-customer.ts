import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../../providers/shareservice';
import { ICustomers, ISelectList } from '../../../interfaces/app-interfaces';

/**
 * Generated class for the InvoiceCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-customer',
  templateUrl: 'invoice-customer.html',
})
export class InvoiceCustomerPage {
  customer:ICustomers;
  country:{id:string,name:string};

  constructor(public navCtrl: NavController, public navParams: NavParams,public shareService:ShareService) {
    this.customer=this.shareService.invoice.customer;
    this.country={id:this.customer.country,name:shareService.countries.filter(x=>x.id===this.customer.country)[0].name}
  }

  ionViewDidLoad() {
    
  }  
}
