import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'modApp';

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.navigateToUrl('main');
  }


  navigateToUrl(link: any) {
    this.router.navigate([link]);
  }
}
