import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoiceContentPage } from './invoice-content';

@NgModule({
  declarations: [
    InvoiceContentPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoiceContentPage),
  ],
})
export class InvoiceContentPageModule {}
