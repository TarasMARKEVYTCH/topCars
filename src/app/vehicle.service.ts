import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicle } from './Vehicles';
import { CARS } from './CARS';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private carsUrl = 'api/vehicles';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }
  // getAll(): Observable<Vehicle[]>{
  //   return this.http.get<Vehicle[]>(this.carsUrl)
  // }
  getVhl(id: number): Observable<Vehicle>{
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Vehicle>(url).pipe();
  }
}
