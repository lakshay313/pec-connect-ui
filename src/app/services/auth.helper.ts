import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Constant } from '../common/constant';
import { DataService } from './data.service';

@Injectable()
export class AuthHelper {

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private dataService: DataService
  ) {}

  public isUserAuthenticated() {
    const token = this.cookieService.get(Constant.ACCESS_TOKEN);
    if (!token) {
      this.cookieService.deleteAll('/');
      this.router.navigate(['/login']);
      return false;
    }
    this.dataService.getRoles();
    return true;
  }
}
