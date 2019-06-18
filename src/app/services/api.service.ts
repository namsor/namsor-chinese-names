import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import GenderResponse from '../models/gender-response';
import TranslationResponse from '../models/translation-response';

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

  indentifyGender(firstName: string, lastName: string) {
    return this.http.get<GenderResponse>(`${this.baseUrl}/gender/${lastName}/${firstName}`, this.httpOptions);
  }

  findProbability() {
    return this.http.get('', this.httpOptions);
  }
}
