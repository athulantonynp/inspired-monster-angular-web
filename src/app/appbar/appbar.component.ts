import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {
  
  @Output() drawerClick=new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  onSlideNavigationClick(event:Event){
      this.drawerClick.emit(true);
  }
}
