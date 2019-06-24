import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import GenderResponse from 'src/app/models/gender-response';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  firstName: string;
  lastName: string;
  chineseName: string;
  selectedMode: 'Chinese' | 'Pinyin' = 'Pinyin';
  loading: boolean;
  err: string;
  response: GenderResponse;
  constructor(public apiService: ApiService, public translationService: TranslateService) { }

  ngOnInit() {
    this.translationService.onLangChange.subscribe(
      lang => {
        if (lang === environment.LANG_ENGLISH) {
          this.selectedMode = 'Pinyin';
        } else {
          this.selectedMode = 'Chinese';
        }
      }
    );
  }

  search() {
    if (this.selectedMode === 'Chinese') {
      if (this.chineseName) {
        this.err = null;
        this.loading = true;
        this.apiService.identifyGenderByChineseName(this.chineseName).subscribe(
          result => {
            this.loading = false;
            this.response = result;
            console.log(result);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        this.err = 'Make sure chinese name is not empty.';
      }
    } else {
      if (this.firstName && this.lastName && !this.loading) {
        this.err = null;
        this.loading = true;
        this.apiService.indentifyGender(this.firstName, this.lastName).subscribe(
          result => {
            this.loading = false;
            this.response = result;
            console.log(result);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        this.err = 'Make sure first name and last name are not empty.';
      }
    }

  }

  onInputChnage() {
    if (this.firstName && this.lastName) {
      this.err = null;
    }
  }
}
