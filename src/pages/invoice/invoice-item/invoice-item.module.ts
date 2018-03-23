import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoiceItemPage } from './invoice-item';

@NgModule({
  declarations: [
    InvoiceItemPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoiceItemPage),
  ],
})
export class InvoiceItemPageModule {}
