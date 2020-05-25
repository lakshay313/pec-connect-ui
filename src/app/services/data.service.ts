import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthResponse } from '../VO/auth-response';

@Injectable()
export class DataService {

  public user: AuthResponse;

  public token: string = null;

  public redirectUrl: string;

  constructor(private authService: AuthService) {}

  getRoles() {
    this.authService.getRoles().subscribe(data => {
      this.user = data;
    });
    return this.user ? this.user.permissions : null;
  }

  getName() {
    return this.user ?
      (this.user.first_name + ' ' + this.user.last_name)
      : '';
  }
}
