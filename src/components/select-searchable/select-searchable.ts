import { Component,Input} from '@angular/core';

import { SelectSearchablePage } from './select-searchable-page/select-searchable';
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
  @Input() itemList:Array<{id:any,name:string}>
  @Input() labelStyle:string="";
  @Input() infinityScrollbar:boolean=false;

  selectContent:string="Hola mundo";
  constructor(public navCrtl:NavController,public navParams:NavParams) {
    //console.log(elementRef.nativeElement);
    //console.log('Hello SelectSearchableComponent Component');    
  }
  
  //@HostListener("click", ["$event"])1
  goToList(event:any):void{
    event.preventDefault();
    event.stopPropagation();
    //event.stopPropagation();
    console.log('goToList presionado');
    this.navCrtl.push(SelectSearchablePage);
  }
  
}
