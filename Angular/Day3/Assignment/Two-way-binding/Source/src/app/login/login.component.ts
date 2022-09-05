import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = ""
  password:string = ""
  printresult()
  {
    if(this.username == "admin" && this.password == "admin")
    {
      alert("right password")
    }
    else
    {
      alert("wrong password")
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
