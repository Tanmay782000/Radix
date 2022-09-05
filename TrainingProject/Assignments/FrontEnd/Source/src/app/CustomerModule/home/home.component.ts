import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: any[] = [];
  constructor(public customerService: CustomerService, private form: FormBuilder, private route: ActivatedRoute, private router: Router, private jwthelper: JwtHelperService, private appComponent: AppComponent) { }
  value1: any;
  value2: any;
  value3: any;

  count: boolean = false;
  result: any;
  error:any;

  DistForm = this.form.group({
    Pickup: ['', [Validators.required]],
    Destination: ['', [Validators.required]]
  })

  CalculateAmount() {
    if (this.appComponent.bool == true) {
      this.customerService.GetCalculation(this.value1, this.value2).subscribe((res: any) => {
        this.result = res;
        if(res.status)
        {
          console.log(res.status)
          this.count = false
          this.error = res.status;
        }
        else{
          console.log(this.result);
          localStorage.setItem('location1',this.value1);
          localStorage.setItem('location2',this.value2);
          localStorage.setItem('distance',this.result);            
          this.router.navigate(['./VehicleDetails'], { relativeTo: this.route });
          this.count = true;
          this.DistForm.disable();
        }
      })
    }

    else {
      console.log("Auth Required");
      this.router.navigate(['./Customer']);
    }
  }

  ngOnInit(): void {
    this.customerService.GetLocation().subscribe((res: any) => {
      this.customerService.location = res
    })
    localStorage.removeItem('driverpassword');
  }


}
