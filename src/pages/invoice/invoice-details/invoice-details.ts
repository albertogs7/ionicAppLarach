import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents } from '../../../class/app-objects';
import { ShareService } from '../../../providers/shareservice';
//import {SelectSearchable} from 'ionic-select-searchable';
//import { SelectSearchable } from 'ionic-select-searchable/select-searchable.component';

/**
 * Generated class for the InvoiceDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-details',
  templateUrl: 'invoice-details.html',
})
export class InvoiceDetailsPage {
  docHeader; 
  groupNum;   
  constructor(public navCtrl: NavController, public navParams: NavParams, public shareService:ShareService) {            
    this.docHeader={docDate:shareService.invoice.docDate,
                    priceList:shareService.invoice.priceList,
                    listName:shareService.pricesList.filter(x=>x.id===shareService.invoice.priceList)[0].name,                    
                    salesPerson:{id:shareService.invoice.slpCode,name:shareService.salesPersons.filter(x=>x.id===shareService.invoice.slpCode)[0].name},                    
                    groupNum:shareService.invoice.groupNum,                    
                    address:shareService.invoice.address,
                    comments:shareService.invoice.comments,      
                    }                        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailsPage');
  }

  gotoClick(event:any){
    event.preventDefault();
    console.log('clickdetenido');
  }
}
