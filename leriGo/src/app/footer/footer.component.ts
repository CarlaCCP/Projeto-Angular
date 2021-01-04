import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  faFacebook = faFacebook
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faGithub = faGithub

  AtivarBruno: string = "Active"
  AtivarCarla: string = "Active"
  AtivarCleiton: string = "Active"
  AtivarJoao: string = "Active"
  AtivarLeonardo: string = "Active"
  AtivarYago: string = "Active"
  DesativarGeral!: string
  linkRede!: string
  foto: string = "assets/img/fotoBruno.jpg"
  nome: string = "Bruno"
  seletor: string = "do"
  nomeRede!: string

  constructor() { }

  ngOnInit(): void {
  }
  identificarRede(id: number){
    if(id == 1){
      this.foto = "assets/img/fotoBruno.jpg"
      this.nome = "Bruno"
      this.seletor = "do"
      this.nomeRede = "Linkedln"
      this.linkRede = "https://www.linkedin.com/in/bruno-ccosta/"
    }else{
      this.foto = "assets/img/fotoBruno.jpg"
      this.nome = "Bruno"
      this.seletor = "do"
      this.nomeRede = "GitHub"
      this.linkRede = "https://github.com/Bruno-CCosta"
    }
  }

  identificarPessoa(id: number){
    if(id == 1){
      this.foto = "assets/img/fotoBruno.jpg"
      this.nome = "Bruno"
      this.seletor = "do"
      if(this.nomeRede == "Linkedln"){
        this.linkRede = "https://www.linkedin.com/in/bruno-ccosta/"
      }else{
        this.linkRede = "https://github.com/Bruno-CCosta"
      }
    }else if(id == 2){
      this.nome = "Carla"
      this.seletor = "da"
      this.foto = "assets/img/fotoCarla.jpg"
      if(this.nomeRede == "Linkedln"){
        this.linkRede = "https://www.linkedin.com/in/carla-cristina-c-de-paula/"
      }else{
        this.linkRede = "https://github.com/CarlaCCP"
      }
    }else if(id == 3){
      this.nome = "Cleiton"
      this.seletor = "do"
      this.foto = "assets/img/fotoCleiton.jpg"
      if(this.nomeRede == "Linkedln"){
        this.linkRede = "https://www.linkedin.com/in/cleitonortegadev"
      }else{
        this.linkRede = "https://github.com/CleitonOrtega/"
      }
      
    } else if(id == 4){
      this.nome = "João"
      this.seletor = "do"
      this.foto = "assets/img/fotoJoao.png"
      if(this.nomeRede == "Linkedln"){
        this.linkRede = "https://www.linkedin.com/in/victor-rigoleto/"
      }else{
        this.linkRede = "https://github.com/victorigoleto"
      }
    }else if(id == 5){
      this.nome = "Leonardo"
      this.seletor = "do"
      this.foto = "assets/img/fotoLeo.jpg"
      if(this.nomeRede == "Linkedln"){
        this.linkRede = "https://www.linkedin.com/in/leonardo-iamur-terra/"
      }else{
        this.linkRede = "https://github.com/Leoiamur"
      }
      
    }else{
      this.nome = "Yago"
      this.seletor = "do"
      this.foto = "assets/img/fotoYago.jpeg"
      if(this.nomeRede == "Linkedln"){
        this.linkRede = "https://www.linkedin.com/in/yagotonoli"
      }else{
        this.linkRede = "https://github.com/yagotonoli"
      }
    }
  }

}