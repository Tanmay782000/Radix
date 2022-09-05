import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './CustomerModule/Login/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { MobileVerificationComponent } from './CustomerModule/mobile-verification/mobile-verification.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './CustomerModule/home/home.component';
import { RegisterComponent } from './DriverModule/register/register.component';
import { CommonModule, DatePipe } from '@angular/common';
import { BasicDetailsComponent } from './CustomerModule/basic-details/basic-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {JwtModule} from '@auth0/angular-jwt';
import { VehicleSelectionComponent } from './CustomerModule/vehicle-selection/vehicle-selection.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ConfirmRideComponent } from './CustomerModule/confirm-ride/confirm-ride.component';
import { LoginComponent } from './DriverModule/login/login.component';
import { DHomeComponent } from './DriverModule/dhome/dhome.component';
import { VehicleFormComponent } from './DriverModule/vehicle-form/vehicle-form.component';
import { GuardsService } from './guards.service';
import { DriverUpdateFormComponent } from './DriverModule/driver-update-form/driver-update-form.component';
import { ShowRideDetailsComponent } from './CustomerModule/show-ride-details/show-ride-details.component';
import { PinConfirmationComponent } from './DriverModule/pin-confirmation/pin-confirmation.component';
import { RideHistoryComponent } from './DriverModule/ride-history/ride-history.component';
import { DriverService } from './driver.service';


export function tokkenGetter()
{
  return localStorage.getItem('Token');
}

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MobileVerificationComponent,
    HomeComponent,
    RegisterComponent,
    BasicDetailsComponent,
    VehicleSelectionComponent,
    ConfirmRideComponent,
    LoginComponent,
    DHomeComponent,
    VehicleFormComponent,
    DriverUpdateFormComponent,
    ShowRideDetailsComponent,
    PinConfirmationComponent,
    RideHistoryComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    JwtModule.forRoot({
      config:{
        tokenGetter : tokkenGetter,
        allowedDomains:["http://localhost:4200"],
        disallowedRoutes:[]
      }
    }),
    AutocompleteLibModule,
    ReactiveFormsModule,
  ],
  

  providers: [CustomerService,DatePipe,CommonModule],
  bootstrap: [AppComponent,DriverService],
})
export class AppModule { }
