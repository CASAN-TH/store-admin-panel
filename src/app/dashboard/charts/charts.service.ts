import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private salesUrl = '../../../assets/chart.json';

  constructor(private http: HttpClient) { }

  getSalesByMonth(): Observable<any[]> {
    console.log("service");
    return this.http.get<any[]>(this.salesUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(`An error occurred: ${err}`);
  }
}
