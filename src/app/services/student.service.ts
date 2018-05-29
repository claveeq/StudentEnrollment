
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

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>('http://ys-training.gq/api/students/');
  }

  getSpecificStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`http://ys-training.gq/api/students/${id}`);
  }
}
