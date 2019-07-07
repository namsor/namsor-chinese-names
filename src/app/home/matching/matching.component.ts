import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import MatchResponse from 'src/app/models/match-response';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {
  firstName: string;
  lastName: string;
  chineseName: string;
  result: {
    httpResponse: MatchResponse,
    firstName: string,
    lastName: string,
    chineseName: string
  } = {
    httpResponse: null,
    firstName: '',
    lastName: '',
    chineseName: ''
  };
  loading: boolean;
  err: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  /**
   * Match Chinese name with Chinese Pinyin name
   * Result will be stored in result variable
   */
  match() {
    if (this.firstName && this.lastName && this.chineseName && !this.loading) {
      this.err = null;
      this.loading = true;
      this.api.findProbability(this.lastName, this.firstName, this.chineseName).subscribe(
        response => {
          console.log(response);
          this.result.httpResponse = response;
          this.result.firstName = this.firstName;
          this.result.lastName = this.lastName;
          this.result.chineseName = this.chineseName;
          this.loading = false;
        },
        err => {
          this.loading = false;
          console.log(err);
        }
      );
    } else {
      this.err = 'Make sure first name, last name, and Chinese name are not empty.';
    }
  }

  onInputChnage() {
    if (this.firstName && this.lastName && this.chineseName) {
      this.err = null;
    }
  }
}
