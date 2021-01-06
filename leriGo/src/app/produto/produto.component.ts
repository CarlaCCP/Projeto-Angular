import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { AlertasService } from '../service/alertas.service';
import { CarrinhoService } from '../service/carrinho.service';
import { CategoriaService } from '../service/categoria.service';
import { MidiaService } from '../service/midia.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idProd!: number
  idCate!: number
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]
  valorAntigo!: number
  
  foto!: File
  produtoCarrinho = this.produto
  idCar!: number
  

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private midiaService: MidiaService,
    private carrinhoService: CarrinhoService,
    private alert: AlertasService,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['idProduto']
    this.identificarId(id)
    this.findAllProdutos()
    window.scroll(0,0)
  }

  identificarId(id: number) {
    this.idProd = id
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
      this.valorAntigo = this.produto.preco + 10

    })
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=> {
      this.listaCategoria = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCate).subscribe((resp : Categoria)=> {
      this.categoria = resp
    })
  }

  adicionandoCarrinho(){
  this.carrinhoService.adicionandoCarrinho()
  this.alert.showAlertSuccess("Produto adicionado ao carrinho!");
 }

}
