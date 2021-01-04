import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { Usuario } from '../model/usuario';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { MidiaService } from '../service/midia.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  public paginaAtual = 1;
  idProd!: number
  idCate!: number
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]

  env = environment;

  carrinho: Produto = new Produto()
  listaCarrinho!: Produto[]

  foto!: File

  usuario: Usuario = new Usuario()

  senha!: string
  confirmarSenha!: string
  
  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private midiaService: MidiaService,
    private alert: AlertasService
  ) { }

  


  ngOnInit(){
    window.scroll(0,0)

    console.log(this.env.id)

    this.getByIdUsuario()
    this.findAllCategorias()
    this.findAllProdutos()
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

  publicarAnuncio() {
    this.categoria.idCategoria = this.idCate

    if (this.produto.nome == null || this.produto.quantidade < 1 || this.produto.preco == null || this.produto.foto == null) {
      this.alert.showAlertDanger('Preencha todos os campos antes de publicar')
    } else {
      if (this.foto != null) {
        this.midiaService.uploadPhoto(this.foto).subscribe((resp: any) => {
          this.produto.foto = resp.secure_url
          this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
            this.produto = resp
            this.produto = new Produto()
            this.alert.showAlertSuccess('Produto anunciado com sucesso!')
            window.location.reload()
            this.findAllProdutos()
          })
        })
      } else {
        this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=> {
          this.produto = resp
          this.produto = new Produto()
          this.alert.showAlertSuccess('Produto anunciado com sucesso!')
          window.location.reload()
          this.findAllProdutos()
        })
      }
    }
  }

  btnDelete(){
    this.produtoService.deleteProduto(this.idProd).subscribe(()=>{
      this.router.navigate(['/minhaConta'])
      this.alert.showAlertDanger('Produto excluido com sucesso!')
      window.location.reload()
    })
  }

  identificarId(id: number){
    this.idProd = id
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
      })
  }

  salvar(){  

    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp
    this.router.navigate(['/minhaConta'])
    this.alert.showAlertInfo('Postagem alterada com sucesso')
    window.location.reload()
    }, err =>{
      if(err.status == '500'){
        this.alert.showAlertDanger('Preencha todos os campos corretamente antes de enviar')
      }
    })
  }
  
  
carregarImagemPreview(event: any) {
  this.foto = event.target.files[0]
  let url = URL.createObjectURL(this.foto);
  (<HTMLImageElement>document.querySelector('img#imagem-preview'))!.src = url
}

getByIdUsuario(){
  this.usuarioService.getByIdUsuario(this.env.id).subscribe((resp: Usuario) =>{
    this.usuario = resp
  })
}

atualizarDados(){

  if(this.senha == this.confirmarSenha){

    this.usuario.senha = this.senha
    this.usuarioService.putUsuario(this.usuario).subscribe((resp: Usuario) =>{
      this.usuario = resp
      this.env.nome = this.usuario.nome
      this.env.email = this.usuario.email
      this.env.senha = this.usuario.senha
      window.scroll(0,0)
      this.alert.showAlertSuccess('Dados Alterados com sucesso')
    })

  }


  
  
}

}
