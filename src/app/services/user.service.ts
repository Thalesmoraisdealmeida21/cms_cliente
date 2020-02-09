import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usuario: BehaviorSubject<User>;
  public readonly usuario$: Observable<User>;


  constructor(
    private http: HttpClient
  ) { 
    this._usuario = new BehaviorSubject({} as User);
    this.usuario$ = this._usuario.asObservable();
    
  }


  setUsuario(usuario: User) {
    this._usuario.next(usuario);
  }


  createUser(user){
      const url = environment.api + "/user"
      return this.http.post(url, user);
  }
}
