import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
 placeholder1 : String = "Only numbers allowed";
 name : string;
 result1: number;
 result2: number;
 result3: number;
 value1: string;
 value2: string;
 add()
 {
 console.log(this.result1 = parseInt(this.value1) + parseInt(this.value2))
 console.log(this.result2 = parseInt(this.value1) * parseInt(this.value2))
 console.log(this.result3 = parseInt(this.value1) / parseInt(this.value2))
 }


  constructor() { }

  ngOnInit(): void {
  }

}
