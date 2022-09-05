import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from 'src/app/storage.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private storageservice:StorageService,private CustomerService: CustomerService, private router: Router, private route: ActivatedRoute,private form:FormBuilder) { }
  data: any;
  PhoneNumber: any;
  
  FormData = this.form.group({
    PhoneNumber : ['',[Validators.required, Validators.pattern("[6-9]\\d{9}")]]    
  })
  
  get PhoneNo()
  {
    return this.FormData.get('PhoneNumber');
  }

  async submitdata() {
    try { 
      localStorage.setItem('Phone', this.FormData.controls['PhoneNumber'].value);
      await this.CustomerService.GetOtp().subscribe((data: any) => {
        this.data = data;
        
        this.storageservice.secureStorage.setItem('Otp',this.data);
 
        console.log(this.data);
      })
      this.router.navigate(['/Mobile_varification'], { relativeTo: this.route });
    }
    catch (err) {
      console.log(err);
    }
  }

  ngOnInit(): void {
  }

}
