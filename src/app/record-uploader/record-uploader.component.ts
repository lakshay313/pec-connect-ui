import { Component, OnInit } from '@angular/core';
import { Constant } from '../common/constant';
import { Record } from '../VO/record';
import { DataService } from '../services/data.service';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { RecordService } from '../services/record.service';
import { map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-uploader',
  templateUrl: './record-uploader.component.html',
  styleUrls: ['./record-uploader.component.css']
})
export class RecordUploaderComponent implements OnInit {
  recordType = Constant.RECORD_TYPE;
  recordCategory = Constant.RECORD_CATEGORY;
  engineeringList = Constant.ENGINEERING_SPECS;
  businessList = Constant.BUSINESS_SPECS;
  novelList = Constant.NOVEL_SPECS;
  recordForm: Record;
  selectedFiles: FileList;
  _path: string;
  prog_st = 0;
  prog_en = 0;

  constructor(
    private dataService: DataService,
    private recordService: RecordService,
    private router: Router
  ) {
    this.recordForm = new Record();
  }

  ngOnInit() {}

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadFile(file).subscribe(
      location => {
        this.recordForm.posted_by = this.dataService.getName();
        this.recordForm.path = location;
        console.log(this.recordForm);
        this.recordService.saveRecord(this.recordForm).subscribe(
          record => {
            // ADD NOTIFIER
            this.router.navigate(['/dashboard']);
            window.open(record.path);
            console.log(record);
          }
        );
      },
      err => {
        console.log('There was an error uploading your file: ', err);
      }
    );
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  //ADD from Notes
  uploadFile(file) {

  }
}
