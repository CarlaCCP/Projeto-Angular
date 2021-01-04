import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alert: AlertasService
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
        this.alert.showAlertSuccess('Usuario cadastrado com sucesso')
      })
    } else {
      this.alert.showAlertDanger("Suas senhas não conferem")
    }
  }
}
