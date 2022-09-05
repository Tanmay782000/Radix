import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'source';
  newarr:Array<any>= []
  myForm : FormGroup
  constructor(){
  this.myForm = new FormGroup({
   Name:new FormGroup({
     firstname: new FormControl(null,Validators.required),
     middlename: new FormControl(null,Validators.required),
     lastname : new FormControl(null,Validators.required)
   }),  
   DOB:new FormControl(),
   Place_of_birth: new FormControl(),
   First_language:new FormControl(),
   Address:new FormGroup(
   {
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    pin: new FormControl()
   }),
   mother:new FormGroup({
    firstname: new FormControl(),
    middlename: new FormControl(),
    lastname : new FormControl()        
   }),
   Email: new FormControl(null,[Validators.email,Validators.required]),
   Education_Qualification: new FormControl(),
   Profession: new FormControl(),
   Designation: new FormControl(),
   Phone:new FormControl(null,[Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.required]),
   Emergency_List: new FormArray([new FormControl(""),new FormControl("")]),
   Relation:new FormControl(),
   Reference_Details: new FormArray([new FormControl(""),new FormControl("")]),
  })
  }
 
  get referencechild(){
    return this.myForm.get("Reference_Details") as FormArray 
  }
   
  get emergencychild(){
    return this.myForm.get("Emergency_List") as FormArray
  }
 
  submitdata(){
   var dm = this.newarr.push(this.myForm.value)
    var secondarr = this.newarr.map((e)=>{
    })
    }

  get fname(){
    return this.myForm.get("Name.firstname")
  }
  get mname(){
    return this.myForm.get("Name.middlename")
  }
  get lname(){
    return this.myForm.get("Name.lastname")
  }
  get email(){
    return this.myForm.get('Email')
  }

  get phone()
  {
    return this.myForm.get("Phone")
  }
//   Name:new FormGroup({
//     firstname: new FormControl(),
//     middlename: new FormControl(),
//     lastname : new FormControl()
//   }),  
//   DOB:new FormControl(),
//   Place_of_birth: new FormControl(),
//   First_language:new FormControl(),
//   Address:new FormGroup(
//   {
//    city: new FormControl(),
//    state: new FormControl(),
//    country: new FormControl(),
//    pin: new FormControl()
//   }),
//   mother:new FormGroup({
//    firstname: new FormControl(),
//    middlename: new FormControl(),
//    lastname : new FormControl()        
//   }),
//   Email: new FormControl(),
//   Education_Qualification: new FormControl(),
//   Profession: new FormControl(),
//   Designation: new FormControl(),
//   Phone:new FormControl(),
//   Emergency_List: new FormArray([new FormControl(""),new FormControl("")]),
//   Relation:new FormControl(),
//   Reference_Details: new FormArray([new FormControl(""),new FormControl("")]),
//  })
//  }
}
