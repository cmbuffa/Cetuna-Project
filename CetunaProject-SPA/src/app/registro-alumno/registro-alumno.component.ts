import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../__models/Alumno';
import { AlertifyService } from '../__services/alertify.service';
import { AlumnoService } from '../__services/alumno.service';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {
  alumnos: Alumno[];

  constructor(private alumnoService: AlumnoService, private alertifyService: AlertifyService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.router.data.subscribe(retVal => {
      this.alumnos = retVal['alumnos'];
    }, error => {
      this.alertifyService.error(error);
    });
  }
}
