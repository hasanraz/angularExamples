import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  

  constructor(private http: HttpClient) { }

  getMethod(url: string) {
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = "Error Occured";
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  };
}
