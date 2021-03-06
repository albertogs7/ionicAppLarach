import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage({name:'pagina2',segment:'pagina-2'})
@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2 {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }

  presentActionSheet() {
	   let actionSheet = this.actionSheetCtrl.create({
	     title: 'Selecciona un album',
	     buttons: [
	       {
	         text: 'Destructive',
	         role: 'destructive',
	         handler: () => {
	           console.log('Destructive clicked');
	         }
	       },
	       {
	         text: 'Archive',
	         handler: () => {
	           console.log('Archive clicked');
	         }
	       },
	       {
	         text: 'Cancel',
	         role: 'cancel',
	         handler: () => {
	           console.log('Cancel clicked');
	         }
	       }
	     ]
	   });
   	actionSheet.present();
 	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
