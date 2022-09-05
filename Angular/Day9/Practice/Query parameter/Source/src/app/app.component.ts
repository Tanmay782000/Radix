import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'source';
  mainproduct:Array<any>=[{"mainproductid":1,"mainproductname":"groceries"},
  {"mainproductid":2,"mainproductname":"cloths"},{"mainproductid":3,"mainproductname":"electronics"}]
  constructor(private route:ActivatedRoute,private router:Router){
  }
  ngOnInit(){ 
  }
  india(){
    this.router.navigate(['india'],{relativeTo: this.route})
  }
  russia(){
    this.router.navigate(['russia'],{relativeTo:this.route})
  }
}
