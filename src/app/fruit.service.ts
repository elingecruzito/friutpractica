import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {


  constructor(private httpClient: HttpClient) { }

  all():Observable<Fruit[]>{
    return this.httpClient.get<Fruit[]>('/api/fruit/all');
  }

  getFamily(family:String):Observable<Fruit[]>{
    return this.httpClient.get<Fruit[]>(`/api/fruit/family/${family}`);
  }

  getGenus(genus:String):Observable<Fruit[]>{
    return this.httpClient.get<Fruit[]>(`/api/fruit/genus/${genus}`);
  }

  getOrder(order:String):Observable<Fruit[]>{
    return this.httpClient.get<Fruit[]>(`/api/fruit/order/${order}`);
  }
}
