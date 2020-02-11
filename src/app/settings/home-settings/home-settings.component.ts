import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import PNotify from 'pnotify/dist/es/PNotify';

@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.css']
})
export class HomeSettingsComponent implements OnInit {

  constructor(
    private EmailService: EmailService
  ) { }

  config = {
      host: "",
      port: "",
      secure: "",
      user: "",
      password: ""
  }

  ngOnInit(): void {
  }

  saveDataEmail(){
    this.EmailService.saveConfigEmail(this.config).subscribe((configRet)=>{
      if(configRet){
          PNotify.success({
            title: "Sistema",
            text: "Configuração salva com sucesso"
          })
      }

    }, (err)=>{
      if(err){
        PNotify.error({
          title: "Sistema",
          text: "Ocorreu um erro ao salvar as configurações do e-mail"
        })
      }
    })
  }

}
