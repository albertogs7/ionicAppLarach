import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu';
import { SelectSearchableComponent } from './select-searchable/select-searchable';
import { SelectSearchablePage } from './select-searchable/select-searchable-page/select-searchable';
import { IonicPageModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { SelectSearchableModule } from './select-searchable/select-searchable.module';
//import { SelectSearchablePage } from './select-searchable/select-searchable-page/select-searchable';


@NgModule({
	declarations:[SideMenuComponent,
		//SelectSearchableModule    
				  //SelectSearchableComponent,				  
				  //SelectSearchablePage,
				],
	imports: [
		//SelectSearchableModule
		//IonicPageModule.forChild(SelectSearchablePage),
	],
	exports: [SideMenuComponent,    
//				SelectSearchableModule
			  //SelectSearchableComponent,			  
			  //SelectSearchablePage,
			]
})
export class ComponentsModule {}
