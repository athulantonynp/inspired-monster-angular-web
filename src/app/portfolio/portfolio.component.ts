import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Shot} from '../models/Shot';
import {AppConstants} from '../constants';




@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  host: {
    '(contextmenu)': 'disableClick($event)'
  }
})
export class PortfolioComponent implements OnInit {

  public lottieConfig: Object;
  isMainLoading=true;


  shots:Shot[]=[]
  isSubLoading=false;
  isFinishLoading=false;
  columnsBreakpoint=2;
  isFullscreen=false;
  fullScreenShot:Shot;

  fullScreenWidth=0;
  fullScreenHeight=0;


  constructor(private httpClient:HttpClient) {
    
    this.lottieConfig={
      path: '../../assets/lottie/loading.json',
            autoplay: true,
            loop: true
    }

    this.getUserShots();
   }

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
    this.columnsBreakpoint = (window.innerWidth <= 600) ? 2 :3;
    
  }

  onResize(event) {
    this.columnsBreakpoint = (event.target.innerWidth <= 600) ? 2 : 3;
  }


  disableClick(e:any){
    e.preventDefault();
  }

  onShotClick(item:Shot){
    this.fullScreenShot=item;
    this.isFullscreen=true;
   console.log(document.getElementsByClassName("shot_item_fullscreen"));

  }

  onExitFullScreen(){
    this.isFullscreen=false;
  }

  scroll = (event: any): void => {
    //const number = event.srcElement.scrollTop;
   const element=event.srcElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight)
    {
    
    }
  };

  getUserShots(){
    this.shots=AppConstants.shotsresponse
    this.isMainLoading=false;
  }


}
