import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = ""
  password : string = ""
  checkthe()
  {
    if(this.username == "admin" && this.password == "admin")
    {
      alert("correct info")
    }
    else
    {
      alert("wrong info")
    }
  }
  constructor() { }
 
  ngOnInit(): void {
  } 
}
