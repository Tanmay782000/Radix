import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootserviceService {
  
  addsum(a:number,b:number)
  {
    return a+b;
  }

  constructor() { }
}
