import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { responseapi } from '../../interfaces/responseapi';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';


@Component({
  selector: 'app-listapublicacoes',
  templateUrl: './listapublicacoes.component.html',
  styleUrls: ['./listapublicacoes.component.css']
})
export class ListapublicacoesComponent implements OnInit {

  posts: Post[]
  statusLoading: boolean = true;

  constructor(
    private postService: PostService
  ) {
    this.loadingGetData();
    PNotifyButtons; // Initiate the module. Important!
    PNotify.defaults.styling = 'bootstrap4'; // Bootstrap version 4
    this.statusLoading = true;
   }

  ngOnInit() {
    
  } 

  loadingGetData(){

    this.postService.getAllPosts().subscribe((posts: Post[])=>{
   
      this.posts = posts
      this.statusLoading = false;
    })
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe((resposta)=>{
      
      

            if(resposta.status == 200){
              PNotify.success({
                title: 'Publicação deletada com sucesso',
                
              });
           
              this.loadingGetData();
            } 
              if(resposta.status == 401){
            console.log("sem autenticação")
             
              }
            
            
    })
  }




}
