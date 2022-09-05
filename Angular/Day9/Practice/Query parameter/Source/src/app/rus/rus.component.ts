import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rus',
  templateUrl: './rus.component.html',
  styleUrls: ['./rus.component.css']
})
export class RusComponent implements OnInit {
  img:any="https://geology.com/world/russia-map.gif"
  constructor() { }

  ngOnInit(): void {
  }

}
