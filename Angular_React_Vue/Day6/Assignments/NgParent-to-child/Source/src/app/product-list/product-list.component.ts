import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() UserName:String = " "
@Input() price:String = " "
@Input() quantity:String = " "
@Input() discount:any = " "
  constructor() { }

  ngOnInit(): void {
  }

}
