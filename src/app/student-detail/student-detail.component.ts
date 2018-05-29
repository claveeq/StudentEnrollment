import { Entrollments } from './../models/Enrollments';
import { StudentService } from './../services/student.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/Student';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student: Student;
  constructor(studentService: StudentService) { }

  ngOnInit() {
  }

}
