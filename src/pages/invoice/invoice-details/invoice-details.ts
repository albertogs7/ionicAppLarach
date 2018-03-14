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
  salesPersons:Array<{id:number,name:string}>
  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService:ShareService) {
    this.docHeader={docDate:shareService.invoice.docDate,
                    priceList:shareService.invoice.priceList,
                    slpCode:shareService.invoice.slpCode,
                    groupNum:shareService.invoice.groupNum,
                    comments:shareService.invoice.comments,      
                    }
    this.salesPersons=[{id:-1,name:"--Ningun empleado del departamento"},
                       {id:1,name:"Junior Perez"},
                       {id:2,name:"Yamileza Gonzales"},
                       {id:3,name:"Jose Arturo Flores"},
                       {id:4,name:"Carlos Pineda Chacon"},
                       {id:5,name:"Maritza Nohemi Colindres"},
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
