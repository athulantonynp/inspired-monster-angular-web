import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {DrawerItemClickService} from './services/DrawerItemClickService'
import { DrawerItemClickEvent } from './events/DrawerItemClickEvent';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  @ViewChild('sidenav') public sidenav: MatSidenav;

  onDrawerClick(event:Event){
    this.sidenav.toggle();
  }

  constructor(private router:Router,private drawerItemEvent:DrawerItemClickService){

    this.drawerItemEvent.getMessage().subscribe(event =>{
      this.handleRouteChange(event)
    })
  }

  handleRouteChange(event:DrawerItemClickEvent){
    this.sidenav.close()
    if(event.item==='home'){
      this.router.navigateByUrl('')
    }

    if(event.item==='portfolio'){
      this.router.navigateByUrl('/portfolio')
    }
  }

}
