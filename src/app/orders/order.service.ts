import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrder(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/orders.json')
  }
  getOrderById(id): Observable<any> {
    if (id === 'new') {
      return new Observable<any>(observable=>{
        observable.next(
          {
            "id": id,
            "date": "",
            "name": "",
            "status": "",
            "orderTotal": 0,
            "paymentMode": ""
          }
        )
      })
    } else {
      return this.http.get<any[]>('../../assets/order.json')
    }

  }
}
