import { Component,OnInit } from '@angular/core';
import { SampleService } from './sample.service';
import { FormsModule,FormBuilder,FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'source';
  Array1:Array<any>=[]
  userarray:FormGroup
  user:Array<any>=[]
  constructor(private data:SampleService,private form:FormBuilder){
   this.userarray = this.form.group({
   id:[0],
   name:[""],
   email:[""],
   gender:[""],
   status:[""]
   })  
  }

  ngOnInit(): void {
    this.data.getuser().subscribe((p:any)=> {
      this.Array1 = p
    })
  }

  add()
  {
    this.user = this.userarray.value
    this.data.postdata(this.user).subscribe((res)=>{ 
    this.Array1.push(res)
    })
  }

  edit(obj:any)
  {
   return this.userarray.setValue({"id":obj.id,"name":obj.name,"email":obj.email,"gender":obj.gender,"status":obj.status})
  }

  updatenew(obj:any)
  { 
    this.user = this.userarray.value
    this.data.update(this.user,obj.id).subscribe((et:any)=> {
    this.Array1 = et
    console.log(et)
    })
  }
}
