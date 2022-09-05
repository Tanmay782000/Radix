import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DriverService } from 'src/app/driver.service';
import { StorageService } from 'src/app/storage.service';
import { RouteConfigLoadEnd, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  constructor(private route:Router,private storageService: StorageService,private activatedRoute:ActivatedRoute ,private form: FormBuilder, private driverService: DriverService) { }

  mydate = new Date();
  VehicleArray: any[] = [];

  FormData = this.form.group({
    "driverId": [JSON.parse(localStorage.getItem('DriverId'))],
    "vehicleType": [],
    "license": [''],
    "rcbook": [''],
    "adharchad": [''],
    "vehicleName":[''],
    "createDate": this.mydate,
    "modifiedDate": this.mydate
  })

  async SubmitForm() {
    console.log(this.FormData.value);
    console.log("hello");
    this.driverService.PostVehicle(this.FormData.value).subscribe((e: any) => {
      console.log(e.driverId);
      this.route.navigate(['Login']);
    })
  }

  ngOnInit(): void {
    this.driverService.Getvehicle().subscribe((e: any) => {
      this.VehicleArray = e
      console.log(this.VehicleArray);
    })

  }
}
