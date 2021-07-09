import { environment } from './../../environments/environment.prod';
import { Tipo } from './../models/tipo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpOptions } from '../shared/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class TiposService {
  url: string = `${environment.url}Tipo`;
  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Tipo[]>{
    return this.http.get<Tipo[]>(this.url, httpOptions.Options);
  }
}
