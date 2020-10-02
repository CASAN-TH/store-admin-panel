import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private http: HttpClient) { }
  getCustomer(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/customers.json');

  }
  getCustomerID(id): Observable<any> {
    if (id === 'new') {
      return new Observable(observable => {
        observable.next(
          {
            "id": "",
            "name": "",
            "address1": "",
            "postcode": "",
            "city": "",
            "district": "",
            "country": "",
            "phone": ""
          }
        )
      })
    } else {
      return this.http.get<any>('../../assets/customer.json');
    }
  }

}
