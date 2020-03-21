import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment, TOKEN_STORAGE } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }


  getAllPosts(page){
      const url = environment.api + '/posts/' + page
      return this.http.get(url)
  }

  getPostById(id){
      const url = environment.api + "/post/" + id
      return this.http.get(url)
  }

  getByTitle(title)
  {
    const url = environment.api + "/post/search/title/" +  title;

      
    
    return this.http.get(url)
  }


  getAllandCount(){
    const url = environment.api + "/posts/count"
    return this.http.get(url);
  }

  deletePost(id){
    const url = environment.api + '/post/' + id;
    const headers = new HttpHeaders({
        'content-type': 'application/json',
         observe: 'response'
      })
    
    
    return this.http.delete(url, {headers: headers, observe: 'response'});
  }

  createPost(post){
    const url = environment.api + '/post'
    const httpOptions = {
       headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.http.post(url, post,httpOptions)
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
