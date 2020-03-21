import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { responseapi } from '../../interfaces/responseapi';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import { ActivatedRoute, Router } from '@angular/router';
import { AllPages } from '../../interfaces/all-pages';


@Component({
  selector: 'app-listapublicacoes',
  templateUrl: './listapublicacoes.component.html',
  styleUrls: ['./listapublicacoes.component.css']
})
export class ListapublicacoesComponent implements OnInit {

  posts: Post[]
  statusLoading: boolean = true;
  search: string
  pages: number[] = [];
 

  constructor(
    private postService: PostService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
 
    this.loadingGetData();
    PNotifyButtons; // Initiate the module. Important!
    PNotify.defaults.styling = 'bootstrap4'; // Bootstrap version 4
 
   }

  ngOnInit() {
    this.statusLoading = true;
  } 

  searchPost(){
    this.statusLoading = true;
    if(this.search.length <= 0){
      this.search = "none"
    }
    this.postService.getByTitle(this.search).subscribe((posts: Post[])=>{
      this.posts = [];
      if(this.posts.length <= 0){
        this.statusLoading = false
      }
      this.posts = posts
      this.search = ""
  
    })
  }

  loadingGetData(){
    this.posts = []
    this.countNumberPages();
    this.statusLoading = true;
    this.activeRoute.params.subscribe((params)=>{
     
      this.postService.getAllPosts(params['page']).subscribe((posts: Post[])=>{
        this.posts = [];
        if(this.posts.length <= 0){
          this.statusLoading = false
        }
        this.posts = posts
   
    
      })
    })
   
  }

countNumberPages(){
  this.postService.getAllandCount().subscribe((allPages: AllPages)=>{

    let nPAges = allPages.count / 5;

    for(let i=0; i < nPAges; i++){
      this.pages.push(i+1);
    }

    console.log(this.pages)
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
