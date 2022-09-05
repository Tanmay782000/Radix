import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Phone_Data } from 'src/app/Class/customer';
import { CustomerService } from 'src/app/customer.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-mobile-verification',
  templateUrl: './mobile-verification.component.html',
  styleUrls: ['./mobile-verification.component.css'],
  providers:[DatePipe]
})
export class MobileVerificationComponent implements OnInit {
  constructor(private storageservice:StorageService,public custservice:CustomerService,private datePipe: DatePipe,private router: Router,private route: ActivatedRoute,private form:FormBuilder) { }

  TempCode : number;
  array:any[]=[];

  data:any;
  result:any;

  check:any=localStorage.getItem('Otp')
  Phone:any=localStorage.getItem('Phone')

  getdate = new Date();
  Tdate:any = this.datePipe.transform(this.getdate,'yyyy-MM-dd');
  Phone_no:number=JSON.parse(this.Phone);
  
  SetDate = new Date();

  var1:any = localStorage.getItem('Phone');
  var2 = JSON.parse(this.var1);

  invalidLogin:boolean;

  InitNumber:number;

  OTPForm = this.form.group({
    OTP : ['',[Validators.required]]
  })

  // FormData:Phone_Data = {
  //   phoneId:this.OTPForm.controls['OTP'].value,
  //   mobileNo:this.var2,
  //   createDate:this.SetDate,
  //   modifiedDate:this.SetDate
  // }

  FormData:Phone_Data = {
    mobileNo:JSON.parse(localStorage.getItem('Phone')),
    createDate:this.SetDate,
    modifiedDate:this.SetDate
  }

 async SubmitMob()
  {
    await this.custservice.PostNumber(this.FormData)
    .subscribe((res:any) => {
        localStorage.setItem('phoneId',res.phoneId);
        localStorage.setItem('Token',res.token); 
        this.invalidLogin = false;      
        console.log(res);
        window.location.reload();
    })
    this.router.navigate(['/Home'],{relativeTo:this.route})
  }

  async CheckOup()
  {
    if(this.TempCode == this.storageservice.secureStorage.getItem('Otp'))
    {
      this.SubmitMob();
    }
    else
    {
    console.log(this.storageservice.secureStorage.getItem('Otp'));
    alert("please enter right otp");
    }
  }

  ngOnInit(): void {
    this.InitNumber = JSON.parse(localStorage.getItem('Phone'));
    console.log(typeof(this.Phone_no));
  }

}
