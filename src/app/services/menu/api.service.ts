import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sweet } from '../../classes/sweet';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl = "http://localhost:5000" 

  getAllSweets(){
    //this.http.get(this.url1) for jsonserver as a backend
    const obs=this.http.get<Sweet[]>(`${this.baseUrl}/sweets/all`)
    return obs;
  }

}
