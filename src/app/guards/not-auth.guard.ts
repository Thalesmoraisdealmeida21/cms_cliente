import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {

  private statusTemp
  constructor(private AuthService: AuthService ){

  }

  canActivate(): boolean {
    this.AuthService.autenticado$.subscribe((ret)=>{
      this.statusTemp = ret
   })
   console.log(!this.statusTemp)
   return !this.statusTemp;



  }
  
}
