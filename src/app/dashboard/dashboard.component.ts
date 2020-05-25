import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Record } from '../VO/record';
import { RecordService } from '../services/record.service';
import { RecordAccessService } from '../services/record-access.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private recordService: RecordService,
    private recordAccessService: RecordAccessService
  ) { }
  viewedList: Record[];
  uploadList: Record[];

  ngOnInit() {
    this.recordService.getRecentUploads().subscribe(
      data => {
      this.uploadList = data;
    });
    this.dataService.getRoles();
    this.recordAccessService.getRecentViewed().subscribe(
      data => {
        this.viewedList = data;
    });
    console.log(this.dataService.getRoles());
  }

  openFile(url, id) {
    this.recordAccessService.saveRecordAccess(id).subscribe(
      data => {
        this.viewedList = data;
      }
    );
    window.open(url);
  }

}
