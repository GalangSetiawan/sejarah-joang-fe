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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostsComponent,
    ArticleComponent
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
