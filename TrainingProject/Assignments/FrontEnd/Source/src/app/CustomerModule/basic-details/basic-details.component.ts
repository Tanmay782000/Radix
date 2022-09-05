import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})

export class BasicDetailsComponent implements OnInit {

  data = localStorage.getItem('Phone');

  constructor(private form:FormBuilder) { }
  mydate = new Date();
  Myform = this.form.group({
  firstName : ['',[Validators.required]],
  lastName : ['',[Validators.required]],
  phoneNo : localStorage.getItem('phoneId'),
  email : ['',[Validators.required,Validators.email]],
  address : ['',[Validators.required]], 
})

  SubmitForm()
  {
    console.log(this.Myform.value);
  }

  ngOnInit(): void {
  }
}
