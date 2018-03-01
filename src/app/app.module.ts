import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';

import {AppSettings} from '../providers/settings';
import {DataService} from '../providers/dataservice';

import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import {MainPage} from '../pages/main/main';
import { HomePage } from '../pages/home/home';
//import {Page2} from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MainPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MainPage,
    HomePage,    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettings,      
  ]
})
export class AppModule {
  showSubMenu:boolean=false;

  menuItemHandler():void{
    this.showSubMenu=!this.showSubMenu;
  }
}
