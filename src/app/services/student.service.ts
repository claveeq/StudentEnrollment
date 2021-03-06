
import { Student } from './../models/Student';
import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // url = 'http://ys-training.gq/';
  url = 'http://localhost:3064/';

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>(this.url + 'api/students/');
  }

  getSpecificStudent(id: string): Observable<Student> {
    return this.http.get<Student>(this.url + `api/students/${id}`);
  }

  deleteSelectedStudent(id: string) {
    return this.http.post<string>(this.url + `api/students/${id}/delete`, id);
  }
}
