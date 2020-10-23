import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno, EmptyAlumno } from '../../__models/Alumno';
import { AlertifyService } from '../../__services/alertify.service';
import { AlumnoService } from '../../__services/alumno.service';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegistroDocumAddComponent } from '../registro-docum-add/registro-docum-add.component';

@Component({
  selector: 'app-registro-alumno-detalle-edit',
  templateUrl: './registro-alumno-detalle-edit.component.html',
  styleUrls: ['./registro-alumno-detalle-edit.component.scss']
})
export class RegistroAlumnoDetalleEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  alumno: Alumno;
  bsModalRef: BsModalRef;
  refreshForm: boolean;
  constructor(private alumnoService: AlumnoService, private alertify: AlertifyService, private route: ActivatedRoute,
              private location: Location, private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    if (this.router.url === '/registro-alu/nuevo') {
      this.alumno = EmptyAlumno();
    }
    else {
      this.route.data.subscribe(data => {
        this.alumno = data['alumno'];
      }, error => {
        this.alertify.error(error);
      });
    }
    if (!this.alumno.fotoUrl) {
      this.alumno.fotoUrl = 'assets/img/anon.png';
    }
  }

  volver() {
    this.location.back();
  }

  updateAlumno() {
    if (this.router.url === '/registro-alu/nuevo') {
      this.alumnoService.createAlumno(this.alumno).subscribe(next => {
        this.alertify.success('Registro Agregado');
        this.editForm.reset(this.alumno);
      }, error => {
        this.alertify.error(error);
      });
    }
    else {
      const id = this.route.snapshot.paramMap.get('id');
      this.alumnoService.updateAlumno(+id, this.alumno).subscribe(next => {
        this.alertify.success('Registro Actualizado');
        this.editForm.reset(this.alumno);
      }, error => {
        this.alertify.error(error);
      });
    }
  }

  showDocum(id: number) {
    const initialState =  {
      alumnoId: id
    };
    this.bsModalRef = this.modalService.show(RegistroDocumAddComponent, {initialState});
    this.bsModalRef.content.title = 'prueba';
    this.bsModalRef.content.event.subscribe((value: boolean) => {
      if (value)
      {
        setTimeout(() => this.getDocumentos(id), 500);
      }
    });
  }

  getDocumentos(id: number) {
    this.alumnoService.getAlumno(id).subscribe(alu => {
      this.alumno.documentos = alu.documentos;
    });
  }
}
