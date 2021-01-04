import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Carrinho } from '../model/carrinho';
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
  itens!: number[]
  foto!: File
  carrinho: Carrinho = new Carrinho()
  listaItens!: Carrinho[]
  idCar!: number

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private midiaService: MidiaService,
    private carrinhoService: CarrinhoService,
    private alert: AlertasService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['idProduto']
    this.findAllItens()
    this.identificarId(id)
    this.findAllProdutos()
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

  adicionaCarrinho(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
     this.produto = resp
      return this.itens.push(id)
    })
  }

  findAllItens() {
    this.carrinhoService.getAllItens().subscribe((resp: Carrinho[]) => {
      this.listaItens = resp
    })
  }

  /*adicionaCarrinho() {
    this.carrinho.idCarrinho = this.idCar 
      if (this.foto != null) {
        this.midiaService.uploadPhoto(this.foto).subscribe((resp: any) => {
          this.carrinho.foto = resp.secure_url
          this.carrinhoService.postItens(this.carrinho).subscribe((resp: Carrinho) => {
            this.carrinho.nome = this.produto.nome
            this.carrinho.preco = this.produto.preco
            this.carrinho.quantidade = this.produto.quantidade
            this.carrinho.foto = this.produto.foto
            this.carrinho = resp
            this.carrinho = new Carrinho()
            this.alert.showAlertSuccess('Produto anunciado com sucesso!')
            window.location.reload()
            this.findAllItens()
            this.findAllProdutos()
            
          })
        })
      } else {
        this.carrinhoService.postItens(this.carrinho).subscribe((resp: Carrinho) => {
          
          this.carrinho.nome = this.produto.nome
          this.carrinho.preco = this.produto.preco
          this.carrinho.quantidade = this.produto.quantidade
          this.carrinho.foto = this.produto.foto
          this.carrinho = resp
          this.carrinho = new Carrinho()
          this.alert.showAlertSuccess('Produto anunciado com sucesso!')
          window.location.reload()
          this.findAllItens()
        })
      }
    
  }*/


}
