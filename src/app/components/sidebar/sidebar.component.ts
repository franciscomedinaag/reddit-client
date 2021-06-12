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
  public queryAfter:number=50; //show 10 posts
  public postDataArray:Array<any>=[]

  ngOnInit(): void {
    this.getInitialPosts(this.offset, this.postQuantity)
  }

  getInitialPosts(offset:number, postQuantity:number): void{
    this.api.get('https://www.reddit.com/r/all/top.json?count='+offset+'&limit='+postQuantity)
    .subscribe(async (posts:any)=>{
      this.queryAfter=posts.data.after
      posts.data.children.forEach((postRawData:any) => {
        let postData = {
          id:postRawData.data.id,
          title:postRawData.data.title,
          author:postRawData.data.author,
          created:this.timeSince(new Date(postRawData.data.created * 1000)) + " ago",
          thumb:postRawData.data.thumbnail,
          num_comments:postRawData.data.num_comments,
          seen:false,
          media:postRawData.data.media ? postRawData.data.media.reddit_video.fallback_url : postRawData.data.url,
          video:Boolean(postRawData.data.media)
        }
        this.postDataArray.push(postData)
      });
      console.log(this.postDataArray)
    })
  }

   timeSince(date:any) {
    var seconds = Math.floor((+new Date() - date) / 1000); 
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

}
