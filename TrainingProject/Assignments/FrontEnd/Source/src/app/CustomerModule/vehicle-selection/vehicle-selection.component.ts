import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { StorageService } from 'src/app/storage.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {


  Ldistance:any;

  constructor(private homeComponent:HomeComponent,private securestorage: StorageService, private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  Hcar: any = "./assets/bike.jfif";
  Bike: any = "./assets/Hcar.jfif";
  Riksha: any = "./assets/riksha.jfif";
  Suv = "./assets/suv.jfif";
  UberCar: any = "./assets/UberGo_v1.png";
  UberRiksha: any = "./assets/URiksha.png";
  UberBike: any = "./assets/UBike.png";
  UberUXl: any = "./assets/UXl.png";
  // Dist: any = localStorage.getItem('distance');
  bool:boolean

  ngOnInit(): void {
  this.homeComponent.DistForm.disable();
  this.Ldistance = localStorage.getItem('distance');

  if(localStorage.getItem('location1') == null)
  {
    this.bool = false
    console.log("boolean false");
  }
  else{
    this.bool = true
    console.log("boolean true");
  }
  }


  async GetPrice(vehicleID: number) {
    if(this.Ldistance == null)
    {
      console.log("dadasdadasd");
      alert("You Need To Procced again");
    }
    else{
    var Dist = this.Ldistance;
    console.log(vehicleID)
    console.log(Dist);
    localStorage.setItem('VId', JSON.stringify(vehicleID));
    console.log(vehicleID);
    await this.customerService.GetPrice(Dist, vehicleID).subscribe((res: any) => {
      console.log(res);
      this.securestorage.secureStorage.setItem('Price', res);
      window.location.reload();
    })
    this.router.navigate(["./ConfirmRide"], { relativeTo: this.route });
  }
}
}
