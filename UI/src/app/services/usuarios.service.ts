import { DadosLogin } from './../models/dadosLogin';
import { DadosRegistro } from './../models/dadosRegistro';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string = "https://localhost:44338/api/Usuarios";

  constructor(private http: HttpClient) { }

  SalvarFoto(formData: any): Observable<any>{
    const apiUrl= `${this.url}/SalvarFoto`;
    return this.http.post<any>(apiUrl, formData);
  }

  RegistrarUsuario(dadosRegistro: DadosRegistro): Observable<any>{
    const apiUrl= `${this.url}/RegistrarUsuario`;
    return this.http.post<DadosRegistro>(apiUrl, dadosRegistro)
  }

  LogarUsuario(dadosLogin: DadosLogin): Observable<any>{
    const apiUrl= `${this.url}/LogarUsuario`;
    return this.http.post<DadosRegistro>(apiUrl, dadosLogin);
  }
  
}
