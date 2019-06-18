import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import TranslationResponse from 'src/app/models/translation-response';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {
  firstName: string;
  lastName: string;
  chineseName: string;
  response: {
    firstName: string;
    lastName: string;
    chineseName: string
  };
  probability = 0.0;
  loading: boolean;
  err: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  match() {
    if (this.firstName && this.lastName && this.chineseName && !this.loading) {
      this.err = null;
      this.loading = true;
      this.api.translatePinyin(this.firstName, this.lastName).subscribe(
        result => {
          this.loading = false;
          result.matchCandidates.forEach(candidate => {
            if (candidate.candidateName === this.chineseName.trim()) {
              this.probability = candidate.probability;
            }
          });
          this.response = {
            firstName: result.firstName,
            lastName: result.lastName,
            chineseName: this.chineseName
          };
          console.log(result);
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
