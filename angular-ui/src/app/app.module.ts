import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SortComponent } from './sort/sort.component';
import { SearchComponent } from './search/search.component';
import { CubeComponent } from './cube/cube.component';
import { CardComponent } from './card-component/card.component';
import { TagInfoTextComponent } from './tag-info-text/tag-info-text.component';
import { CardService } from './services/card.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { CardUtil } from './utils/card.util';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    CardComponent,
    SortComponent,
    SearchComponent,
    CubeComponent,
    TagInfoTextComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CardService, CardUtil, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
