import { environment } from './../../environments/environment.prod';
import { Cartao } from './../models/cartao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../shared/httpOptions';

@Injectable({
  providedIn: 'root'
})

export class CartoesService {
  url: string = `${environment.url}Cartoes`;
  constructor(private http: HttpClient) { }

  PegarCartaoPeloId(cartaoId: number): Observable<Cartao>{
    const apiUrl = `${this.url}/${cartaoId}`;
    return this.http.get<Cartao>(apiUrl);
  }

  PegarCartoesPeloUsuarioId(usuarioId: string): Observable<Cartao[]>{
    const apiUrl = `${this.url}/PegarCartoesPeloUsuarioId/${usuarioId}`;
    return this.http.get<Cartao[]>(apiUrl);
  }

  NovoCartao(cartao: Cartao): Observable<any>{
    return this.http.post<Cartao>(this.url, cartao);
  }

  AtualizarCartao(cartaoId: number, cartao: Cartao): Observable<any>{
    const apiUrl = `${this.url}/atualizar/${cartaoId}`;
    debugger
    return this.http.put<Cartao>(apiUrl, cartao);
  }

  ExcluirCartao(cartaoId: number): Observable<any>{
    const apiUrl = `${this.url}/${cartaoId}`;
    return this.http.delete<number>(apiUrl);
  }

  FiltrarCartoes(numeroCartao: any): Observable<Cartao[]>{
    const apiUrl = `${this.url}/FiltrarCartoes/${numeroCartao}`;
    return this.http.get<Cartao[]>(apiUrl);

  }
}
