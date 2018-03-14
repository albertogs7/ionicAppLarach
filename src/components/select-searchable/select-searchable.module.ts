import {NgModule} from '@angular/core'
import {SelectSearchableComponent} from './select-searchable'
import {SelectSearchablePage} from './select-searchable-page/select-searchable-page'
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations:[
        SelectSearchableComponent,
        SelectSearchablePage,
    ],
    imports:[
        CommonModule, 
        IonicPageModule       
    ],    
    exports:[
        SelectSearchableComponent,        
    ],
    entryComponents: [SelectSearchablePage]
    })

export class SelectSearchableModule{}