import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  myvideo1:String = "../assets/videos/video1.mp4"
  myvideo2:String = "../assets/videos/video2.mp4"
  constructor() { }

  ngOnInit(): void {
  }

}
