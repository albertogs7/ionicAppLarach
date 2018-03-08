import { Component,ViewChild,trigger,state,animate,style, transition, Input } from '@angular/core';
import { Nav } from 'ionic-angular';
import { IMenuItem, IUserData } from '../../interfaces/app-interfaces';
import {HomePage} from '../../pages/home/home';
/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html',
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

export class SideMenuComponent {    
  @ViewChild('nav') nav:Nav;
  public currentMenu:IMenuItem[];  
  public title:string;
  @Input('user-data') userData:IUserData;

  private parentMenu:Array<{title:string,menu:IMenuItem[]}>;
  private hideMenuBackButton:boolean=true;  
  
  constructor() {            
    this.parentMenu=this.getMainMenuItems();
    this.title=this.parentMenu[0].title;
    this.currentMenu=this.parentMenu[0].menu;        
  }

  goToPage(page){
    //this.nav.setRoot(page);
  }

  setUserData(userData:IUserData){
    this.userData=userData;
  }

  downMenuLevel(parentId):void{
    this.parentMenu.push({title:this.title,menu:this.currentMenu});    
    let id=(this.currentMenu.findIndex(option=>(option.id===parentId)));    
    this.title=this.currentMenu[id].title;
    this.currentMenu=this.currentMenu[id].children;
    this.hideMenuBackButton=false;    
  }

  upMenuLevel(){
    this.title=this.parentMenu[this.parentMenu.length-1].title;    
    this.currentMenu=this.parentMenu[this.parentMenu.length-1].menu;    
    this.parentMenu.pop();
    if (this.parentMenu.length===1) this.hideMenuBackButton=true;   
  }

  private getMainMenuItems():Array<{title:string,menu:IMenuItem[]}>{
    return [{title:"Menu",menu:[
                                {id:1,title:"General",component:HomePage,icon:"home",children:null},
                                {id:2,title:"Ventas",component:HomePage,icon:"home",
                                children:[
                                            {id:11,title:"Cotización",component:HomePage,icon:"home",children:null},
                                            {id:12,title:"Factura de clientes",component:null,icon:"home",
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
                    ]
            }];
  }
}
