import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public api:DataApiService) { }

  public offset:number=0;
  public postQuantity:number=10; //show 10 posts
  public postLimit:number=50; //show 10 posts


  ngOnInit(): void {
    this.getPosts(this.offset, this.postQuantity)
  }

  getPosts(offset:number, postQuantity:number): void{
    this.api.get('https://www.reddit.com/r/all/top.json?count='+offset+'&limit='+postQuantity)
    .subscribe(async (posts:any)=>{
      console.log("posts: ", posts)
    })
  }

}
