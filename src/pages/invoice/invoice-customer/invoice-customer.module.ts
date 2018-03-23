import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoiceCustomerPage } from './invoice-customer';

@NgModule({
  declarations: [
    InvoiceCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoiceCustomerPage),
  ],
})
export class InvoiceCustomerPageModule {}
