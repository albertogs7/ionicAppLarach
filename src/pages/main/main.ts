import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { SideMenuComponent } from '../../components/side-menu/side-menu';
import { IUserData } from '../../interfaces/app-interfaces';
import { AppSettings } from '../../providers/settings';
import { DecimalType, SettingName } from '../../class/app-enums';
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
  id:number;
  name:string;
  email:string;
  imagePath:string;  
  slpCode:number;

  userData:IUserData={id:1,name:"Gustavo Garcia",email:"sistemas@larachycia.com",imagePath:"assets/imgs/user-icon.png",slpCode:-1};
  constructor(public navCtrl: NavController, public navParams: NavParams, public appSetting:AppSettings) {
    /*console.log(appSetting.round(32.234564,DecimalType.PRICES));
    console.log(appSetting.round(3232.235239,DecimalType.PERCENTS));
    console.log(appSetting.round(3232.236789,DecimalType.TOTALS));
    console.log(appSetting.round(3232.238888,DecimalType.QUANTITIES));*/
     //this.userData={id:1,name:"Gustavo Garcia",email:"sistemas@larachycia.com",imagePath:"assets/imgs/user-icon.png"};
  }
  ionViewDidLoad() {
    //this.navCtrl.setRoot(MainPage);
    console.log('ionViewDidLoad MainPage');
  }

}
