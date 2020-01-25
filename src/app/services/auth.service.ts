import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import jwtDecode from './../../../node_modules/jwt-decode'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _autenticado: BehaviorSubject<boolean>;
  public readonly autenticado$: Observable<boolean>;

  constructor(private http: HttpClient, private UserService: UserService) {
    this._autenticado = new BehaviorSubject(false);
    this.autenticado$ = this._autenticado.asObservable();
   }

  login(user){
      const url = environment.api + "/login"
      return this.http.post(url, user);

  }

  logout(token){
      const url = environment.api + "/logout"
      const HttpOption = {
        headers: new HttpHeaders({
          "content-type": "application/json",
          "authorization": token
        })
      }

      this._autenticado.next(false);
      return this.http.post(url, {}, HttpOption);
  }


  genSession(token: string){
    try{
      const usuario: User = jwtDecode(token);
      this.UserService.setUsuario(usuario);
      this._autenticado.next(true);
      return true;
    }catch(err){
      return false;
    }
  }



}
