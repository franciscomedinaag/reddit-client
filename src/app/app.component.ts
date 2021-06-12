import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reddit-client';
  public featuredPost:any={title:"", author:"", thumb:""}
  
  constructor(private elRef: ElementRef){}

  displayPost(post:any):void{
    this.featuredPost=post
    const player = this.elRef.nativeElement.querySelector('video');
    try{player.load()}
    catch{ }
  }
}
