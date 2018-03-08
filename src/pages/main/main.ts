import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { SideMenuComponent } from '../../components/side-menu/side-menu';
import { IUserData } from '../../interfaces/app-interfaces';
//import {SideMenuComponent} from '../../components/side-menu/side-menu';
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
@Injectable()
export class MainPage {
  userData:IUserData={id:1,name:"Gustavo Garcia",email:"sistemas@larachycia.com",imagePath:"assets/imgs/user-icon.png"};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     //this.userData={id:1,name:"Gustavo Garcia",email:"sistemas@larachycia.com",imagePath:"assets/imgs/user-icon.png"};
  }
  ionViewDidLoad() {
    //this.navCtrl.setRoot(MainPage);
    console.log('ionViewDidLoad MainPage');
  }

}
