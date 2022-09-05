import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { IndiaComponent } from './india/india.component';
import { ProductComponent } from './product/product.component';
import { RusComponent } from './rus/rus.component';

const routes: Routes = [
 
  {path:"product/:id",component:ProductComponent},
  {path:"india",component:IndiaComponent},
  {path:"russia",component:RusComponent},
  {path:'',redirectTo:'/product/:id', pathMatch: 'full' },
  {path:"**",component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
