import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/service/add.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss']
})
export class SumComponent implements OnInit {

  number1 = 0;
  number2 = 0;
  sum = 0;

  constructor(private addService: AddService) { }

  ngOnInit(): void {
  }

  getSum() {
    this.sum = this.addService.addSum(this.number1, this.number2);
  }

}
