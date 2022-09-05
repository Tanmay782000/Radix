import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  userDetails:Array<any> = [{userID:1,userName:"Roy",Gender:"Male",designation:"Senior Developer",PanNumber:"335454"},
  {userID:2,userName:"Rohit",Gender:"Male",designation:"Junior Developer",PanNumber:"abcd"}]  
  newarray:Array<any>=[]
  keyID:any=""
  ngOnInit(): void {
   this.route.params.subscribe(p=> {
     this.keyID = p['id'];
     this.newarray = this.userDetails.filter(p=>p.userID == this.keyID)
   })
  }

}
