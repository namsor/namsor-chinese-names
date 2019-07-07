import { Component, OnInit } from '@angular/core';
import TranslationResponse from 'src/app/models/translation-response';
import { ApiService } from 'src/app/services/api.service';
import ChineseTranslationResponse from 'src/app/models/chinese-translation-response';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
  firstName: string;
  lastName: string;
  chineseName: string;
  selectedMode: 'Chinese' | 'Pinyin' = 'Pinyin';
  pinyinTranslationResponse: TranslationResponse;
  chineseTranslationResponse: ChineseTranslationResponse;
  loading: boolean;
  err: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  translate() {
    // clear and rest previous result
    this.chineseTranslationResponse = null;
    this.pinyinTranslationResponse = null;

    if (this.selectedMode === 'Chinese') {
      if (this.chineseName && !this.loading) {
        this.err = null;
        this.loading = true;
        this.api.translateChinese(this.chineseName).subscribe(
          result => {
            this.loading = false;
            this.chineseTranslationResponse = result;
            console.log(result);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        this.err = 'Make sure Chinese name is not empty.';
      }
    } else {
      if (this.firstName && this.lastName && !this.loading) {
        this.err = null;
        this.loading = true;
        this.api.translatePinyin(this.firstName, this.lastName).subscribe(
          result => {
            this.loading = false;
            this.pinyinTranslationResponse = result;
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
