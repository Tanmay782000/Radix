import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  constructor() { }
  img:any="https://www.mapsofindia.com/images2/india-map.jpg"
  ngOnInit(): void {
  }

}
