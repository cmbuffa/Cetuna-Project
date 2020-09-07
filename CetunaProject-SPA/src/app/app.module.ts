import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ValueComponent } from './Value/Value.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './__services/auth.service';
import { ErrorInterceptorProvider } from './__services/error.interceptor';
import { AlertifyService } from './__services/alertify.service';
import { RegistroAlumnoComponent } from './registro-alumno/registro-alumno.component';
import { RegistroDocumComponent } from './registro-docum/registro-docum.component';
import { InscripcionExamenIngresoComponent } from './inscripcion-examen-ingreso/inscripcion-examen-ingreso.component';
import { RegistroExamenIngresoComponent } from './registro-examen-ingreso/registro-examen-ingreso.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../app/routes';

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      ValueComponent,
      LoginComponent,
      RegistroAlumnoComponent,
      RegistroDocumComponent,
      InscripcionExamenIngresoComponent,
      RegistroExamenIngresoComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ AuthService, ErrorInterceptorProvider, AlertifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
