import { environment } from './../../environments/environment';
import { Course } from './../models/Course';
import { Entrollments } from './../models/Enrollments';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { IEnroll } from '../models/Enroll';

interface ICourse {
   Studentid: number;
   Courseid: number;
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>(`http://ys-training.gq/api/courses/`);
  }

  unenrollCourse(enrollment: Entrollments) {

    return this.http.post<string>(`http://ys-training.gq/api/students/unenroll`, enrollment);
  }

  enrollCourse(enrollment: Entrollments) {
    return this.http.post<string>(`http://ys-training.gq/api/students/enroll`, enrollment );
  }
}
