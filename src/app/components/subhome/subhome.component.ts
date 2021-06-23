import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subhome',
  templateUrl: './subhome.component.html',
  styleUrls: ['./subhome.component.scss']
})
export class SubhomeComponent implements OnInit {

  @Input()name = '';

  @Output() outputEvent = new EventEmitter<string>();

  isAvail = false;
  item = ["Button1", "Button2", "Button3"];

  constructor() { }

  ngOnInit(): void {
  }

  changeTheHeader() {
    this.isAvail = !this.isAvail;
    this.outputEvent.emit("msg");
  }

}
