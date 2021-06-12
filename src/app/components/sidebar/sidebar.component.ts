import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public api:DataApiService) { }

  @Output() onSelectedPost = new EventEmitter<any>();

  public postDataArray:Array<any>=[]

  ngOnInit(): void {
    this.getPosts()
  }
  
  selectPost(post:any){
    this.onSelectedPost.emit(post)
    post.seen=true
  }

  getPosts(): void{
    this.api.get('https://www.reddit.com/r/all/top.json?count=0&limit=50')
    .subscribe(async (posts:any)=>{
      posts.data.children.forEach((postRawData:any) => {
        
        let postData = {
          id:postRawData.data.id,
          title:postRawData.data.title,
          preview_title:postRawData.data.title.length >= 75 ? (postRawData.data.title.substring(0,75) + "...") : postRawData.data.title, //preview text in list
          author:postRawData.data.author,
          created:this.timeSince(new Date(postRawData.data.created * 1000)) + " ago",
          thumb:postRawData.data.thumbnail,
          num_comments:postRawData.data.num_comments,
          seen:false,
          media:postRawData.data.media ? postRawData.data.media?.reddit_video?.fallback_url : postRawData.data.url,
          video:Boolean(postRawData.data.media)
        }
        this.postDataArray.push(postData)
      });
    })
  }
  
  async dismissPost(postId:string){
    document.getElementById(postId)?.classList.add("hidden")
    await this.delay(500);
    this.postDataArray=this.postDataArray.filter(p=>p.id!=postId)
  }

  async dismissAll(){
    this.postDataArray.forEach((post)=>{
      document.getElementById(post.id)?.classList.add("hidden")
    })
    await this.delay(500);
    this.postDataArray=[]
  }

   delay = (ms:any) => new Promise(res => setTimeout(res, ms));

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
