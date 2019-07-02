import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// to catch error
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // create a variable which hold path to which will post the date
  _url = 'http://localhost:3000/enroll';

  constructor(public _httpClient: HttpClient ) { }

  // create a method called enroll which will post the data to server
  register(userData) {
    return this._httpClient.post<any>(this._url, userData)
      .pipe(catchError(this.errorHandler)) //catch errors
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
