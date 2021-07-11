import { Despesa } from './../models/despesas';
import { Mes } from './../models/mes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { httpOptions } from '../shared/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class MesService {
  url = `${environment.url}meses`

  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Mes[]>{
    return this.http.get<Mes[]>(this.url, httpOptions.Options);
  }

  PegarDespesasPeloUsuarioId(usuarioId: string): Observable<Despesa[]>{
    const apiUrl= `${this.url}/PegarDespesasPeloUsuarioId/${usuarioId}`;
    return this.http.get<Despesa[]>(apiUrl, httpOptions.Options);
  }

  PegarDespesasPeloId(despesaId: number): Observable<Despesa>{
    const apiUrl= `${this.url}/${despesaId}`;
    return this.http.get<Despesa>(apiUrl, httpOptions.Options);
  }

  NovaDespesa(despesa: Despesa): Observable<any>{
    return this.http.post<Despesa>(this.url, despesa, httpOptions.Options)
  }  

  
  AtualizarDespesa(despesaId: number, despesa: Despesa): Observable<any>{
    const apiUrl= `${this.url}/${despesaId}`;
    return this.http.put<Despesa>(apiUrl, despesa, httpOptions.Options);
  }

  
  ExcluirDespesa(despesaId: number): Observable<any>{
    const apiUrl= `${this.url}/${despesaId}`;
    return this.http.delete<number>(apiUrl, httpOptions.Options);
  }
}
