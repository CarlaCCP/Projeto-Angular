import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';
import { UsuarioLogin } from '../model/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getByIdUsuario(id : number) : Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuario/${id}`,this.token)  
  }

  putUsuario(usuario : Usuario) : Observable<Usuario>{
    return this.http.put<Usuario>(`http://localhost:8080/usuario`, usuario, this.token)
  }

  
}
