import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const HttpOption = <any>{
  header: new HttpHeaders({'Content-Type': 'application/json'}).set('Authorization', `Bearer ${localStorage.getItem('access_token')}`)
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: Http) { }
  login(credentials) {
    const body = `userName=${credentials.email}&password=${credentials.password}&grant_type=password`;
    return this.http.post('http://ys-training.gq/api/Account/Info', body, HttpOption ).pipe(
      map(response => {
        const result = response.json();
          console.log(result);
      }
    )); }
}
