import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../model/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { 
    
  }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllItens() : Observable<Carrinho[]>{
    return this.http.get<Carrinho[]>('http://localhost:8080/carrinho', this.token)
  }

  getByIdItens(idCarrinho: number) : Observable<Carrinho>{
    return this.http.get<Carrinho>(`http://localhost:8080/carrinho/${idCarrinho}`, this.token)
  }


  postItens(carrinho: Carrinho) : Observable<Carrinho>{
    return this.http.post<Carrinho>('http://localhost:8080/carrinho', carrinho, this.token)
  }

  putCategoria(carrinho: Carrinho) : Observable<Carrinho>{
    return this.http.put<Carrinho>('http://localhost:8080/carrinho', carrinho, this.token)
  }

deleteItens() : Observable<Carrinho[]>{
  return this.http.delete<Carrinho[]>('http://localhost:8080/carrinho', this.token)
}

}
