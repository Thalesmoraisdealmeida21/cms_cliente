import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import PNotify from 'pnotify/dist/es/PNotify';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private router: Router
  ) { }

  loadingStatusClass: string
  statusFieldsLoading: string
  showFields: string

  User = {
    username: "",
    password: "",
    email: ""
  }

  

  ngOnInit(): void {
  }


  saveUser(){
      this.loadingStatusClass = "showLoading"
      this.statusFieldsLoading = "disableFields"
      this.showFields = "fields-body"

      this.UserService.createUser(this.User).subscribe((userRegistred: User)=>{
        this.loadingStatusClass = ""
        this.statusFieldsLoading = ""
        this.showFields = ""
            if(userRegistred){
              PNotify.success({
                title: "Sistema",
                text: "Usuário " + userRegistred.username + " registrado com sucesso !!"
              })
              this.router.navigateByUrl('/login')
            } else {
              PNotify.error({
                title: "Sistema",
                text: "Não foi possivel registrar o usuário"
              })
            }
      })


  }





}
