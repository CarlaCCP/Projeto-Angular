import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppModule } from '../app.module';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})

export class HomeComponent implements OnInit {
  title = 'angularowlslider';
  customOptions: OwlOptions = {
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['Anterior', 'Proximo'],
    responsive: {
      0: {
        items: 1
        
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true,
  }
  
  public paginaAtual = 1;
  idProd!: number
  idCate!: number
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]

  numVezes: number = 0

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {}



  public ngOnInit(){
    window.scroll(0,0)

    this.findAllCategorias()
    this.findAllProdutos()
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=> {
      this.listaCategoria = resp
    })
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

}