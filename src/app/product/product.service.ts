import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct():Observable<any[]> {
  return this.http.get<any[]>('../../assets/product.json')
  }

}
