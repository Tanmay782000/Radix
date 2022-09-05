import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder,Validators } from '@angular/forms';
enum feedback{good="Good",poor="Poor",average="Average",best="Best"}
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit { 
  @Output() Lapp:EventEmitter <any> = new EventEmitter
  myForm : FormGroup 
  DataArray:Array<any>=[]
  myarray:Array<any>=[]
  newarr:Array<any>=[]
  searchtext:any
  date:any
  constructor() {
    this.myForm = new FormGroup({
      OrderId:new FormControl(),
      Name:new FormControl(),
      FeedBackInfo:new FormControl(),
      FeedBackDate:new FormControl(new Date().toISOString().slice(0, 10)),
      FeedBackDetails:new FormControl()
    })
   }
  
  get node()
  {
    return feedback
  } 
   
  submitdata(){
  var getdate = new Date()
  this.DataArray.push(this.myForm.value)
  console.log(this.myarray)
  console.log(this.DataArray)
}
  ngOnInit() {
    this.Lapp.emit(this.DataArray)
  }
}