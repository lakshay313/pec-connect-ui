import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Constant } from '../common/constant';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class GenericService {
  constructor(private cookieService: CookieService) {}

  public getHeaders(accessType?) {
    return new HttpHeaders({
      Accept: accessType ? accessType : 'application/json',
      access_token: this.cookieService.get(Constant.ACCESS_TOKEN),
    });
  }

}
