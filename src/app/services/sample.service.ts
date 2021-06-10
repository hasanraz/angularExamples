import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private sampleData: any;
  public samplePublicData: any;
  private sum: number;

  constructor() { }

  private samplePrivate(): string {
    return "I am private function";
  }

  public setSampleData(sdata: any) {
    this.sampleData = sdata;
  }

  public getSampleData() {
    this.sampleData;
  }

  public getSamplePrivate(): string {
    return "From Public" + this.samplePrivate();
  }

  public getSum(fnumber: number, snumber: number) {
    this.sum = fnumber + snumber;
    return this.sum;
  }

  public getCalculatedSum() {
    if(!this.sum) {
      this.sum = 0;
    }
    return this.sum;
  }
}
