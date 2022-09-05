import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogServiceService } from '../log-service.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  myid:any=""
  name:any=""
  updatearray:Array<any>=[{}]
  constructor(private Aroute:ActivatedRoute,private service:LogServiceService) { }

  update()
  {
   
  }

  ngOnInit(): void {
  this.Aroute.params.subscribe((a)=> { 
  a['id'] = this.myid 
  })
  }  
}
