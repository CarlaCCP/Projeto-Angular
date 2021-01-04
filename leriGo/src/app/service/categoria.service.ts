import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }
  getAllCategorias() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categoria', this.token)
  }

  getByIdCategoria(idCategoria: number) : Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categoria/${idCategoria}`, this.token)
  }

  postCategoria(categoria: Categoria) : Observable<Categoria>{
    return this.http.post<Categoria>('htttp://localhost:8080/categoria', categoria, this.token)
  }

  putCategoria(categoria: Categoria) : Observable<Categoria>{
    return this.http.put<Categoria>('http://localhost:8080/categoria', categoria, this.token)
  }

  getByTipoCategoria(tipo: string): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`http://localhost:8080/categoria/tipo.${tipo}`, this.token)
  }
}
