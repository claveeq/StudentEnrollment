import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) {
    }

  signIn(credentials) {
      this.authService.login(credentials)
      .subscribe((result) => {
        if ( result ) {
          this.router.navigate(['student']);
        } else {
          this.invalidLogin = true;
        }
      }, (error) => {
        this.invalidLogin = true;
      }
    );
  }
  ngOnInit() {
  }

}
