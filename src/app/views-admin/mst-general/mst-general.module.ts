import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/_helpers/html-pipe/html-pipe.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductService } from '../../services/dummy-service/dummy-product.service';


import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';


import { MstGeneralRoutingModule } from './mst-general-routing.module';
import { MstGeneralComponent } from './mst-general.component';



@NgModule({
  declarations: [
    MstGeneralComponent,

  ],
  imports: [
    CommonModule,
    MstGeneralRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,


    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule
    
  ],
  exports: [
    // HtmlPipe
  ],
  providers: [ProductService]

  
})
export class  MstGeneralModule { }
