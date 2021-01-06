import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Produto } from '../model/produto';
import { ProdutoService } from './produto.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  

  constructor(private http: HttpClient,
    private produtoService: ProdutoService,
    private router: Router
    ) { 
  }

  itens = [];



  adicionandoCarrinho(){
    this.itens.push()
    this.router.navigate(['/carrinho'])
  }

  pegarItens(){
    return this.itens;
  }

  limparCarrinho(){
    this.itens = [];
    return this.itens;
  }
}
