import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import * as constants from './../constants';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  states = new BehaviorSubject<any>(null);
  districts = new BehaviorSubject<any>(null);
  someDataToTrigger = new BehaviorSubject<any>(null);

  constructor(private httpService: HttpService) { }

  getStates() {
    this.httpService.getMethod(constants.stateApiEndPoint).subscribe((res) => {
      this.states.next(res['states']);
    }, err => {
      alert(err);
    }) 
  }

  getDistrict(stateId: any) {
    this.httpService.getMethod(constants.districtApiEndPoint+stateId).subscribe((res) => {
      this.districts.next(res['districts']);
    }, err => {
      alert(err);
    }) 
  }

  getDataUpdate() {
    this.someDataToTrigger.next("something");
  }



}
