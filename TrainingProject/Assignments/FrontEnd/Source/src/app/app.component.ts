import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Uber';
  bool:boolean;
  bool2:boolean ;

  constructor(private router:Router,route:ActivatedRoute){}
  

  isAuthenticated()
  {
    var jwthelper = new JwtHelperService();
    const token:any = localStorage.getItem("Token");
    if(token && !jwthelper.isTokenExpired(token))
    {
      this.bool = true;
      console.log("true");
    }
    else{
      this.bool = false;
      console.log("false");
    }
  }

  Logout()
  {
    localStorage.removeItem('Token');
    this.router.navigate(['/Customer']);
    console.log("home");
    window.location.reload();
  }


  ngOnInit(): void {
   this.isAuthenticated()
   if(localStorage.getItem('driverpassword') == null)
   {
    this.bool2 = false;
    console.log("bool false");
   }
   else{
    this.bool2 = true;
    console.log("bool true");
   }
  }

}
