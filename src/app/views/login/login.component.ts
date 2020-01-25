import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from '../../services/auth.service';
import { TokenAPi } from '../../interfaces/token-api';
import { TOKEN_STORAGE } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

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
      this.auth.login(this.user).subscribe((token: TokenAPi)=>{
        

        
        localStorage.setItem(TOKEN_STORAGE, token.token)
        if(this.auth.genSession(token.token)){
          this.router.navigateByUrl('/publicacoes')
        } else {
          console.log("Erro, não foi possivel criar a sua sessão")
        }
        
      })
  }

  logout(){

  }



}


