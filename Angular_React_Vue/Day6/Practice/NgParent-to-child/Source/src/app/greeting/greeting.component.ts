import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  @Input() Name = ""
  constructor() { }

  ngOnInit(): void {
  }

}
