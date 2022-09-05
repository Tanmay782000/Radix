import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {
length:string = ""
width:string = ""
res:number  
rectangle()
{
  this.res = parseInt(this.length) * parseInt(this.width)
}
  constructor() { }

  ngOnInit(): void {
  }

}
