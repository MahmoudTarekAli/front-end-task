import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {UsersModule} from "./modules/users/users.module";
import {NgxMatIntlTelInputModule} from "ngx-mat-intl-tel-input";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UsersModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
