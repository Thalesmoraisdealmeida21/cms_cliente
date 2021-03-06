import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../interfaces/post';
import { responseapi } from '../../interfaces/responseapi';
import PNotify from 'pnotify/dist/es/PNotify';
import { environment } from '../../../environments/environment';
import { File } from '../../interfaces/file';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic' 
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  idPost
 Editor = ClassicEditor
  constructor(
    private postService: PostService,
    private routeActivate: ActivatedRoute
    ) { 
      this.getPost();
    }

  post: Post;
  imgURL;
  

  ngOnInit() {
  
  }

  getPost(){
    this.routeActivate.params.subscribe((parametros)=>{
           this.idPost = parametros.idPost

           this.postService.getPostById(this.idPost).subscribe((post: Post)=>{
              this.post = post
              this.imgURL = post.imgCapa
           })

    })
  }

  updatePost(){
    this.routeActivate.params.subscribe((parametros)=>{
        this.idPost = parametros.idPost

        this.postService.updatePost(this.post, parametros.idPost).subscribe((resposta: responseapi)=>{
              if(resposta.status){
                PNotify.success({
                  title: "Sistema",
                  text: resposta.msg
                })
              } else {
                PNotify.error({
                  title: "Sistema",
                  text: resposta.msg
                })
              }
        })


    })
  }


  uploadImage(event){
    const imagemCapa = event.target.files[0];
      
    const formData = new FormData();
    formData.append('capa', imagemCapa)

    this.postService.uploadImage(formData).subscribe((ret: File)=>{
      this.imgURL = environment.api + "/" + ret.pathImg
      this.post.path = this.imgURL

    })  
  }

}
