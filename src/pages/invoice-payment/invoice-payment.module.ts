import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoicePaymentPage } from './invoice-payment';

@NgModule({
  declarations: [
    InvoicePaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoicePaymentPage),
  ],
})
export class InvoicePaymentPageModule {}
