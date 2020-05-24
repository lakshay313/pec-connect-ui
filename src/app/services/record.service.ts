import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GenericService } from './generic-service';
import { Observable } from 'rxjs';
import { Record } from '../VO/record';

@Injectable()
export class RecordService {
  constructor(
    private http: HttpClient,
    private genericService: GenericService
  ) { }

  getRecentUploads(): Observable<Record[]> {
    const param = new HttpParams().set('entries', '5');
    return this.http.get<Record[]>('/pec-connect/record', {
      params: param
    } );
  }



}
