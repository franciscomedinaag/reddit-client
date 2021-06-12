import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.css']
})
export class NavMobileComponent implements OnInit {

  constructor() { }
  
  @Output() onSelectedPost = new EventEmitter<any>();

  ngOnInit(): void {
  }
  displayPost(post:any):void{
    this.onSelectedPost.emit(post)
  }
}
