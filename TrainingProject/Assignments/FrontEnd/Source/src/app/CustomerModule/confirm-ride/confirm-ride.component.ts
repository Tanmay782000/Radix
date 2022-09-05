import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/storage.service';
import { VehicleSelectionComponent } from '../vehicle-selection/vehicle-selection.component';
import { CustomerService } from 'src/app/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-confirm-ride',
  templateUrl: './confirm-ride.component.html',
  styleUrls: ['./confirm-ride.component.css']
})
export class ConfirmRideComponent implements OnInit {

  msg:string = "tan";
  status:any;
  result:any;

  mydata = new Date();
 
  payarray:any[] = [];

  confirm = {
    source:JSON.parse(localStorage.getItem('location1')),
    destination:JSON.parse(localStorage.getItem('location2')),
    distance:JSON.parse(localStorage.getItem('distance')),
    statusId:11,
    createDate:this.mydata,
    modifiedDate:this.mydata,
    phoneId:JSON.parse(localStorage.getItem('phoneId')),
    vehicleId:JSON.parse(localStorage.getItem('VId'))
  }
  

  constructor(private securestorage:StorageService,private customerService:CustomerService,private route:Router , router:ActivatedRoute) { }

  ngOnInit(): void {
    this.result = this.securestorage.secureStorage.getItem('Price');
  }

  ConfirmRide()
  {
  this.customerService.Confirm(this.confirm).subscribe((e:any)=>{
    if(e.status == 404)
    {
      alert("404 ERROR");
      console.log(e.status);
    }
    else{
    console.log(e);
      var ptm = {
      bookingId:e.bookingId,
      amount:this.securestorage.secureStorage.getItem('Price'),
      paymentMethod:4,
      modifiedDate:this.mydata,
      createDate:this.mydata,
    };
    this.customerService.PaymentDetail(ptm).subscribe((d:any)=>{

    })
    localStorage.removeItem('Phone');
    localStorage.removeItem('Otp');  
    localStorage.removeItem('location1');
    localStorage.removeItem('location2');
    alert("your ride is confirmed")
    this.route.navigate(['/Home/RideDetails'])
  }
})
  }
}
