import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import { File } from '../../interfaces/file';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'


@Component({
  selector: 'app-novapublicacao',
  templateUrl: './novapublicacao.component.html',
  styleUrls: ['./novapublicacao.component.css']
})
export class NovapublicacaoComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }
  Editor = ClassicEditor;
  post = {
    titulo: "",
    descricao: "",
    path: ""
  }
  
  imgPost
  imgPublic  
  imgURL
  
  ngOnInit() {

  }


  createPost(){
      this.postService.createPost(this.post).subscribe((postCreated)=>{

            PNotify.success({
              title: "Sistema",
              text: "Artigo públicado com sucesso"
            })

            this.router.navigateByUrl('publicacoes')
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
