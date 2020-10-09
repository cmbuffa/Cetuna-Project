import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  deleteDocumento(idAlumno: number, idDocumento: number) {
    return this.http.delete(this.baseUrl + 'alumnos/' + idAlumno + '/documentos/' + idDocumento);
  }
}
