import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import { File } from '../../interfaces/file';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-novapublicacao',
  templateUrl: './novapublicacao.component.html',
  styleUrls: ['./novapublicacao.component.css']
})
export class NovapublicacaoComponent implements OnInit {

  constructor(private postService: PostService) { }

  post = {
    titulo: "",
    descricao: ""
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
      })

  }

  uploadImage(event){
      const imagemCapa = event.target.files[0];
      
      const formData = new FormData();
      formData.append('capa', imagemCapa)

      this.postService.uploadImage(formData).subscribe((ret: File)=>{
        this.imgURL = environment.api + "/" + ret.pathImg
      })

  }




}
