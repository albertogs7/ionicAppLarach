import { Component,Input} from '@angular/core';

import { SelectSearchablePage } from './select-searchable-page/select-searchable-page';
import { NavController, NavParams } from 'ionic-angular';
//import { SelectSearchablePage } from './select-searchable-page/select-searchable-page';

/**
 * Generated class for the SelectSearchableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-searchable',  
  templateUrl: 'select-searchable.html'  
  //template:'<ion-input type="text" [(ngModel)]="selectContent"></ion-input>',
})
/*
@Directive({
  selector: "[click-stop-propagation]"
})*/
export class SelectSearchableComponent {  
  @Input() title:string="";
  @Input() itemList:Array<{id:any,name:string}>;
  selectedItem:{id:any,name:string}={id:1,name:"Ningun empleado del departamento"};

  selectedItemCB=(_params)=>{
    return new Promise((resolve,reject)=>{
      this.selectedItem=_params;
      resolve();
    })
  }

  constructor(public navCrtl:NavController,public navParams:NavParams) {
    
  }
  //@HostListener("click", ["$event"])1  
  goToList(event:any){  
    this.navCrtl.push(SelectSearchablePage,{title:this.title,itemList:this.itemList,callback:this.selectedItemCB});        
  }
  
}
