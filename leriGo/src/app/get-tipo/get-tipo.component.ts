import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { Produto } from '../model/produto';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';
import { MidiaService } from '../service/midia.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-get-tipo',
  templateUrl: './get-tipo.component.html',
  styleUrls: ['./get-tipo.component.css']
})
export class GetTipoComponent implements OnInit {

  idProd!: number
  idCate!: number
  produto: Produto = new Produto()
  listaProduto!: Produto[]
  categoria: Categoria = new Categoria()
  listaCategoria!: Categoria[]
  nome!: string
  tipoCategoria!: string
  nomeProduto!: string

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private midiaService: MidiaService,
    private alert: AlertasService
  ) { }

  ngOnInit(): void {
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=> {
      this.listaCategoria = resp
    })
  }
  
  findByTipoCategoria() {
    if (this.tipoCategoria === ''){
      this.findAllCategorias()
    } else{
      this.categoriaService.getByTipoCategoria(this.tipoCategoria).subscribe((resp: Categoria[]) => {
        this.listaCategoria = resp
      })
    }
  }
}
