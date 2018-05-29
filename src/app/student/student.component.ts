import { Student } from './../models/Student';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
// import { Subscription } from "rxjs/";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList;
  selectedStudent;
  isSelected = false;
  constructor(private studentService: StudentService) {
    // Initialize table
    this.studentService.getStudentList()
    .subscribe(
       data => {
       this.studentList = data; }
    );
  }
    onSelect (student: Student) {
      this.isSelected = true;
      this.studentService.getSpecificStudent(student.id)
      .subscribe(
        data => {
          this.selectedStudent = data;
        });
    }

  ngOnInit() {
  }
}
