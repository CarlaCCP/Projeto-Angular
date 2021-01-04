import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllProdutos() : Observable<Produto[]>
{
  return this.http.get<Produto[]>('http://localhost:8080/produtos', this.token)
}

getByIdProduto(id: number) : Observable<Produto>{
  return this.http.get<Produto>(`http://localhost:8080/produtos/id.${id}`, this.token)
  }

postProduto(produto: Produto) : Observable<Produto>{
  return this.http.post<Produto>('http://localhost:8080/produtos', produto, this.token)
}

putProduto(produto: Produto) : Observable<Produto>{
  return this.http.put<Produto>(`http://localhost:8080/produtos`, produto ,this.token)
}

deleteProduto(id: number): Observable<Produto>{
  return this.http.delete<Produto>(`http://localhost:8080/produtos/id.${id}`,this.token)
}

getByNomeProduto(nome: string): Observable<Produto[]> {
  return this.http.get<Produto[]>(`http://localhost:8080/produtos/nome.${nome}`, this.token)
}
}
