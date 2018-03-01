import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     
  }
  ionViewDidLoad() {
    //this.navCtrl.setRoot(MainPage);
    console.log('ionViewDidLoad MainPage');
  }

}
