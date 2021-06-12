import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit-client';
  
  public featuredPost:any={title:"", author:"", thumb:""}

  displayPost(post:any):void{
    console.log("Selected post: ", post)
    this.featuredPost=post
  }
}
