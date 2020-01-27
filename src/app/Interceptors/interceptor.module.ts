
import { Injectable, NgModule } from '@angular/core';
import {
 HttpEvent,
 HttpInterceptor,
 HttpHandler,
 HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_STORAGE } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
  })

export class HttpsRequestInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>>{
        if(localStorage.getItem(TOKEN_STORAGE)){
            return next.handle(this.addToken(req, localStorage.getItem(TOKEN_STORAGE)));
        }
 
        return next.handle(req)
        
    }

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        return req.clone({ setHeaders: { authorization: token} });
      }
}


