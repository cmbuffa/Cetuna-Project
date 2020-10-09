import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Alumno} from '../__models/Alumno';
import {AlumnoService} from '../__services/alumno.service';
import {AlertifyService} from '../__services/alertify.service';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/Operators';

@Injectable()
export class RegistroAlumnoResolver implements Resolve<Alumno[]> {
    constructor(private alumnoService: AlumnoService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Alumno[]> {
        return this.alumnoService.getAlumnos().pipe(
            catchError(error => {
                this.alertify.error('Error al obtener los datos');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
