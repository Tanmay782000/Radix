import { Component } from '@angular/core';
import { RootserviceService } from './rootservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'source';
  Num1:string=""
  Num2:string=""
  result:number=0
  constructor(private service:RootserviceService){
  }
  add()
  {
    this.result = this.service.addsum(parseInt(this.Num1),parseInt(this.Num2))
  }
}
