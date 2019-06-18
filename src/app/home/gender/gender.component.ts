import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import GenderResponse from 'src/app/models/gender-response';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  firstName: string;
  lastName: string;
  loading: boolean;
  err: string;
  response: GenderResponse;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  search() {
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

  onInputChnage() {
    if (this.firstName && this.lastName) {
      this.err = null;
    }
  }
}
