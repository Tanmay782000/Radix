import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/driver.service';

@Component({
  selector: 'app-driver-update-form',
  templateUrl: './driver-update-form.component.html',
  styleUrls: ['./driver-update-form.component.css']
})
export class DriverUpdateFormComponent implements OnInit {

  constructor(private driverservice:DriverService) { }
  
  array:any[] = [];

  ngOnInit(): void {
    this.driverservice.GetLoggedInDriver(localStorage.getItem('driverpassword')).subscribe((res:any)=>{
      this.array = res;
      console.log(this.array)
    })
  }

}
