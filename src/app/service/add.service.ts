import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor() { }

  addSum(n1: number, n2: number) {
    return n1 + n2;
  }
}
