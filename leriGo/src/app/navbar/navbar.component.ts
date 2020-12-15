import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
    ) { }

  ngOnInit(){
    
  }
  

  nome(){

    let token = localStorage.getItem('token')
    let Login 

    if(token != null){
      
      Login = localStorage.getItem('nome')
    }else if(token == null){
      Login = "Logar"
    }
    return new String (Login)
  }

  verificarLogin(){

    let Login = localStorage.getItem('nome')

    if(Login == null || Login == "Logar"){
      this.router.navigate(['/login'])
    }else{
      this.router.navigate(['/minhaConta'])
    }

  }
  





}
