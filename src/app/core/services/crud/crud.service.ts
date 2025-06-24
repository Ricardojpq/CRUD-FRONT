import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl:string = 'http://localhost:8000/api'
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<any>{
    try {
      return this.httpClient.get(`${this.baseUrl}/products`);
    
    } catch (error) {
      console.error('Error fetching products:', error);
      return of([])
    }
  }

}
