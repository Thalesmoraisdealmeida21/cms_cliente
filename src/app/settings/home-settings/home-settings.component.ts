import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import PNotify from 'pnotify/dist/es/PNotify';
import { ActivatedRoute } from '@angular/router';
import { ConfigEmail } from '../../interfaces/config-email';

@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.css']
})
export class HomeSettingsComponent implements OnInit {

  config: ConfigEmail

  constructor(
    private emailService: EmailService
  ) { 
  
    this.existsConfiguration();
  }






  ngOnInit() {


  }



  saveDataEmail(){
    this.emailService.setConfigEmail(this.config).subscribe((configRet)=>{
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



 

  existsConfiguration(): Boolean {


       this.emailService.getConfigEmail().subscribe((configuration: ConfigEmail)=>{
         if(configuration){
              this.config = configuration;
         } else {
              this.emailService.initConfigEmail(this.config).subscribe((configInit: ConfigEmail)=> {
                this.config = configInit;
                console.log("inicializou configuração do e-mail")
              })

         }
           
        })

        return true;
  }

}
