import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-section',
  templateUrl: './api-section.component.html',
  styleUrls: ['./api-section.component.scss']
})
export class ApiSectionComponent implements OnInit {
  currentTab: 'gender' | 'translation' | 'matching' = 'gender';
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.firstChild) {
      this.currentTab = this.activatedRoute.snapshot.firstChild.data.tab;
    }
  }

  scrollTo(element) {
    element.scrollIntoView({behavior: 'smooth'});
  }
}
