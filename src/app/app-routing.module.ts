import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PostsComponent } from './views/posts/posts.component';
import { ArticleComponent } from './views/article/article.component';
import { SejarahComponent } from './views/sejarah/sejarah.component';
import { KoleksiComponent } from './views/koleksi/koleksi.component';
import { KendaraanBersejarahComponent } from './views/kendaraan-bersejarah/kendaraan-bersejarah.component';
import { BendaBersejarahComponent } from './views/benda-bersejarah/benda-bersejarah.component';
import { TokohSejarahComponent } from './views/tokoh-sejarah/tokoh-sejarah.component';
import { SnkComponent } from './views/snk/snk.component';
import { FaqComponent } from './views/faq/faq.component';
import { TentangKamiComponent } from './views/tentang-kami/tentang-kami.component';


const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "post/:slug", component: PostsComponent },
  { path: "article/:slug", component: ArticleComponent },
  { path: "sejarah", component: SejarahComponent },
  { path: "koleksi", component: KoleksiComponent },
  { path: "benda-sejarah", component: BendaBersejarahComponent },
  { path: "tokoh-sejarah", component: TokohSejarahComponent },
  { path: "kendaraan-sejarah", component: KendaraanBersejarahComponent },
  { path: "snk", component: SnkComponent },
  { path: "faq", component: FaqComponent },
  { path: "tentang", component: TentangKamiComponent },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
