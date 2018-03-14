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
  salesPersons:Array<{slpCode:number,slpName:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService:ShareService) {
    this.docHeader={docDate:shareService.invoice.docDate,
                    priceList:shareService.invoice.priceList,
                    slpCode:shareService.invoice.slpCode,
                    groupNum:shareService.invoice.groupNum,
                    comments:shareService.invoice.comments,      
                    }
    this.salesPersons=[{slpCode:-1,slpName:"Ningun empleado del departamento"},
                       {slpCode:1,slpName:"Junior Perez"},
                       {slpCode:2,slpName:"Yamileza Gonzales"},
                       {slpCode:3,slpName:"Jose Arturo Flores"},
                       {slpCode:4,slpName:"Carlos Pineda Chacon"},
                       {slpCode:5,slpName:"Maritza Nohemi Colindres"},
                      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailsPage');
  }

  gotoClick(event:any){
    event.preventDefault();
    console.log('clickdetenido');
  }
}
