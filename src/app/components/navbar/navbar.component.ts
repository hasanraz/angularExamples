import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navbarTitle = [{
    title:'Home',
    link: 'home'
  },
  {
    title:'Contact',
    link: 'contact'
  },
  {
    title:'Profile',
    link: 'profile'
  },
  {
    title:'Registration',
    link: 'registration'
  },
  {
    title:'Setting',
    link: 'setting'
  }
];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToGivenPath(link: string) {
    this.router.navigate([link]);
  }

}
