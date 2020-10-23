import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Alumno} from '../__models/Alumno';
import {AlumnoService} from '../__services/alumno.service';
import {AlertifyService} from '../__services/alertify.service';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/Operators';

@Injectable()
export class RegistroAlumnoResolver implements Resolve<Alumno[]> {
    pageNumber = 1;
    pageSize = 1;

    constructor(private alumnoService: AlumnoService, private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Alumno[]> {
        return this.alumnoService.getAlumnos(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Error al obtener los datos');
                this.router.navigate(['/']);
                return of(null);
            })
        );
    }
}
