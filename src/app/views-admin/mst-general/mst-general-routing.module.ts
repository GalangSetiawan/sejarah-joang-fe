import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MstGeneralComponent } from './mst-general.component';

const routes: Routes = [
  {
    path: '',
    component: MstGeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstGeneralRoutingModule {}
