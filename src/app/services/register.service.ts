import { HttpHeaders } from '@angular/common/http';
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

  constructor(private http: Http) { }

  registerAccount(input) {
      return this.http.post('http://ys-training.gq/api/Account/Register', input).pipe(
      map(response => {
        const result = response.json();
        console.log(result);
        return true;
      }));
  }
}
