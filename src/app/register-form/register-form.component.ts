import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private router: Router,
    private registrationService: RegisterService) {}

    register(input) {
    this.registrationService.registerAccount(input)
    .subscribe(
      result => {
      if ( result ) {
        // this.router.navigate(['login']);
        return true;
      }
    },
    error => {
      return false;
    });
    }

  ngOnInit() {
  }
}
