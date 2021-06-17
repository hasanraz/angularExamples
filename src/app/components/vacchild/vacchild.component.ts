import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacchild',
  templateUrl: './vacchild.component.html',
  styleUrls: ['./vacchild.component.scss']
})
export class VacchildComponent implements OnInit, AfterViewChecked {

  headerText = "I am vac child component";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log("I am being invoked due to parent changed my dom");
  }

  updateHeaderText() {
    this.headerText = "I am updated header text";
  }

}
