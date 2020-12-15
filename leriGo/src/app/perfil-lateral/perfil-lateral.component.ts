import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {
  user: Usuario = new Usuario()
 
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
