
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituicoesMulheresAPI } from './instituicoes-mulheres-api';

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

