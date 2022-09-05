import { Component, OnInit } from '@angular/core';
enum product { good = "Good", poor = "Poor", average = "Average" }


@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  myarray: Array<any> = []
  NewArray: Array<any> = []
  DataArray: Array<any> = []
  searchtext: any;
  isRefresh: boolean = true;
  submitdata: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  get productvalue() {
    return product
  }
  Poor() {
    this.NewArray = this.DataArray.filter((a) =>
      (a.FeedBackInfo === "Poor")
    )
    console.log(this.NewArray)
  }
  Average() {
    this.NewArray = this.DataArray.filter((a) =>
      (a.FeedBackInfo === "Average")
    )
    console.log(this.NewArray)
  }
  Good() {
    this.submitdata = false;
    this.NewArray = this.DataArray.filter((a) =>
      (a.FeedBackInfo === "Good")
    )
    console.log(this.NewArray)
  }
  listapp(data: any) {
    this.DataArray = data
  }
  filter() {
    this.NewArray = this.DataArray.sort((a, b) => (a.Name > b.Name) ? 1 : -1)
    console.log(this.DataArray)
  }
}