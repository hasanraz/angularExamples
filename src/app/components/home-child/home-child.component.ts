import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {

  @Input()name: string = "Child Name";
  @Output() updateName = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
  }

  updateTheName() {
    this.updateName.emit(this.name);
  }

}
