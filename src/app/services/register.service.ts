import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const HttpOption = <any>{
  header: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // url = 'http://ys-training.gq/';
  url = 'http://localhost:3064/';
  constructor(private http: HttpClient) { }

  registerAccount(input) {
      return this.http.post(this.url + 'api/Account/Register', input).pipe(
      map(response => {
       // const result = response.json();
        // console.log(result);
        console.log(response);
        return true;
      }));
  }

}
