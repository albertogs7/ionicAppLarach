import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html',
})
export class PaymentDetailsPage {
  type:string;
  data:any;  
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type=navParams.data.type;
    this.data=navParams.data.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentDetailsPage');
  }

}
