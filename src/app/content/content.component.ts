import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onContactClicked(){
    document.location.href = 'https://api.whatsapp.com/send?phone=+919946701501';
  }
}
