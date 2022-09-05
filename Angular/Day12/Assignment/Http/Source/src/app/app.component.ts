import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'source';
  list:Array<any>=[{
    "id":1,"name":"Tanmay","collage":"parul","salary":100000
  },{"id":2,"name":"Smit","collage":"sigma","salary":10000},{"id":3,"name":"Vir","collage":"parul","salary":15000}
,{"id":4,"name":"Vishwa","collage":"sigma","salary":50000},
]
id:any=0
name:any=""
collage:any=""
salary:any=0

  ngOnInit(): void {
    
  }
 
  myclick()
  {
   this.list.push({"id":this.id,"name":this.name,"collage":this.collage,"salary":this.salary})
  }
  yourclick()
  {
    this.list.push({"id":this.id,"name":this.name,"collage":this.collage,"salary":this.salary})
  }

}
