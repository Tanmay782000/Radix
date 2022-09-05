import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { StorageService } from 'src/app/storage.service';
import { DriverService } from 'src/app/driver.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pin-confirmation',
  templateUrl: './pin-confirmation.component.html',
  styleUrls: ['./pin-confirmation.component.css']
})
export class PinConfirmationComponent implements OnInit {

  constructor(private route:Router,private activatedRoute:ActivatedRoute,private formbuilder:FormBuilder,private storageservice:StorageService,private driverservice:DriverService) { }
  
  error:string;

  FormData = this.formbuilder.group({
   pin : []    
  })

  
  submitdata()
  {
    var dm = JSON.parse(this.FormData.get('pin').value);
    console.log("start");
    this.driverservice.PinRedirectio(this.storageservice.secureStorage.getItem('BookingId'),dm).subscribe((res:any)=>{
        if(res.pinNotMatched)
        {
          this.error = res.pinNotMatched;
          console.log(this.error);
        }
        else{
          this.route.navigate(['/DHome']);
          console.log(res);
          console.log("printed");
        }
    })
  }

  ngOnInit(): void {
  }

}
