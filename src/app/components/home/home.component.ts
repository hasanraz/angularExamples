import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SampleService } from './../../services/sample.service';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showImage: boolean = true;
  public headerTitle = "";
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public sum: any;
  @ViewChild('firstNum')firstNum: ElementRef;
  @ViewChild('secondNum')secondNum: ElementRef;
  public name = "king";
  showSum = true;
  iArray = ['1','2','3','4'];

  constructor(private sampleService: SampleService,
    public utilsService: UtilsService) { }

  ngOnInit(): void {
    this.headerTitle = this.sampleService.getSamplePrivate();
  }

  numberSum() {
    this.sum = this.sampleService.getSum(this.firstNumber, this.secondNumber);
  }

  updateName(name) {
    this.name = name;
  }

}
