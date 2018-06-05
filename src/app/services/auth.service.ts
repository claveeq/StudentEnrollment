import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
  url = 'http://localhost:3064/';
  // url = 'http://ys-training.gq/';

  constructor(private http: Http) { }
  // userName, grant_type, password) (Grant_type is “password”)
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(credentials) {
    const body = `userName=${credentials.userName}&password=${credentials.password}&grant_type=password`;
    return this.http.post(this.url + 'token', body).pipe(
      map(response => {
        const result = response.json();
        console.log(response, result);
        if (result && result.access_token) {
          localStorage.setItem('token', result.access_token);
          return true;
        }
        return false;
      }));
  }

  // login(credentials) {
  //   const body = `userName=${credentials.email}&password=${credentials.password}&grant_type=password`;
  //   return this.http.post( this.url + 'token', body ).subscribe(
  //     response => {
  //       // const result = response.json();
  //     if ( response && response.access_token) {
  //       localStorage.setItem('token', response.access_token);

  //     }
  //     });
  // }

  logout() {
  }

  isLoggedIn() {
    return false;
  }

  // public isAuthenticated(): boolean {
  //   // get the token
  //   const token = this.getToken();
  //   // return a boolean reflecting
  //   // whether or not the token is expired
  //   return tokenNotExpired(token);
  // }
}

