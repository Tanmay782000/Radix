import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentServiceService } from './student-service.service';
import { LogServiceService } from './log-service.service';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentServiceService,LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
