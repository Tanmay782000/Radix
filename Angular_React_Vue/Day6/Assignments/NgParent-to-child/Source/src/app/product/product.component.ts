import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Username:any = "";
  List : Array<any> = [];
  Price: any = 0;
  Quantity: any = "";
  discount: any = 5;

  add()
  {
  var res = (this.Price - (this.Price - this.discount)/100)
  this.List.push({"name":this.Username,"price":this.Price,"quantity":this.Quantity,"discount":res})
  console.log(res)
  }
  constructor() { }
  ngOnInit(): void {
  }

}
