import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage } from '../main/main';
import { AppSettings } from '../../providers/settings';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private splashScreen:SplashScreen,public appSettings:AppSettings) {
  }

  ionViewDidLoad() {
    //this.splashScreen.show();
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillEnter(){
    var _this=this;
    (async function(){
      console.log('Calling splashScreen.show()');
      _this.splashScreen.show();
      console.log('Simulando espera de 8 segundos');
      var test=await _this.delay(2);
      console.log('espera finalizada');
      console.log(`Valor devuelto por la promesa "${test}"`);
      console.log('Calling splashScreen.hide()');
      _this.splashScreen.hide();
    })();
   
    var selected = {ItemCode: "A00001", ItemName: "Descripcion A00001", Stock: 12332};
    var line = {ItemCode:"",ItemName:""};
    ['ItemCode', 'ItemName'].forEach(prop => line[prop] = selected[prop]);        
  }

  
  ionViewCanEnter(){      
  }

  ionViewDidEnter(){
  }

  delay(ms: number) {
     //await setTimeout(function(){console.log('esperando...')},ms*1000);
     return new Promise(resolve =>{let i:number=0;
      var interval=setInterval(()=>{i++;console.log('esperando '+i+'....')},1000)
      setTimeout(function(){clearInterval(interval); resolve('holamundo')},ms*1000)
      });
  }

  onSubmit():void{
    this.navCtrl.setRoot(MainPage);
    //this.navCtrl.push(MainPage);
  }
}
