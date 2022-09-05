import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/driver.service';


@Component({
  selector: 'app-ride-history',
  templateUrl: './ride-history.component.html',
  styleUrls: ['./ride-history.component.css']
})
export class RideHistoryComponent implements OnInit {

  Array: any[] = [];
  Confirmed: any[] = [];
  bool:boolean;
  DId:any = JSON.parse(localStorage.getItem('DriverId'));
  constructor(private driverService: DriverService) { }

  cancel() {
    this.driverService.GetRideHistory(this.DId).subscribe((res: any) => {
      this.Array = res;
      this.bool = false;
      var obj = this.Array.filter(e => e.objName == "CANCELED")
      if (obj) {
        this.Confirmed = obj;
        console.log(this.Confirmed);
      }
    })
  }


pending(){
this.driverService.GetRideHistory(this.DId).subscribe((res: any) => {
  this.Array = res;
  this.bool = false;
  var obj = this.Array.filter(e => e.objName == "pending")
  if (obj) {
    this.Confirmed = obj;
    console.log(this.Confirmed);
  }
})
}

confirm()
{
  this.driverService.GetRideHistory(this.DId).subscribe((res: any) => {
    this.Array = res;
    this.bool = false;
    var obj = this.Array.filter(e => e.objName == "CONFIRMED")
    if (obj) {
      this.Confirmed = obj;
      console.log(this.Confirmed);
    }
  })
}

ngOnInit() {
  this.driverService.GetRideHistory(this.DId).subscribe((res: any) => {
    this.Array = res;
      console.log(this.Array);
      this.bool = true;
      console.log(typeof(this.DId));
    })
}
}
