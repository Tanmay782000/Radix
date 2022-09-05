import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {

@Output() pfunction:EventEmitter<any> = new EventEmitter 
  
  constructor() { }
  username:String = " "
  ngOnInit() {
    this.pfunction.emit(this.username)
  }

}
