import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginComponent } from './DriverModule/login/login.component';


@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(private router:Router,private jwthelper:JwtHelperService) { }

  canActivate()
  {
    const token = localStorage.getItem('Token');
    if(token && !this.jwthelper.isTokenExpired(token))
    {
      return true;
    }
    else
    {
    this.router.navigate(['Customer']);
    return false;
    }
  }
}
