import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../../__models/Alumno';
import { AlertifyService } from '../../__services/alertify.service';
import { AlumnoService } from '../../__services/alumno.service';

@Component({
  selector: 'app-registro-alumno-detalle',
  templateUrl: './registro-alumno-detalle.component.html',
  styleUrls: ['./registro-alumno-detalle.component.css']
})
export class RegistroAlumnoDetalleComponent implements OnInit {
  alumno: Alumno;

  constructor(private alumnoService: AlumnoService, private alertify: AlertifyService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
   this.loadUser();
  }

  loadUser() {
    this.route.data.subscribe(data => {
      this.alumno = data['alumno'];
      if (!this.alumno.fotoUrl) {
        this.alumno.fotoUrl = 'assets/img/anon.png';
      }
    }, error => {
      this.alertify.error(error);
    });
  }

  volver() {
    this.location.back();
  }
}
