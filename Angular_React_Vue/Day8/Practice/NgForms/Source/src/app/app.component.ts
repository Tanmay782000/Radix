import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'source';

  newarr:Array<any>=[]
  myForm : FormGroup
  constructor(private formbuilder:FormBuilder){
    this.myForm = new FormGroup(
      {
        username : new FormControl(),
        password : new FormControl(),
        gender : new FormArray([new FormControl("male"),new FormControl("female")]),
        address : new FormGroup({
         house_no:new FormControl,
         soc_name:new FormControl,
         landmark:new FormControl,
        })
      }
    )
  }
  get gethobbies()
  { 
   return this.myForm.get("gender") as FormArray
  }
  show()
  { 
    var tm = this.newarr.push(this.myForm.value)
    var sort = this.newarr.map((e)=>{
      return [{"username":e.username,"password":e.password,"gender":e.gender,"address":e.map((a:any)=>(
        [{"landmark":a.landmark}]
      ))}
    ]})
    
  }
  setdata():void{
         this.myForm.setValue({
         username:"tanmay",
         password:"tanmay123",
         gender:"male",
         address:([{
         house_no:25,
         soc_name:"parvati",
         landmark:"airport"
    }])}
    )}
    patchdata():void{
            this.myForm.patchValue({
             username:"vishwa",
             password:"tanmay123",
             gender:"male",
             address:{
             house_no:25,
             soc_name:"parvati",
             landmark:"airport"
        }
      }
        )}
        
}
