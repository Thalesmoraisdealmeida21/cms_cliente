import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TOKEN_STORAGE } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { navItems } from './_nav';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './containers/default-layout/default-layout.component.html'
})
export class AppComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = navItems;
  statusLogin: boolean
  constructor(
    private router: Router, 
    private AuthService: AuthService) {
        this.getStatusLogin();
    }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    if(localStorage.getItem(TOKEN_STORAGE)){
      
      const token = localStorage.getItem(TOKEN_STORAGE)
      if(this.AuthService.genSession(token)){
        console.log("Não foi possivel criar a sessão")
      }

      this.AuthService.autenticado$.subscribe((statusLogin)=>{
          if(statusLogin == false) {
            this.router.navigateByUrl("/login")
          } else {
            this.router.navigateByUrl("/publicacoes")
          }
      })
    }
  }


  logout(){
    const token = localStorage.getItem(TOKEN_STORAGE);
     // this.router.navigateByUrl('login')
     this.AuthService.logout(token).subscribe(()=>{
       this.router.navigateByUrl('login')
     })
   }

  
   getStatusLogin(){
    this.AuthService.autenticado$.subscribe((statusLogin)=>{
       this.statusLogin = statusLogin
       
    })

    console.log("Status do Login appCompnent: " + this.statusLogin)
 }



}
