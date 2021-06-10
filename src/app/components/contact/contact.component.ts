import { Component, OnInit } from '@angular/core';
import { SampleService } from './../../services/sample.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public sampleService: SampleService) { }

  ngOnInit(): void {
  }

}
