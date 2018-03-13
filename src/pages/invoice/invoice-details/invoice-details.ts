import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Documents } from '../../../class/app-objects';
import { ShareService } from '../../../providers/shareservice';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareService:ShareService) {
    this.docHeader={docDate:shareService.invoice.docDate,
                    priceList:shareService.invoice.priceList,
                    slpCode:shareService.invoice.slpCode,
                    groupNum:shareService.invoice.groupNum,
                    comments:shareService.invoice.comments,      
                    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailsPage');
  }

}
