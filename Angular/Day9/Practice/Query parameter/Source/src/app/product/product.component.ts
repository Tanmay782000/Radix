import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  typeproduct:Array<any>= [
    {typeproductid:1,typeproductname:"household stuff",mainproductid:1},
    {typeproductid:2,typeproductname:"dairy stuff",mainproductid:1},
    {typeproductid:3,typeproductname:"cotton cloths",mainproductid:2},
    {typeproductid:4,typeproductname:"linen cloths",mainproductid:2},
  {typeproductid:5,typeproductname:"smart phones",mainproductid:3},
{typeproductid:6,typeproductname:"television",mainproductid:3}]
  constructor(private activeroute:ActivatedRoute) 
  {

  }
Mainid:any = ""
final:Array<any> = []
  ngOnInit(): void {
  this.activeroute.params.subscribe(p=>{ 
    this.Mainid=p["id"]
    this.final =this.typeproduct.filter(p=>p.mainproductid == this.Mainid)
  })
  }

}
