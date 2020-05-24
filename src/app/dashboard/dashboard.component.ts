import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Record } from '../VO/record';
import { RecordService } from '../services/record.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private recordService: RecordService
  ) { }
  viewedList: Record[];
  uploadList: Record[];

  ngOnInit() {
    this.recordService.getRecentUploads().subscribe(data => {
      this.uploadList = data;
    });
    console.log(this.dataService.getRoles());
  }

}
