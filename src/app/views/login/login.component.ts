import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { TokenAPi } from '../../interfaces/token-api';
import { TOKEN_STORAGE } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import PNotify from 'pnotify/dist/es/PNotify';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  
  

  user = {
    username: "",
    password: ""
  }
  constructor(private auth: AuthService, private router: Router){
 
  }


  login(){

    PNotify.notice({ title: 'Logando, Por favor aguarde ...',
        text: '<div class="progress">\n' +
          '  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></' + 'div>\n' +
          '</' + 'div>',
        textTrusted: true,
        icon: 'fas fa-cog fa-spin',
        hide: false})


      this.auth.login(this.user).subscribe((token: TokenAPi)=>{
        
       PNotify.removeAll();
        
        localStorage.setItem(TOKEN_STORAGE, token.token)
        if(this.auth.genSession(token.token)){
          this.router.navigateByUrl('/publicacoes')
        } else {
          PNotify.error({
            title: "Login",
            text: "Ocorreu um falha ao tentar criar a sessão"
          })
        }
        
      }, (err)=>{
        PNotify.removeAll();
        if(err.status == 401){
          PNotify.error({
            title: "Login",
            text: "Usuário e/ou senha invalidos."
          })
        } else {
          PNotify.error({
            title: "Login",
            text: "Não foi possível realizar login."
          })
        }
        
      })
  }

  logout(){

  }



}


