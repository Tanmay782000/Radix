import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/driver.service';
import { CustomerService } from 'src/app/customer.service';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-show-ride-details',
  templateUrl: './show-ride-details.component.html',
  styleUrls: ['./show-ride-details.component.css']
})
export class ShowRideDetailsComponent implements OnInit {

  constructor(private HomeComponent: HomeComponent, private driverservice: DriverService, private customer: CustomerService) { }

  id: number = JSON.parse(localStorage.getItem('DsendId'))
  bool: boolean = false;
  Wait: string;
  cll: any;
  TempArray: any[] = [];
  driver1: string = "./assets/pic1.jpg";
  ArrayTemp: any[] = []
  storevar: any;
  success: any;

  ngOnInit(): void {
    this.HomeComponent.DistForm.disable();
    this.customer.GetThePhone(JSON.parse(localStorage.getItem('phoneId'))).subscribe((res: any) => {
      this.TempArray = res;
      this.TempArray.forEach((res) => {
        this.storevar = res.bookingId
      })
      this.driverservice.GetResponse(this.storevar).subscribe((res: any) => {
        if (res.status) {
          setTimeout(() => {                           //<<<---using ()=> syntax
            window.location.reload();
          }, 6000);
          this.bool = false;
          this.Wait = res.status
          console.log(res.status);
        }
        else {
          this.bool = true;
          this.TempArray = res;
          this.cll = res.cancel;
          if (res.success) {
            // setTimeout(() => {                           //<<<---using ()=> syntax
            //   window.location.reload();
            this.bool = false;
            this.success = res.success
          }
          
        }
      })
      
    })
  }
}
