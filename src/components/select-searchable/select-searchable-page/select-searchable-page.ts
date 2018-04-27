import { Component,ViewChild  } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

//import 'rxjs/add/observable/fromEvent';
//import { distinctUntilChanged } from 'rxjs/operators';
//import 'rxjs/add/operator/distinctUntilChanged';
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

export class SelectSearchablePage{
  @ViewChild('searchBox') private searchBox ;

  title:string;
  itemValue:string;
  itemDescription:string;
  searchText:string="";
  itemList:Array<any>;  
  items:Array<any>;
  callback;
  searching:boolean=false;
  //searchBox:FormControl;
  searchTerm$ = new Subject<string>();
  //ejecutado: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.title=navParams.data.title;
    this.itemValue=navParams.data.itemValue;
    this.itemDescription=navParams.data.itemDescription;
    this.itemList=navParams.data.itemList;    
    this.callback=navParams.data.callback;
    this.items=this.itemList;
    //this.searchBox=new FormControl();
    this.searchTerm(this.searchTerm$).subscribe(search=>{
      this.searching=true;
      if (search==="") {
        this.items=this.itemList;
      }
      else {
        this.items=
        this.itemList.filter(item=>{              
          return item[this.itemDescription].toLowerCase().indexOf(search.toLowerCase())>-1;
        });
      }      
      this.searching=false;      
    });
  } 

  ionViewDidLoad() {    
    
  }

  ionViewDidEnter(){
    setTimeout(()=>this.searchBox.setFocus(),200);
  }

  searchTerm(term:Observable<string>) {   
    return term.debounceTime(700)
      .distinctUntilChanged()
  }

  returnItem(item){    
    this.callback(item).then(()=>{
      this.navCtrl.pop();
    });
  }
}
