import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MidiaService } from '../midia.service';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  user: Usuario = new Usuario()
  senha!: string

  
  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  conferirSenha(event: any){
    this.senha = event.target.value
  }
  cadastrar(){
    if (this.senha === this.user.senha){
      
      this.authService.cadastar(this.user).subscribe((resp:Usuario) =>{
        this.user = resp
        this.router.navigate(['/home'])
        alert('Usuario cadastrado com sucesso')
      })
    } else {
      alert("Suas senhas não conferem")
    }
  }

}
