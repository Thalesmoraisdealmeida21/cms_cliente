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

  constructor(
    private postService: PostService
  ) {
    this.loadingGetData();
    PNotifyButtons; // Initiate the module. Important!
    PNotify.defaults.styling = 'bootstrap4'; // Bootstrap version 4

   }

  ngOnInit() {
  } 

  loadingGetData(){
    this.postService.getAllPosts().subscribe((posts: Post[])=>{
      this.posts = posts
    })
  }

  deletePost(id){
    this.postService.deletePost(id).subscribe((resposta: responseapi)=>{
            if(resposta.status){
              PNotify.success({
                title: 'Publicação deletada com sucesso',
                text: resposta.msg
              });
              this.loadingGetData();
            } else {
              PNotify.error({
                title: 'Não foi possivel deletar a publicação',
                text: resposta.msg
              });
            }
    })
  }




}
