import {Routes} from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {RegistroAlumnoComponent} from '../app/registro-alumno/registro-alumno.component';
import {RegistroDocumComponent} from '../app/registro-docum/registro-docum.component';
import {RegistroExamenIngresoComponent} from '../app/registro-examen-ingreso/registro-examen-ingreso.component';
import {InscripcionExamenIngresoComponent} from '../app/inscripcion-examen-ingreso/inscripcion-examen-ingreso.component';
import {AuthGuard} from '../app/__guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistroAlumnoDetalleComponent } from './registro-alumno-detalle/registro-alumno-detalle.component';
import { RegistroAlumnoDetalleResolver } from './__resolver/registro-alumno-detalle.resolver';
import { RegistroAlumnoResolver } from './__resolver/registro-alumno.resolver';
import {RegistroAlumnoDetalleEditComponent} from '../app/registro-alumno-detalle-edit/registro-alumno-detalle-edit.component';
import { PreventUnsavedChanges } from './__guards/prevent-unsaved-changes.guard';
import { RegistroDocumAddComponent } from './registro-docum-add/registro-docum-add.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent},
            { path: 'registro-alu', component: RegistroAlumnoComponent, resolve: {alumnos: RegistroAlumnoResolver}},
            { path: 'registro-alu/nuevo', component: RegistroAlumnoDetalleEditComponent,
             canDeactivate: [PreventUnsavedChanges]},
            { path: 'registro-alu/editar/:id', component: RegistroAlumnoDetalleEditComponent,
            resolve: {alumno: RegistroAlumnoDetalleResolver}, canDeactivate: [PreventUnsavedChanges]},
            { path: 'registro-alu/editar/:id/agregardoc', component: RegistroDocumAddComponent,
             canDeactivate: [PreventUnsavedChanges]},
            { path: 'registro-alu/:id', component: RegistroAlumnoDetalleComponent, resolve: {alumno: RegistroAlumnoDetalleResolver}},
            { path: 'registro-doc', component: RegistroDocumComponent},
            { path: 'registro-ing', component: RegistroExamenIngresoComponent},
            { path: 'inscrip-ing', component: InscripcionExamenIngresoComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
