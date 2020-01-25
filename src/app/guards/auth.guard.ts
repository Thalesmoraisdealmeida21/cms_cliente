import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){}

  statusTemp: boolean =false
  canActivate(): boolean {
    

      this.authService.autenticado$.subscribe((statusLogin)=>{
           this.statusTemp = statusLogin
      })
      console.log("statusTemp: " + this.statusTemp)

     return this.statusTemp;



  }
  
  
}
