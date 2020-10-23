import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './__services/auth.service';
import { ErrorInterceptorProvider } from './__services/error.interceptor';
import { AlertifyService } from './__services/alertify.service';
import { RegistroAlumnoComponent } from './registro/registro-alumno/registro-alumno.component';
import { InscripcionExamenIngresoComponent } from './inscripcion/inscripcion-examen-ingreso/inscripcion-examen-ingreso.component';
import { RegistroExamenIngresoComponent } from './registro/registro-examen-ingreso/registro-examen-ingreso.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from '../app/routes';
import { RegistroAlumnoDetalleComponent } from './registro/registro-alumno-detalle/registro-alumno-detalle.component';
import { RegistroAlumnoResolver } from './__resolver/registro-alumno.resolver';
import { RegistroAlumnoDetalleResolver } from './__resolver/registro-alumno-detalle.resolver';
import { RegistroDocumCardComponent } from './registro/registro-docum-card/registro-docum-card.component';
import { RegistroDocumDisplayComponent } from './registro/registro-docum-display/registro-docum-display.component';
import { RegistroAlumnoDetalleEditComponent } from './registro/registro-alumno-detalle-edit/registro-alumno-detalle-edit.component';
import { PreventUnsavedChanges } from './__guards/prevent-unsaved-changes.guard';
import { RegistroDocumAddComponent } from './registro/registro-docum-add/registro-docum-add.component';
import { FileUploadModule } from 'ng2-file-upload';
import { DocumentoService } from './__services/documento.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      LoginComponent,
      RegistroAlumnoComponent,
      InscripcionExamenIngresoComponent,
      RegistroExamenIngresoComponent,
      HomeComponent,
      RegistroAlumnoDetalleComponent,
      RegistroDocumCardComponent,
      RegistroDocumDisplayComponent,
      RegistroAlumnoDetalleEditComponent,
      RegistroDocumAddComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    FileUploadModule
  ],
  providers: [AuthService,
              DocumentoService,
              ErrorInterceptorProvider,
              AlertifyService,
              RegistroAlumnoDetalleResolver,
              RegistroAlumnoResolver,
              PreventUnsavedChanges],
  bootstrap: [AppComponent]
})
export class AppModule { }
