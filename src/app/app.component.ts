import { Component, Injectable,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { MenuItem } from '../components/menuItem';

@Component({
  templateUrl: 'app.html'
})
@Injectable()
export class MyApp {
  @ViewChild('nav') nav:Nav;
  rootPage:any = MainPage;  
  menuOptions:Array<{MenuItem}>;
  currentMenu:Array<{MenuItem}>;
  hideMenuBackButton:boolean=true;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.menuOptions=[{MenuItem(1,"General",HomePage,"home",null)},
                      ];
    this.currentMenu=this.menuOptions;

    platform.ready().then(() => {      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

  showChildren(parentId):void{
    console.log('parentId:'+parentId);
    let id=(this.currentMenu.findIndex(option=>(option.id===parentId)));
    this.currentMenu=this.menuOptions[id].children;
    console.log('index:'+id);
    console.log(this.currentMenu);
  }
  /*
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  */
}

