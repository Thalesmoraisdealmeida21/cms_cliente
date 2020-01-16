import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }


  getAllPosts(){
      const url = environment.api + '/posts'
      return this.http.get(url)
  }

  getPostById(id){
      const url = environment.api + "/post/" + id
      return this.http.get(url)
  }

  deletePost(id){
    const url = environment.api + '/post/' + id;
    return this.http.delete(url);
  }

  createPost(post){
    const url = environment.api + '/post'
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.http.post(url, post)
  }

  updatePost(post, id){
    console.log(id)
    const url = environment.api + '/post/update/' + id
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.http.post(url, post,httpOptions)


  }

  uploadImage(imagem){
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  
    const url = environment.api + "/upload"
    return this.http.post(url, imagem)


  }

}
