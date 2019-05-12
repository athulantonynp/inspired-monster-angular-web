import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {DrawerItemClickService} from '../services/DrawerItemClickService'
import { DrawerItemClickEvent } from '../events/DrawerItemClickEvent';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  @Output() drawerClick=new EventEmitter<boolean>();

  constructor(private snackBar: MatSnackBar,private eventService:DrawerItemClickService) {}
  ngOnInit() {
  }

  onSlideNavigationCloseClick(event:Event){    
    this.drawerClick.emit(true);
  }

  onNavigationItemClick(item:String){
    switch(item){
      case 'home':{
        this.eventService.sendEventMessage(new DrawerItemClickEvent('home'))
        break;
      }

      case 'portfolio':{
        this.eventService.sendEventMessage(new DrawerItemClickEvent('portfolio'))
        break;
      }

      default:{
       this.snackBar.open("Coming soon!",null,{
         duration:2000
       })
        break;
      }
    }
  }

}
