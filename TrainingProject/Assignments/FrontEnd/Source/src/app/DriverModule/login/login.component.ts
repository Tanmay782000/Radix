import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/driver.service';
import { stringify } from 'querystring';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private driverService: DriverService, private appComponent: AppComponent, private route: Router, private router: ActivatedRoute) { }

  username: string;
  password: string;
  errors: any;
  bool2: boolean = false;

  SubmitForm() {
    this.driverService.FGetDriver(this.username, this.password).subscribe((res: any) => {
      if (res.status == "Ok") {
        this.bool2 = true;
        localStorage.setItem('driverpassword', this.password);
        this.appComponent.bool2 = true;
        this.route.navigate(['/DHome']);
      }
      else {
        this.bool2 = false;
        this.errors = "Invalid Credentials"
      }
    })
  }


  ngOnInit(): void {
   if(localStorage.getItem('driverpassword') == null)
   {
    this.bool2 = false;
   }
   else
   {
    this.bool2 = true;
   }
  }

}
