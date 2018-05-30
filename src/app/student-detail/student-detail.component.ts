import { Course } from './../models/Course';
import { CourseService } from './../services/course.service';


import { StudentService } from './../services/student.service';
import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/Student';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Entrollments } from '../models/Enrollments';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

import { Enroll } from '../models/Enroll';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  // student: Observable<Student>;
  // @Input() student: Student;
  firstName;
  middleName;
  lastName;
  enrollments;
  id;
  courses;
  enroll;
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router) {}

    getStudentDetail() {
      this.route.params
      .subscribe( params => {
        this.studentService.getSpecificStudent(params.id)
        .subscribe(data => {
          this.firstName = data.firstName;
          this.middleName = data.middleName;
          this.lastName = data.lastName;
          this.id = data.id;
          this.enrollments = data.studentEnrollments;
        });
     });
     this.courseService.getCourses()
     .subscribe(data => {
      this.courses = data;
     });
    }

    onClick_AddCourse(course: Course) {
       console.log(course.id);
      
        this.enroll = new Enroll();
        this.enroll.studentId = this.id;
        this.enroll.courseId = course.id;
        this.courseService.enrollCourse(this.enroll)
        .subscribe( data => {
            window.alert(data);
            this.getStudentDetail();
      });
    }
    onClick_UnenrollStudent() {
      if ( window.confirm(`Are sure you want to unenroll ${this.firstName} ${this.firstName}?`)) {
        this.studentService.deleteSelectedStudent(this.id)
        .subscribe( data => {
            window.alert(data);
            this.router.navigate(['student']);
       });
      }
    }

    onClick_RemoveCourse(enrollment: Entrollments) {
      if ( window.confirm(`Are sure you want to unenroll ${enrollment.course.name} ?`)) {
          this.courseService.unenrollCourse(enrollment)
          .subscribe( data => {
              window.alert(data);
              this.getStudentDetail();
      });
    }
  }
  ngOnInit() {
    this.getStudentDetail();
  }
}
