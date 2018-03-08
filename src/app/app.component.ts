import { Component, Injectable,ViewChild,trigger,state,animate,style, transition } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html',  
})

@Injectable()
export class MyApp {  
  rootPage:any = LoginPage;    
    
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {        
    platform.ready().then(() => {      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }  
}

