import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component'
import {FeedBackComponent} from './feed-back/feed-back.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,Ng2SearchPipeModule,NgbModule ],
  declarations: [ AppComponent,FormComponentComponent,FeedBackComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
