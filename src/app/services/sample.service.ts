import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private sampleData: any;
  public samplePublicData: any;

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
    return fnumber + snumber;
  }
}
