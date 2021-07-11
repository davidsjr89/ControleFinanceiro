import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { httpOptions } from '../shared/httpOptions';
@Injectable({
  providedIn: 'root',
})
export class CategoriasService {

  url: string = `${environment.url}Categorias`;
  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url, httpOptions.Options);
  }

  PegarCategoriaPeloId(categoriaId: number): Observable<Categoria>{
    const apiurl = `${this.url}/${categoriaId}`;
    return this.http.get<Categoria>(apiurl, httpOptions.Options);
  }

  NovaCategoria(categoria: Categoria): Observable<any>{
    return this.http.post<Categoria>(this.url, categoria, httpOptions.Options);
  }

  AtualizarCategoria(categoriaId: number, categoria: Categoria): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.put<Categoria>(apiUrl, categoria, httpOptions.Options);
  }

  ExcluirCategoria(categoriaId: number): Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.delete<number>(apiUrl, httpOptions.Options);
  }

  FiltrarCategorias(nomeCategoria: string): Observable<Categoria[]>{
    const apiUrl = `${this.url}/FiltrarCategorias/${nomeCategoria}`;
    return this.http.get<Categoria[]>(apiUrl, httpOptions.Options);
  }

  FiltrarCategoriasDespesas(): Observable<Categoria[]>{
    const apiUrl = `${this.url}/FiltrarCategoriasDespesas`;
    return this.http.get<Categoria[]>(apiUrl);
  }
}
