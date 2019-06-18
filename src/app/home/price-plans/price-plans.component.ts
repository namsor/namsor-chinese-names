import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-plans',
  templateUrl: './price-plans.component.html',
  styleUrls: ['./price-plans.component.scss']
})
export class PricePlansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getStarted() {
    window.open('https://v2.namsor.com/NamSorAPIv2/sign-in.html', '_blank');
  }
}
