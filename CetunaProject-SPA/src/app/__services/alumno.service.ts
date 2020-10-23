import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {Alumno} from '../__models/Alumno';
import {PaginatedResult} from '../__models/Pagination';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAlumnos(page?, itemsPerPage?, id?, description?): Observable<PaginatedResult<Alumno[]>> {
    const paginatedResult: PaginatedResult<Alumno[]> = new PaginatedResult();

    let queryParams = new HttpParams();

    if (page != null && itemsPerPage != null) {
      queryParams = queryParams.append('pageNumber', page);
      queryParams = queryParams.append('pageSize', itemsPerPage);
    }

    if (id != null) {
      queryParams = queryParams.append('id', id);
    }

    if (description != null) {
      queryParams = queryParams.append('description', description);
    }

    return this.http.get<Alumno[]>(this.baseUrl + 'alumnos', { observe: 'response', params: queryParams}).pipe(
      map(response => {
        paginatedResult.result = response.body;
        if (response.headers.get('Pagination') != null) {
          paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return paginatedResult;
      })
    );
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
