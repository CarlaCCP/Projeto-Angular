import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { CarrinhoService } from '../service/carrinho.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  idProdutos!: number[]
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  listaProd!: []

  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]
  idProd!: number

 

  itens!: Produto[]
  total: string = " R$ 0,00"
  
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private carrinhoService: CarrinhoService,
    private router: Router,
    private route: ActivatedRoute,
    
    
  ) { }

  ngOnInit() {
   /* let idProd = this.route.snapshot.params["idProduto"]

    this.identificarId(idProd)
    this.findAllProdutos()
    this.findByIdProdutos()*/
    this.itens = this.carrinhoService.pegarItens()
    window.scroll(0,0)
  }

  identificarId(id: number){
    this.idProd = id
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
      })
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

  findByIdProdutos(){
    this.produtoService.getByIdProduto(this.idProd).subscribe((resp: Produto)=>{
      this.produto = resp  
    })
  }

}
