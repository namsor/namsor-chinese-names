import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import GenderResponse from '../models/gender-response';
import TranslationResponse from '../models/translation-response';
import MatchResponse from '../models/match-response';
import ChineseTranslationResponse from '../models/chinese-translation-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({
      Accept:  'application/json',
      'x-api-key': '64ee52a811d03f22171801a8eb49827b'
    })
  };
  private baseUrl = 'https://v2.namsor.com/NamSorAPIv2/api2/json';

  constructor(private http: HttpClient) { }

  translatePinyin(surname: string, givenName: string) {
    return this.http.get<TranslationResponse>(`${this.baseUrl}/chineseNameCandidates/${surname}/${givenName}`, this.httpOptions);
  }

  translateChinese(chineseName: string) {
    return this.http.get<ChineseTranslationResponse>(`${this.baseUrl}/pinyinChineseName/${chineseName}`, this.httpOptions);
  }

  findProbability(chineseSurnameLatin: string, chineseGivenNameLatin: string, chineseName: string) {
    return this.http.get<MatchResponse>(`${this.baseUrl}/chineseNameMatch/${chineseSurnameLatin}/${chineseGivenNameLatin}/${chineseName}`,
      this.httpOptions);
  }

  indentifyGender(firstName: string, lastName: string) {
    return this.http.get<GenderResponse>(`${this.baseUrl}/genderGeo/${lastName}/${firstName}/CN`, this.httpOptions);
  }

  identifyGenderByChineseName(chineseName: string) {
    return this.http.get<GenderResponse>(`${this.baseUrl}/genderChineseName/${chineseName}`, this.httpOptions);
  }
}
