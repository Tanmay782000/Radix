import { ThisReceiver } from '@angular/compiler';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Source';
  
  EmployeeId: String = ""
  Name: String = ""
  Address: String = ""
  Gender: any = [{"male":"male","female":"female"}]
  Hobbies: String = ""
  mydate : any = ""
  newarr : any = []
  DOJ: any = new Date() 
  Employee: Array<any> = [{}] 
  myarr:any = []
  yourarr: any = []
  
  hello()
  {
  if(this.EmployeeId  && this.Name)
  {
    this.Employee.push({"employeeId":this.EmployeeId,"name":this.Name,"address":this.Address,"gender":this.Gender,"hobbies":this.Hobbies,"DOJ":this.DOJ})
    this.EmployeeId = ' '
    this.Name = ' '
    this.Address = ' '
    this.Gender = ' '
    this.Hobbies = ' '
    this.DOJ = ' '
  }
}
  marray()
  {
    var s = new Date(this.DOJ)
    this.mydate = s.getMonth()
    this.newarr = this.Employee.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.newarr.map((am:any)=> {
      return {empid:am.employeeId,name:am.name,address:am.address,gender:am.gender,hobbies:am.hobbies,DOJ:am.DOJ}
    })
    this.Employee = this.newarr
  }
}