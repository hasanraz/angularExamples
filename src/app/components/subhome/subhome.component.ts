import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subhome',
  templateUrl: './subhome.component.html',
  styleUrls: ['./subhome.component.scss']
})
export class SubhomeComponent implements OnInit {

  isAvail = false;
  item = ["Button1", "Button2", "Button3"];

  constructor() { }

  ngOnInit(): void {
  }

  changeTheHeader() {
    this.isAvail = !this.isAvail;
  }

}
