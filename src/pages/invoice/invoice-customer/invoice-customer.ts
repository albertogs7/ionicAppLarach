import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../../providers/shareservice';
import { ICustomers, ISelectList } from '../../../interfaces/app-interfaces';
import { CustomerSearchPage } from '../../customer-search/customer-search';

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

  selectedItemCB=(_params)=>{
    return new Promise((resolve,reject)=>{  
      this.customer.cardCode=_params.CardCode;
      this.customer.cardName=_params.CardName,
      this.customer.RFC=_params.RFC,          
      this.customer.phone=_params.Phone1,
      this.customer.email=_params.Email,      
      resolve();
      console.log(this.customer);
    })
  }

  searchCustomer(){    
    this.navCtrl.push(CustomerSearchPage,{callback:this.selectedItemCB})
  }

}
