import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DriverService } from 'src/app/driver.service';
import { Driver } from 'src/app/Class/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute, private form: FormBuilder, private driverService: DriverService) { }

  mydate = new Date();

  FormData = this.form.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8)]],
    phoneNo: ['', [Validators.required,Validators.pattern("[6-9]\\d{9}")]],
    address: ['', [Validators.required]],
    profilePhoto: ['', [Validators.required]],
    createDate: this.mydate,
    modifiedDate: this.mydate
  })

  error: any;

  async SubmitForm() {
    const val = this.FormData.value;
    this.PostData(val);
    this.router.navigate(['VehicleForm']);
  }

  PostData(driver: Driver) {
    this.driverService.FPostDriver(driver).subscribe((res: any) => {
      console.log(res);
      console.log(typeof(res.driverId));
      localStorage.setItem('DriverId', JSON.stringify(res.driverId));
      this.router.navigate(['VehicleForm']);
    })
  }



  ngOnInit(): void {
  }


}
