import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _usuario: BehaviorSubject<User>;
  public readonly usuario$: Observable<User>;


  constructor() { 
    this._usuario = new BehaviorSubject({} as User);
    this.usuario$ = this._usuario.asObservable();
  }


  setUsuario(usuario: User) {
    this._usuario.next(usuario);
  }
}
