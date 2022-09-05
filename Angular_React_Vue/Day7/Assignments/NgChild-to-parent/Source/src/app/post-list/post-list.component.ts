import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  @Output() Lapp:EventEmitter <any> = new EventEmitter 
  constructor() { }
  pic1 = "https://picsum.photos/200/300?grayscale"
  arr = [{postname:"tanmaymehta",postdesc:"profile photo",postdate:"20-1-2022",postimage:this.pic1}]
  ngOnInit() 
  {
   this.Lapp.emit(this.arr)
  }
}