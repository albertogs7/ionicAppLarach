import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../providers/shareservice';
import { DocumentLines } from '../../class/app-objects';

/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  item:DocumentLines;

  constructor(public navCtrl: NavController, public navParams: NavParams,private shareService:ShareService) {
    this.item=shareService.invoice.getLine(navParams.data.lineIndex);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
  }

}
