import { Component, Injectable,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { IMenuItem } from '../interfaces/menuItem';

@Component({
  templateUrl: 'app.html'
})
@Injectable()
export class MyApp {
  @ViewChild('nav') nav:Nav;
  rootPage:any = MainPage;  
  menuOptions:IMenuItem[];
  currentMenu:IMenuItem[];
  menuTitle:string="Menu";

  private parentMenu:any;//IMenuItem[][];
  private hideMenuBackButton:boolean=true;
  private menuLevel:number=0;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let o:IMenuItem={id:1,title:"General",component:HomePage,icon:"home",children:null};

    this.menuOptions=[
                      {id:1,title:"General",component:HomePage,icon:"home",children:null},
                      {id:2,title:"Ventas",component:HomePage,icon:"home",
                        children:[
                                  {id:11,title:"Cotización",component:HomePage,icon:"home",children:null},
                                  {id:12,title:"Factura de clientes",component:HomePage,icon:"home",children:null}
                                  ]
                      },
                      {id:3,title:"Inventarios",component:HomePage,icon:"home",
                        children:[
                                  {id:31,title:"Status de stock",component:HomePage,icon:"home",children:null},
                                  {id:32,title:"Conteo de inventario",component:HomePage,icon:"home",children:null}
                                  ]
                      }
                    ];
    this.currentMenu=this.menuOptions;
    this.parentMenu=[];

    platform.ready().then(() => {      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

  showChildren(parentId):void{
    this.parentMenu.push({title:this.menuTitle,menu:this.currentMenu});    
    let id=(this.currentMenu.findIndex(option=>(option.id===parentId)));
    this.menuTitle=this.currentMenu[id].title;
    this.currentMenu=this.currentMenu[id].children;
    this.menuLevel+=1;
    this.hideMenuBackButton=false;    
  }

  upMenuLevel(){
    console.log(this.menuLevel);
    console.log(this.parentMenu[this.menuLevel-1]);
    
    this.currentMenu=this.parentMenu[this.menuLevel-1].menu;
    this.menuTitle=this.parentMenu[this.menuLevel-1].title;
    
    this.parentMenu.pop();
    this.menuLevel-=1;
    if (this.menuLevel===0) this.hideMenuBackButton=true;
    //  this.menuTitle="Menu";
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

