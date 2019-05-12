import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public lottieConfig: Object;

  constructor() {
    this.lottieConfig={
      path: '../../assets/lottie/loading.json',
            autoplay: true,
            loop: true
    }
   }

  ngOnInit() {
  }

}
