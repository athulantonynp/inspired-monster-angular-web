import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Shot} from '../models/Shot';
import {AppConstants} from '../constants';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public lottieConfig: Object;
  isMainLoading=true;
  STATIC_PAGE_NUM=0;
  MAIN_URL="https://api.dribbble.com/v2/user/shots?access_token="+AppConstants.ACCESS_TOKEN
  shots:Shot[]=[]

  constructor(private httpClient:HttpClient) {
    
    this.lottieConfig={
      path: '../../assets/lottie/loading.json',
            autoplay: true,
            loop: true
    }

    this.getUserShots();
   }

  ngOnInit() {
  
  }

  getUserShots(){
    this.httpClient.get(this.MAIN_URL+'&page='+this.STATIC_PAGE_NUM+1)
    .subscribe((res:Shot[])=>{
      for(var i in res){
        this.shots.push(res[i])
      }
     this.isMainLoading=false;
    })
  }

}
