import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';

import {AppSettings} from '../providers/settings';
import {DataService} from '../providers/dataservice';

import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import {MainPage} from '../pages/main/main';
import { HomePage } from '../pages/home/home';

//Components
import { SideMenuComponent } from '../components/side-menu/side-menu';
import { InvoicePage } from '../pages/invoice/invoice';
import { InvoiceDetailsPage } from '../pages/invoice/invoice-details/invoice-details';
import { InvoiceContentPage } from '../pages/invoice/invoice-content/invoice-content';
import { ShareService } from '../providers/shareservice';
import { SelectSearchableModule } from '../components/select-searchable/select-searchable.module';
import { InvoiceCustomerPage } from '../pages/invoice/invoice-customer/invoice-customer';
import { InvoiceItemPage } from '../pages/invoice/invoice-item/invoice-item';
import { CustomerSearchPage } from '../pages/customer-search/customer-search';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { InvoicePaymentPage } from '../pages/invoice-payment/invoice-payment';
import { PaymentDetailsPage } from '../pages/payment-details/payment-details';
//import { SelectSearchablePage } from '../components/select-searchable/select-searchable-page/select-searchable';
//import {Page2} from '../pages/page2/page2';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    MainPage,
    SideMenuComponent,    
    InvoicePage,
    InvoiceContentPage,
    InvoiceDetailsPage,
    InvoiceCustomerPage,
    InvoicePaymentPage,
    InvoiceItemPage,
    ItemDetailsPage,
    CustomerSearchPage,
    PaymentDetailsPage

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    HttpModule,
    SelectSearchableModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MainPage,
    HomePage,    
    SideMenuComponent,    
    InvoicePage,
    InvoiceContentPage,
    InvoiceDetailsPage,
    InvoiceCustomerPage,
    InvoicePaymentPage,
    InvoiceItemPage,
    ItemDetailsPage,
    CustomerSearchPage,
    PaymentDetailsPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    DataService,        
    AppSettings,
    ShareService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},      
  ]
})
export class AppModule {
  
}
