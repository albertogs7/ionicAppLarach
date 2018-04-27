import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { DataService, ICustomerItem } from '../../providers/dataservice';
import { AppSettings } from '../../providers/settings';

/**
 * Generated class for the CustomerSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-search',
  templateUrl: 'customer-search.html',
})
export class CustomerSearchPage {  
  @ViewChild('searchBox') private searchBox ;
  searchTerm$ = new Subject<string>();
  searching:boolean=false;
  results:ICustomerItem[];
  callback;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService, public settings:AppSettings) {
    this.callback=navParams.data.callback;

    this.searchCustomer(this.searchTerm$).subscribe(search=>{
      this.searching=true;
      dataService.getCustomers$(search).subscribe(results=>{
        this.results=results;
        this.searching=false;
      })            
    });
  }

  ionViewDidEnter(){
    setTimeout(()=>this.searchBox.setFocus(),200);
  }

  searchCustomer(term:Observable<string>) {   
    return term.debounceTime(this.settings.defaultDebounceTime).distinctUntilChanged();
  }

  returnItem(item){    
    this.callback(item).then(()=>{
      this.navCtrl.pop();
    });
  }
}
