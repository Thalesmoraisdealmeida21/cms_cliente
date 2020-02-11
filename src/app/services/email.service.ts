import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  sendMail(email){
    const url = environment.api + "/sendmail"
    return this.http.post(url, email)
  }

  initConfigEmail(config){
    const url = environment.api + "/email/initconfig"
    return this.http.post(url, config);
  }

  setConfigEmail(config){
    const url = environment.api + "/email/setconfig"
    console.log(config)
    return this.http.post(url, config);
  }


  getConfigEmail(){
    const url = environment.api + "/email/getconfig"
    return this.http.get(url);
  }
}
