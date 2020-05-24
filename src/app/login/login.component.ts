import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../VO/login-request';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Constant } from '../common/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: LoginRequest = new LoginRequest();

  constructor(private router: Router,
     private authService: AuthService,
     private dataService: DataService,
     private cookieService: CookieService) {}

  ngOnInit() {
    this.redirect();
  }

  onSubmit() {
    this.authService.login(this.loginForm).subscribe(data => {
      console.log(data);
      this.cookieService.set(Constant.ACCESS_TOKEN, data.access_token);
      this.redirect();
    });
  }
  redirect() {
    const token = this.cookieService.get(Constant.ACCESS_TOKEN);
    if (!token) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
