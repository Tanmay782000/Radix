import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  arr:Array<any> = []
  latestarr:Array<any> = []
  mynew = "tanmay"
  newarr: Array<any> = []
  count = 0
  myfun()
  {
    this.latestarr.push(this.arr)
    var sd = this.count++
  }
  Showdata()
  {
    this.newarr = this.arr.map((a)=>{
    return {"pname":a.postname,"desc":a.postdesc,"photo":a.postimage,"postdate":a.postdate,"likes":this.count}
    })
  }  
  listapp(data:any)
  {
   this.arr = data
  }
}
