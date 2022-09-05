import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogServiceService {
  my:String="hello"
  array:Array<any>=[{"id":"","name":"","standerd":"","divison":"",
  "city":"","state":"","country":"","contact":""}]
  constructor() {  }
  getdata(obj:any)
  {
    this.array.push(obj)
  }
  updatedata(obj:any)
  {
    var temp = this.array.findIndex(x => x.id == obj.id)
    this.array[temp] = obj
  }
  Returnarray(){
    return this.array
  }
}
