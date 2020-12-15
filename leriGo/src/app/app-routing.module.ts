import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';

import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: 'sobre', component: SobreComponent},
  {path: 'home',component: HomeComponent},
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro',component: CadastroComponent},
  {path: 'minhaConta',component: MinhaContaComponent},
  {path: 'perfilLateral',component: PerfilLateralComponent},
  {path: 'doacao', component: DoacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
