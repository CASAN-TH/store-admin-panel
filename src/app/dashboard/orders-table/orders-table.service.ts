import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersTableService {

  private salesUrl = '../../../assets/order.json';

  constructor(private http: HttpClient) { }

  getOrderCount(): Observable<any[]> {
    console.log("service");
    return this.http.get<any[]>(this.salesUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    return throwError(`An error occurred: ${err}`);
  }
}
