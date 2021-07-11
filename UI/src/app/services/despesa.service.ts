import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Despesa } from '../models/despesas';
import { httpOptions } from '../shared/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  url= `${environment.url}despesas`
  constructor(private http: HttpClient) { }

  PegarDespesasPeloUsuarioId(usuarioId: string): Observable<Despesa[]>{
    const apiUrl = `${this.url}/PegarDespesasPeloUsuarioId/${usuarioId}`;
    return this.http.get<Despesa[]>(apiUrl, httpOptions.Options);
  }

  PegarDespesaPeloId(despesaId: number): Observable<Despesa>{
    const apiUrl = `${this.url}/${despesaId}`;
    return this.http.get<Despesa>(apiUrl, httpOptions.Options);
  }

  NovaDespesa(despesa: Despesa): Observable<any>{
    return this.http.post<Despesa>(this.url, despesa, httpOptions.Options);
  }

  AtualizarDespesa(despesaId: number, despesa: Despesa): Observable<Despesa>{
    const apiUrl = `${this.url}/${despesaId}`;
    return this.http.put<Despesa>(apiUrl, despesa, httpOptions.Options);
  }

  ExcluirDespesa(despesaId: number): Observable<Despesa>{
    const apiUrl = `${this.url}/${despesaId}`;
    return this.http.delete<Despesa>(apiUrl, httpOptions.Options);
  }


}
