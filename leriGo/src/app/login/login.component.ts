import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { UsuarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuarioLogin = new UsuarioLogin()

  constructor(
    private authService: AuthService,
    private router: Router
    ) { 

  }

  ngOnInit(){

  }

  entrar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token)
      localStorage.setItem('nome', this.usuarioLogin.nome)
      this.router.navigate(['/home'])
    })
  }

}
