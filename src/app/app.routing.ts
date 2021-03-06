import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ListapublicacoesComponent } from './post/listapublicacoes/listapublicacoes.component';
import { NovapublicacaoComponent } from './post/novapublicacao/novapublicacao.component';
import { EditarComponent } from './post/editar/editar.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { ListacontatosComponent } from './contato/listacontatos/listacontatos.component';
import { AppTesteComponent } from './testes/app-teste/app-teste.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ResponderContatoComponent } from './contato/responder-contato/responder-contato.component';
import { ProfileComponent } from './user/profile/profile.component';
import { HomeSettingsComponent } from './settings/home-settings/home-settings.component';
import { PesquisaAreaAtuacaoComponent } from './area-atuacao/pesquisa-area-atuacao/pesquisa-area-atuacao.component';
import { VisualizaAreaAtuacaoComponent } from './area-atuacao/visualiza-area-atuacao/visualiza-area-atuacao.component';


export const routes: Routes = [

  
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'testes',
    component: AppTesteComponent,
   //canActivate: [AuthGuard]
  },

  {
    path: 'configuracoes',
    component: HomeSettingsComponent,
   //canActivate: [AuthGuard]
  },

  {
    path: 'contatos',
    component: ListacontatosComponent,
   //canActivate: [AuthGuard]
  },
  {
    path: 'contatos/responder/:id',
    component: ResponderContatoComponent,
   //canActivate: [AuthGuard]
  },
  {
    path: 'registrar',
    component: UserRegisterComponent,
   //canActivate: [AuthGuard]
  },

  {
    path: 'publicacoes/nova', 
    component: NovapublicacaoComponent,
   
},
   {
      path: 'publicacoes/:page',
      component: ListapublicacoesComponent,
      canActivate: [AuthGuard]
   },
    


  {
    path: 'area-atuacao/pesquisa', 
    component: PesquisaAreaAtuacaoComponent,
    canActivate: [AuthGuard]
},
{
  path: 'area-atuacao/editar/:id', 
  component: VisualizaAreaAtuacaoComponent,
  canActivate: [AuthGuard]
},


   {
       path: 'publicacoes/editar/:idPost', 
       component: EditarComponent,
       canActivate: [AuthGuard]
   },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard],
    data: {
      title: 'Painel Administrativo - Login'
    }
  },
  
  { path: '**', 
    redirectTo: "/login" 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
