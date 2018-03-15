import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

/**
 * Generated class for the SelectSearchablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-select-searchable',
  templateUrl: 'select-searchable-page.html',
})

export class SelectSearchablePage {
  title:string;
  searchText:string="";
  itemList:Array<{id:any,name:string}>;  
  items:Array<{id:any,name:string}>;
  callback;
  searching:boolean=false;
  searchControl:FormControl;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.data.title;
    this.itemList=navParams.data.itemList;    
    this.callback=navParams.data.callback;
    this.searchControl=new FormControl();
    //this.items=this.itemList;
  } 

  ionViewDidLoad() {
    this.filterItems();
    this.searchControl.valueChanges.distinctUntilChanged().debounceTime(700).subscribe(search => { 
      this.searching = false;    
      this.filterItems();
    });    
  }

  onSearchInput(){
    this.searching=true;
  }
  filterItems(){    
    if (this.searchText==="") {
      this.items=this.itemList;      
      return;
    }    
    this.items=
      this.itemList.filter(item=>{              
        return item.name.toLowerCase().indexOf(this.searchText.toLowerCase())>-1;
      });      
  }

  returnItem(item){    
    this.callback(item).then(()=>{
      this.navCtrl.pop();
    });
  }
}
