import {Routes} from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {RegistroAlumnoComponent} from '../app/registro-alumno/registro-alumno.component';
import {RegistroDocumComponent} from '../app/registro-docum/registro-docum.component';
import {RegistroExamenIngresoComponent} from '../app/registro-examen-ingreso/registro-examen-ingreso.component';
import {InscripcionExamenIngresoComponent} from '../app/inscripcion-examen-ingreso/inscripcion-examen-ingreso.component';
import {AuthGuard} from '../app/__guards/auth.guard';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent},
            { path: 'registro-alu', component: RegistroAlumnoComponent},
            { path: 'registro-doc', component: RegistroDocumComponent},
            { path: 'registro-ing', component: RegistroExamenIngresoComponent},
            { path: 'inscrip-ing', component: InscripcionExamenIngresoComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
