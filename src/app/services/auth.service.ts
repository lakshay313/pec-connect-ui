import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { GenericService } from './generic-service';
import { AuthResponse } from '../VO/auth-response';
import { LoginRequest } from '../VO/login-request';
import { Identity } from '../VO/identity';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private genericService: GenericService
  ) {}

  login(loginRequest: LoginRequest): Observable<Identity> {
    return this.http.post<AuthResponse>('/pec-connect/login', loginRequest, {});
  }

  getRoles(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/pec-connect/access', null, {
      headers: this.genericService.getHeaders()
    });
  }
}
