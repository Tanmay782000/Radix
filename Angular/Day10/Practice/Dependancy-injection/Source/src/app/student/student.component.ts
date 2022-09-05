import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../log-service.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  myarr:Array<any>=[]
  id:number=0
  name:string=""  
  standerd:string=""
  divison:string=""
  city:string=""
  state:string=""
  country:string=""
  contact:string=""

  constructor(private lgc:LogServiceService) { }
  
  data()
  {
  let ob = {"id":this.id,"name":this.name,"standerd":this.standerd,"divison":this.divison,"city":this.city,"state":this.state,"country":this.country,"contact":this.contact}
  this.lgc.getdata(ob)
  console.log(ob)
  }

  ngOnInit(): void {
  this.myarr = this.lgc.Returnarray()
  }

}
