import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileVerificationComponent } from './CustomerModule/mobile-verification/mobile-verification.component';
import { CustomerComponent } from './CustomerModule/Login/customer.component';
import { HomeComponent } from './CustomerModule/home/home.component';
import { RegisterComponent } from './DriverModule/register/register.component';
import { BasicDetailsComponent } from './CustomerModule/basic-details/basic-details.component';
import { VehicleSelectionComponent } from './CustomerModule/vehicle-selection/vehicle-selection.component';
import { GuardsService } from './guards.service';
import { ConfirmRideComponent } from './CustomerModule/confirm-ride/confirm-ride.component';
import { LoginComponent } from './DriverModule/login/login.component';
import { DHomeComponent } from './DriverModule/dhome/dhome.component';
import { VehicleFormComponent } from './DriverModule/vehicle-form/vehicle-form.component';
import { DriverUpdateFormComponent } from './DriverModule/driver-update-form/driver-update-form.component';
import { ShowRideDetailsComponent } from './CustomerModule/show-ride-details/show-ride-details.component';
import { PinConfirmationComponent } from './DriverModule/pin-confirmation/pin-confirmation.component';
import { RideHistoryComponent } from './DriverModule/ride-history/ride-history.component';


const routes: Routes = [
  { path: '', redirectTo: "Home", pathMatch: "full" },
  { path: 'Home', component: HomeComponent,children:[
  
    {path:'RideDetails',component:ShowRideDetailsComponent,canActivate:[GuardsService]},
    
    {path:'VehicleDetails',component:VehicleSelectionComponent,canActivate:[GuardsService],children:[{

      path:'ConfirmRide',component:ConfirmRideComponent
      
    }]},
]},
 
  {path:'BasicDetails',component:BasicDetailsComponent,canActivate:[GuardsService]},

  { path: 'Customer', component: CustomerComponent},

  {
    path: 'Mobile_varification', component: MobileVerificationComponent
  },

  //DRIVER
  { path:'Driver', component: RegisterComponent},
  { path:'Login' , component: LoginComponent },
  { path:'DHome',component:DHomeComponent },
  { path:'DriverUpdateForm',component:DriverUpdateFormComponent, pathMatch: 'full'},
  { path:'VehicleForm',component:VehicleFormComponent},
  { path:'PinConfimation',component:PinConfirmationComponent},
  { path:'RideHistory',component:RideHistoryComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
