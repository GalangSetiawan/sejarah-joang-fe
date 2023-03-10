import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PostsComponent } from './views/posts/posts.component';
import { ArticleComponent } from './views/article/article.component';
import { FooterComponent } from './views/base/footer/footer.component';
import { SejarahComponent } from './views/sejarah/sejarah.component';
import { KoleksiComponent } from './views/koleksi/koleksi.component';
import { KendaraanBersejarahComponent } from './views/kendaraan-bersejarah/kendaraan-bersejarah.component';
import { BendaBersejarahComponent } from './views/benda-bersejarah/benda-bersejarah.component';
import { TokohSejarahComponent } from './views/tokoh-sejarah/tokoh-sejarah.component';
import { SnkComponent } from './views/snk/snk.component';
import { FaqComponent } from './views/faq/faq.component';
import { TentangKamiComponent } from './views/tentang-kami/tentang-kami.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    ArticleComponent,
    FooterComponent,
    SejarahComponent,
    KoleksiComponent,
    KendaraanBersejarahComponent,
    BendaBersejarahComponent,
    TokohSejarahComponent,
    SnkComponent,
    FaqComponent,
    TentangKamiComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
