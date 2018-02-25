import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';
import {AppSettings} from '../../providers/settings';
import { DataService } from '../../providers/dataservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public appSettings:AppSettings,public dataService:DataService) {

  }

  launchPage2():void{
  	this.navCtrl.push(Page2);
  }

launchPage2Url():void{
  	this.navCtrl.push('pagina2');
  }

  testAccess():void{
    this.dataService.grantAccess$("1","2").subscribe((response)=>{console.log(response)});
  }
}
