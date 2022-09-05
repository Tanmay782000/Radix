import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = ""
  address: string = ""
  PanNumber: string = ""
  res : string
  res2 : string
  res3 : string
  signup()
  {
  this.res = this.name
  this.res2 = this.address
  this.res3 = this.PanNumber    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
