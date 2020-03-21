import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaAtuacaoServiceService {

  constructor(private http: HttpClient) { }


  getAllAreas(){
    const url = environment.api + "/areas-atuacao/find"
    return this.http.get(url);
  }

  uploadImage(imagem){
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    
    const url = environment.api + "/areas-atuacao/upload"
    return this.http.post(url, imagem)
  }


  deleteArea(id){
    const url = environment.api + "/areas-atuacao/delete/" + id

    return this.http.delete(url);
  }

  getById(id){
    const url = environment.api + "/areas-atuacao/find/id/" + id

    return this.http.get(url);
  }

  updateById(id, data){
    const url = environment.api + "/areas-atuacao/update/" + id
    return this.http.post(url, data);
  }
}
