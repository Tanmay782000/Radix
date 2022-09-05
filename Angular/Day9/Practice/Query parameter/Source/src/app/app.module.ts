import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { IndiaComponent } from './india/india.component';
import { RusComponent } from './rus/rus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ErrorComponent,
    IndiaComponent,
    RusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
