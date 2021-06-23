import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeTitle = "I AM IN home";

  todayData = new Date();

  size = 10;

  name = "Joseph";

  imageLink = './../../assets/scene1.jpg';

  label = "200px";

  isBold = false;

  fontSizePx = 20;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToUrl(link: string) {
    this.router.navigate(['home/' + link]);
  }

  listenerEvent(ev: any) {
    alert(ev);
  }
}
