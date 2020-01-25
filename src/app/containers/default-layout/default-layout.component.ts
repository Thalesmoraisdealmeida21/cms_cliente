import {Component } from '@angular/core';
import { navItems } from '../../_nav';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TOKEN_STORAGE } from '../../../environments/environment';
import PNotify from 'pnotify/dist/es/PNotify';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;


  constructor(private AuthService: AuthService, private router: Router){}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

 
}
