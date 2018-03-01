import { Component, Injectable,ViewChild,trigger,state,animate,style, transition } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { IMenuItem } from '../interfaces/menuItem';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})

@Injectable()
export class MyApp {
  @ViewChild('nav') nav:Nav;
  rootPage:any = LoginPage;    
  currentMenu:IMenuItem[];
  menuTitle:string="Menu";

  private parentMenu:Array<{title:string,menu:IMenuItem[]}>;
  private hideMenuBackButton:boolean=true;  
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {    
    this.parentMenu=[{title:"Menu",menu:[
                                  {id:1,title:"General",component:HomePage,icon:"home",children:null},
                                  {id:2,title:"Ventas",component:HomePage,icon:"home",
                                    children:[
                                              {id:11,title:"Cotización",component:HomePage,icon:"home",children:null},
                                              {id:12,title:"Factura de clientes",component:HomePage,icon:"home",
                                                children:[
                                                  {id:121,title:"Contado",component:HomePage,icon:"home",children:null},
                                                  {id:122,title:"Credito",component:HomePage,icon:"home",children:null}
                                                ]}
                                              ]
                                  },
                                  {id:3,title:"Inventarios",component:HomePage,icon:"home",
                                    children:[
                                              {id:31,title:"Status de stock",component:HomePage,icon:"home",children:null},
                                              {id:32,title:"Conteo de inventario",component:HomePage,icon:"home",children:null}
                                              ]
                                  }
                                ]}]
    this.currentMenu=this.parentMenu[0].menu;    

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
    this.hideMenuBackButton=false;    
  }

  upMenuLevel(){
    this.currentMenu=this.parentMenu[this.parentMenu.length-1].menu;
    this.menuTitle=this.parentMenu[this.parentMenu.length-1].title;    
    this.parentMenu.pop();
    if (this.parentMenu.length===1) this.hideMenuBackButton=true;   
  }
}

