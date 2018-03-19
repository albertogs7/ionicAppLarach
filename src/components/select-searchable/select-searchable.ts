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
  @Input() itemValue:string="id";
  @Input() itemDescription:string="name";
  @Input() itemList:Array<any>;
  selectedItem:any=null;

  selectedItemCB=(_params)=>{
    return new Promise((resolve,reject)=>{
      this.selectedItem=_params;      
      resolve();
    })
  }

  constructor(public navCrtl:NavController,public navParams:NavParams) {
    
  }

  goToList(event:any){  
    this.navCrtl.push(SelectSearchablePage,{title:this.title,itemList:this.itemList,itemValue:this.itemValue,itemDescription:this.itemDescription,callback:this.selectedItemCB});        
  }
  
}
