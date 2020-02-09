import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { HttpClient } from '@angular/common/http';
import { Email } from '../../interfaces/email';
import { EmailService } from '../../services/email.service';
import PNotify from 'pnotify/dist/es/PNotify';
import { ActivatedRoute } from '@angular/router';
import { Contato } from '../../interfaces/contato';
import { ContatoService } from '../../services/contato.service';
@Component({
  selector: 'app-responder-contato',
  templateUrl: './responder-contato.component.html',
  styleUrls: ['./responder-contato.component.css']
})
export class ResponderContatoComponent implements OnInit {

  constructor(
    private emailService: EmailService,
    private activeRoute: ActivatedRoute,
    private contatoService: ContatoService
  ) { }
  Editor = ClassicEditor
  Contato: Contato


  resposta = {
    to: "",
    subject:"",
    message: ""
  }




  ngOnInit(): void {

    this.activeRoute.params.subscribe((parametros)=>{
          this.getDataContato(parametros['id']);

    })
  }

   initVariable(contato: Contato){
    contato.email = ""
    contato.assunto = ""
  }

  getDataContato(id){
        this.contatoService.getOneContact(id).subscribe((contato: Contato)=>{
          this.Contato = contato
          this.resposta.to = contato.email;
          this.resposta.subject = "RE: " + contato.assunto;
        })
  } 

  resMsg(){
      this.emailService.sendMail(this.resposta).subscribe((resposta)=>{
        if(resposta){
          PNotify.success({
            title: "Sistema",
            Text: "E-mail respondido com sucesso"
          })
        }

      })
  }

}
