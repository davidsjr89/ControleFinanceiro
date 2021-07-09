import { environment } from './../../environments/environment.prod';
import { Funcao } from './../models/funcao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../shared/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class FuncoesService {
  url: string = `${environment.url}Funcoes`;
  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Funcao[]>{
    return this.http.get<Funcao[]>(this.url, httpOptions.Options);
  }

  PegarPeloId(funcaoId: string): Observable<Funcao>{
    const apiUrl = `${this.url}/${funcaoId}`;
    return this.http.get<Funcao>(apiUrl, httpOptions.Options);
  }

  NovaFuncao(funcao: Funcao): Observable<any>{
    return this.http.post<Funcao>(this.url, funcao, httpOptions.Options);
  }

  AtualizarFuncao(funcaoId: string, funcao: Funcao): Observable<any>{
    const apiUrl = `${this.url}/${funcaoId}`;
    return this.http.put<Funcao>(apiUrl, funcao, httpOptions.Options);
  }

  ExcluirFuncao(funcaoId: string): Observable<any>{
    const apiUrl = `${this.url}/${funcaoId}`;
    return this.http.delete<Funcao>(apiUrl, httpOptions.Options);
  }

  FiltrarFuncoes(nomeFuncao: string): Observable<Funcao[]>{
    const apiUrl = `${this.url}/FiltrarFuncoes/${nomeFuncao}`;
    return this.http.get<Funcao[]>(apiUrl, httpOptions.Options);
  }  
}
