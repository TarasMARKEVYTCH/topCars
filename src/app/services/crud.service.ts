import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Vehicle } from '../Vehicles';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  REST_API: string = 'http://localhost:3000/api/';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json');
  constructor(private httpClient: HttpClient) {}
  async getCars(){
    return this.httpClient.get(`${this.REST_API}/vehicles`);
  }
  async getOneCar(id: number){
    return this.httpClient.get(`${this.REST_API}/${id}`);
  }
  async getTop(){
    return this.httpClient.get<Vehicle>(`${this.REST_API}`);
  }
  async getCategories(){
    return this.httpClient.get(`${this.REST_API}/categories`)
  }
  async getOneCategorie(id: number){
    console.log(id);
    return this.httpClient.get(`${this.REST_API}/categories/${id}`);
  }

  
  handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    } else{
      errorMessage = `Error Code = ${error.status}\nMessage:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    
  }
}
