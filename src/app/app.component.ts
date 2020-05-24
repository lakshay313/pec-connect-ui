import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './services/data.service';
import { Constant } from './common/constant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private cookieService: CookieService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getUserDataOnReload();
  }

  getUserDataOnReload() {
    const token = this.cookieService.get(Constant.ACCESS_TOKEN);
    if (token) {
      console.log(this.dataService.getRoles());

    }
  }

}
