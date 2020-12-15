import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MidiaService } from '../midia.service';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  idProd!: number
  idCate!: number
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]

  foto: File

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private midiaService: MidiaService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.findAllCategorias()
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCate).subscribe((resp: Categoria) => {
      this.categoria = resp
    })
  }

  publicarAnuncio() {
    this.categoria.idCategoria = this.idCate

    if (this.produto.nome == null || this.produto.quantidade < 1 || this.produto.preco == null || this.produto.foto == null) {
      alert('Preencha todos os campos antes de publicar')
    } else {
      if (this.foto != null) {
        this.midiaService.uploadPhoto(this.foto).subscribe((resp: any) => {
          this.produto.foto = resp.secure_url
          this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
            this.produto = resp
            this.produto = new Produto()
            alert('Produto anunciado com sucesso!')
            this.findAllProdutos()
          })
        })
      } else {
        this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=> {
          this.produto = resp
          this.produto = new Produto()
          alert('Produto anunciado com sucesso!')
          this.findAllProdutos()
        })
      }

    }


  }

  btnDelete() {
    this.produtoService.deleteProduto(this.idProd).subscribe(() => {
      this.router.navigate(['/minhaConta'])
      alert('Produto excluido com sucesso!')
    })
  }

  identificarId(id: number) {
    this.idProd = id
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  salvar() {

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.router.navigate(['/minhaConta'])
      alert('Postagem alterada com sucesso')
    }, err => {
      if (err.status == '500') {
        alert('Preencha todos os campos corretamente antes de enviar')
      }
    })
  }

  carregarImagemPreview(event: any) {
    this.foto = event.target.files[0]
    let url = URL.createObjectURL(this.foto);
    (<HTMLImageElement>document.querySelector('img#imagem-preview'))!.src = url
  }

}
