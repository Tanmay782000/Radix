import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/driver.service';
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-dhome',
  templateUrl: './dhome.component.html',
  styleUrls: ['./dhome.component.css']
})
export class DHomeComponent implements OnInit {

  constructor(private driverservice: DriverService,private route:Router,private router:Router,private storageService:StorageService) { }
  error:any;
  array:any[] = [];
  bool:boolean;
  datas:any = {}


  ngOnInit(): void {

    this.driverservice.GetLoggedInDriver(localStorage.getItem('driverpassword')).subscribe((res:any)=>{
      if(res.status)
      {
      this.error = res.status
        this.bool = true;
      }
      else{
        console.log(res.email);
        res.forEach((element:any) => {
           this.datas = element
        });
        console.log(this.datas);

        localStorage.setItem('DsendId',this.datas.id);
        this.driverservice.ShowBookingRequest(this.datas.vehicleType,this.datas.address).subscribe((res1:any)=>{
        console.log(this.datas.vehicleId);
        console.log(this.datas.address);
        this.array = res1;
        console.log(this.array);
       })
      }
    })
  }


  Cancel(bookingId:any,phoneId:any,vehicleId:any,paymentId:any,driverId:any)
  {
    var driverId2 = this.datas.id;
    console.log(bookingId);
    console.log(paymentId);
    this.driverservice.CancelCRequest(bookingId,phoneId,vehicleId,paymentId,driverId2).subscribe((res)=>{
      alert("request canceled");
      console.log(res);
      window.location.reload();
    })
  }

  
  Confirm(bookingId:any,phoneId:any,vehicleId:any,paymentId:any,driverId:any)
  {
    var driverId2 = this.datas.id;
    this.storageService.secureStorage.setItem('BookingId',bookingId);
    this.driverservice.ConfirmRequest(bookingId,phoneId,vehicleId,paymentId,driverId2).subscribe((res:any)=>{
      alert("request Confirmed");
      console.log(res);
      this.route.navigate(['PinConfimation']);
    })
    console.log("print heere");
  }
}


