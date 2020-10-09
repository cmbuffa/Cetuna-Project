import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {Alumno} from '../__models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.baseUrl + 'alumnos');
  }

  getAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(this.baseUrl + 'alumnos/' + id);
  }

  updateAlumno(id: number, alumno: Alumno) {
    return this.http.put(this.baseUrl + 'alumnos/' + id, alumno);
  }

  createAlumno(alumno: Alumno) {
    return this.http.post(this.baseUrl + 'alumnos/', alumno);
  }

}
