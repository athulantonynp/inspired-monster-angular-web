import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Shot} from '../models/Shot';
import {AppConstants} from '../constants';
import {HostListener} from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



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
  STATIC_PAGE_NUM=0;
  MAIN_URL="https://api.dribbble.com/v2/user/shots?access_token="+AppConstants.ACCESS_TOKEN
  shots:Shot[]=[]
  isSubLoading=false;
  isFinishLoading=false;
  columnsBreakpoint=2;

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
    this.columnsBreakpoint = (window.innerWidth <= 600) ? 2 : 6;
  }

  onResize(event) {
    this.columnsBreakpoint = (event.target.innerWidth <= 600) ? 2 : 6;
  }

  disableClick(e:any){
    e.preventDefault();
}

  scroll = (event: any): void => {
    //const number = event.srcElement.scrollTop;
   const element=event.srcElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight)
    {
      this.getUserShots()
    }
  };

  getUserShots(){
    if(this.isFinishLoading){
      this.isSubLoading=false;
      return
    }
    this.STATIC_PAGE_NUM=this.STATIC_PAGE_NUM+1
    if(this.STATIC_PAGE_NUM!=1){
      this.isSubLoading=true;
    }
   
    this.httpClient.get(this.MAIN_URL+'&page='+this.STATIC_PAGE_NUM)
    .subscribe((res:Shot[])=>{
      if(res.length!=0){
        for(var i in res){
          this.shots.push(res[i])
        }
        this.isSubLoading=false;
        this.getUserShots();
      }else{
        this.isFinishLoading=true;
        this.isSubLoading=false;
      }
      
     this.isMainLoading=false;
    })
  }


}
