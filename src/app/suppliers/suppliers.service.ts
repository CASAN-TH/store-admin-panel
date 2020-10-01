import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http:HttpClient) { }

  getSuppliers():Observable<any[]>{
  console.log("Service")
  return this.http.get<any[]>('../../assets/suppliers.json');
  }
}
