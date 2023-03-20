import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';

import { authInterceptorProviders } from './_helpers/auth.interceptor.service';
import { AuthGuard } from './_helpers/auth.guard';
import { HttpClientModule } from '@angular/common/http';


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
import { LoginComponent } from './views/login/login.component';
import { MenuComponent } from './views-admin/base/menu/menu.component';


const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
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

  {
    path: 'admin',
    component: MenuComponent,
    canActivate: [AuthGuard],
    // canActivateChildren: [AuthGuard],
    runGuardsAndResolvers: 'always',
    children: [
      
      { 
        path: 'home',
        loadChildren: () => import('../app/views-admin/mst-general/mst-general.module').then(x => x.MstGeneralModule)
      },
      // { path: 'admin/sejarah', loadChildren: './admin-pages/sejarah/sejarah.module#SejarahModule'},
      // { path: 'admin/contact', loadChildren: './admin-pages/contact/contact.module#ContactModule'},
      // { path: 'admin/web-preferences', loadChildren: './admin-pages/web-preferences/web-preferences.module#WebPreferencesModule'},
      // { path: 'admin/paket-wisata', loadChildren: './admin-pages/paket-wisata/paket-wisata.module#PaketWisataModule'},
      // { path: 'admin/admin', loadChildren: './admin-pages/admin/admin.module#AdminModule'},
      // { path: 'admin/berita', loadChildren: './admin-pages/berita/berita.module#BeritaModule'},
      // { path: 'admin/fasilitas', loadChildren: './admin-pages/fasilitas/fasilitas.module#FasilitasModule'},
      // { path: 'admin/post-excl', loadChildren: './admin-pages/berita-excl/berita-excl.module#BeritaExclModule'},
      { path: '', redirectTo: 'admin/home', pathMatch: 'full' }
    ]
  },


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
