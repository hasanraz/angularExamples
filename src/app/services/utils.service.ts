import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getName(name: string) {
    return name.toUpperCase();
  }
}
