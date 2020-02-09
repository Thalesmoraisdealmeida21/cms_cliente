import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {MatInputModule} from '@angular/material/input';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {MatBadgeModule} from '@angular/material/badge';

import { HttpsRequestInterceptor } from './Interceptors/interceptor.module'
const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { NovapublicacaoComponent } from './post/novapublicacao/novapublicacao.component';
import { ListapublicacoesComponent } from './post/listapublicacoes/listapublicacoes.component';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './post/editar/editar.component';
import { FormPostComponent } from './post/form-post/form-post.component';
import { ListacontatosComponent } from './contato/listacontatos/listacontatos.component';
import { SimpleTableComponent } from './reusaveis/tables/simple-table/simple-table.component';
import { MatSliderModule } from '@angular/material/slider';
import { AppTesteComponent } from './testes/app-teste/app-teste.component';
import  { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import {MatButtonModule} from '@angular/material/button';
import { ResponderContatoComponent } from './contato/responder-contato/responder-contato.component'



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    NgbModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    RegisterComponent,
    NovapublicacaoComponent,
    ListapublicacoesComponent,
    EditarComponent,
    FormPostComponent,
    P404Component,
    P500Component,
    LoginComponent,
    ListacontatosComponent,
    SimpleTableComponent,
    AppTesteComponent,
    UserRegisterComponent,
    ResponderContatoComponent,
    
   
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true
    },
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
