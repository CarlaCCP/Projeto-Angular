import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { DoacaoComponent } from './doacao/doacao.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetNomeComponent } from './get-nome/get-nome.component';
import { GetTipoComponent } from './get-tipo/get-tipo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProdutoComponent } from './produto/produto.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    LoginComponent,
    CadastroComponent,
    PerfilLateralComponent,
    MinhaContaComponent,
    DoacaoComponent,
    GetNomeComponent,
    GetTipoComponent,
    ProdutoComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
