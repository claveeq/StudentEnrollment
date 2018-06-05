import { environment } from './../../environments/environment';
import { Course } from './../models/Course';
import { Entrollments } from './../models/Enrollments';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';

interface ICourse {
   Studentid: number;
   Courseid: number;
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // url = 'http://ys-training.gq/';
  url = 'http://localhost:3064/';
  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>(this.url + `api/courses/`);
  }

  unenrollCourse(enrollment: Entrollments) {

    return this.http.post<string>(this.url + `api/students/unenroll`, enrollment);
  }

  enrollCourse(enrollment: Entrollments) {
    return this.http.post<string>(this.url + `api/students/enroll`, enrollment );
  }
}
