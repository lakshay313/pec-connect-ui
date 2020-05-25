import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { GenericService } from './generic-service';
import { Observable } from 'rxjs';
import { Record } from '../VO/record';
import { DataService } from './data.service';
import { RecordAccess } from '../VO/record-access';

@Injectable()
export class RecordAccessService {
  constructor(
    private http: HttpClient,
    private genericService: GenericService,
    private dataService: DataService
  ) {}

  getRecentViewed(): Observable<Record[]> {
    console.log(this.dataService.user);
    const param = new HttpParams().set('uid', this.dataService.user.uid.toString());
    return this.http.get<Record[]>('pec-connect/record/history', {
      params: param
    });
  }

  saveRecordAccess(recordId): Observable<Record[]> {
    const accessVal = new RecordAccess();
    accessVal.record_id = recordId;
    accessVal.user_id = this.dataService.user.uid;
    return this.http.post<Record[]>('pec-connect/record/history', accessVal, {
      headers: this.genericService.getHeaders()
    });
  }
}
