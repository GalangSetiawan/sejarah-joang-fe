import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MstPostComponent } from './mst-post.component';

const routes: Routes = [
  {
    path: '',
    component: MstPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MstPostRoutingModule {}
