
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituicoesMulheresAPI } from './instituicoes-mulheres-api';
import { LeisAPI } from './leis-api';
​
@Injectable({
 providedIn: 'root'
})
export class AjudaAPIService {
​
 constructor(private http: HttpClient) { }

 private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';
​
  public get(): Observable<InstituicoesMulheresAPI[]> {
   return this.http.get<InstituicoesMulheresAPI[]>(this.apiUrl);
 }
}

export class leisAPIService {
  ​
   constructor(private http: HttpClient) { }

   private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/leisMulheres.json';
  ​
    public get(): Observable<LeisAPI[]> {
     return this.http.get<LeisAPI[]>(this.apiUrl);
   }
  }
