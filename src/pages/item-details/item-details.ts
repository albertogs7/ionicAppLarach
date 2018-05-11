import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareService } from '../../providers/shareservice';
import { DocumentLine } from '../../class/app-objects';
import { AppSettings } from '../../providers/settings';

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
  item:DocumentLine;

  constructor(public navCtrl: NavController, public navParams: NavParams,private shareService:ShareService) {        
    this.item=shareService.invoice.lines[navParams.data.lineIndex];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
  }

}
