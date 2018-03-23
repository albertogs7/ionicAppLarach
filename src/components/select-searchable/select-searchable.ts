import { Component,Input,Output,EventEmitter,AfterViewInit} from '@angular/core';

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
export class SelectSearchableComponent implements AfterViewInit{  
  @Input() title:string="";
  @Input() itemValue:string="id";
  @Input() itemDescription:string="name";
  @Input() itemList:Array<any>;
  @Output() selectedItem=new EventEmitter;
  @Input() currentItem=null;

  selectedItemCB=(_params)=>{
    return new Promise((resolve,reject)=>{
      console.log(_params);
      this.currentItem=_params;
      this.selectedItem.emit({selectedItem:_params});      
      resolve();
    })
  }

  constructor(public navCrtl:NavController,public navParams:NavParams) {
   
  }

  ngAfterViewInit(){
    
  }

  ionViewDidEnter(){
    
  }

  goToList(event:any){  
    this.navCrtl.push(SelectSearchablePage,{title:this.title,itemList:this.itemList,itemValue:this.itemValue,itemDescription:this.itemDescription,callback:this.selectedItemCB});        
  }
  
}
