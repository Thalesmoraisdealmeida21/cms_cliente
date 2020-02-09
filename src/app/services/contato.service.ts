import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }


  getAllContatos(){
    const url = environment.api + "/contatos"
    return this.http.get(url);
  }


  getOneContact(id){
    const url = environment.api + "/contato/" + id
    return this.http.get(url);
  }

  deleteContact(id){
    const url = environment.api + "/contato/" + id
    return this.http.delete(url);
  }
}
