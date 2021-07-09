import { environment } from './../../environments/environment.prod';
import { DadosLogin } from './../models/dadosLogin';
import { DadosRegistro } from './../models/dadosRegistro';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { httpOptions } from '../shared/httpOptions';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string = `${environment.url}Usuarios`;

  constructor(private http: HttpClient) { }

  SalvarFoto(formData: any): Observable<any>{
    const apiUrl= `${this.url}/SalvarFoto`;
    return this.http.post<any>(apiUrl, formData, httpOptions.Options);
  }

  RegistrarUsuario(dadosRegistro: DadosRegistro): Observable<any>{
    const apiUrl= `${this.url}/RegistrarUsuario`;
    return this.http.post<DadosRegistro>(apiUrl, dadosRegistro, httpOptions.Options)
  }

  LogarUsuario(dadosLogin: DadosLogin): Observable<any>{
    const apiUrl= `${this.url}/LogarUsuario`;
    return this.http.post<DadosRegistro>(apiUrl, dadosLogin, httpOptions.Options);
  }
  
}
