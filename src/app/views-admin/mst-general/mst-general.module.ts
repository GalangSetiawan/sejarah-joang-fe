import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/_helpers/html-pipe/html-pipe.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    
  ],
  exports: [
    // HtmlPipe
  ]
  
})
export class  MstGeneralModule { }
