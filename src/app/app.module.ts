import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { authInterceptorProviders } from './_helpers/auth.interceptor.service';
import { CommonModule, CurrencyPipe } from '@angular/common';


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
import { LoginComponent } from './views/login/login.component';
import { SidenavComponent } from './views/base/sidenav/sidenav.component';
import { MenuComponent } from './views-admin/base/menu/menu.component';


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
    TentangKamiComponent,
    LoginComponent,
    SidenavComponent,
    MenuComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    
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
  providers: [authInterceptorProviders,CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
