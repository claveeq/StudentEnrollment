import { StudentService } from './../services/student.service';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private studentService: StudentService) {

  //  }

  //  Start(){
  //      this.studentService.login().subscribe(
  //     result => {
  //     if ( result ) {
  //       // this.router.navigate(['login']);
  //       this.isRegisteredSuccess = true;
  //       return true;
  //     }
  //   },
  //   error => {
  //     this.isRegisteredSuccess = false;
  //     return false;
  //   });
   }
  ngOnInit() {
  }

}
