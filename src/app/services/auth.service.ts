import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  private _headers = {headers: new HttpHeaders().set('Authentication', 'application/json')};

//   constructor(private http: Http) {
//   }
// // userName, grant_type, password) (Grant_type is “password”)

//   login(credentials) {
//     const body = `userName=${credentials.email}&password=${credentials.password}&grant_type=password`;
//     return this.http.post('http://ys-training.gq/token', body ).pipe(
//       map(response => {
//         const result = response.json();
//       if ( result && result.access_token) {
//         localStorage.setItem('token', result.access_token);
//         return true;
//       }
//       return false;
//       }));

  constructor(private http: Http) { }
// userName, grant_type, password) (Grant_type is “password”)

  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(credentials) {
    const body = `userName=${credentials.email}&password=${credentials.password}&grant_type=password`;
    return this.http.post('http://ys-training.gq/token', body ).pipe(
      map(response => {
        const result = response.json();
      if ( result && result.access_token) {
        localStorage.setItem('token', result.access_token);
        return true;
      }
      return false;
      }));
  }

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

