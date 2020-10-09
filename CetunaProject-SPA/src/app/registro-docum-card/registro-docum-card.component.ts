import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RegistroDocumDisplayComponent } from '../registro-docum-display/registro-docum-display.component';
import { Documento } from '../__models/Documento';
import { environment } from '../../environments/environment';
import { DocumentoService } from '../__services/documento.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../__services/alertify.service';

@Component({
  selector: 'app-registro-docum-card',
  templateUrl: './registro-docum-card.component.html',
  styleUrls: ['./registro-docum-card.component.scss']
})
export class RegistroDocumCardComponent implements OnInit {
  @Input() documento: Documento;
  @Output() refreshData = new EventEmitter<number>();
  bsModalRef: BsModalRef;
  fileUrl = environment.apiUrl + 'file/';
  constructor(private modalService: BsModalService, private documService: DocumentoService, private route: ActivatedRoute,
              private alertifyService: AlertifyService) { }

  ngOnInit() {
    if (!this.documento.url) {
      this.documento.url = 'unknown-doc.jpg';
    }
  }

  showDocum(document: Documento) {
    const initialState =  {
      docum: document,
      fileUrl: this.fileUrl
    };
    this.bsModalRef = this.modalService.show(RegistroDocumDisplayComponent, {initialState});
    this.bsModalRef.content.title = 'Documento del alumno';
  }

  deleteDocum(documento: Documento) {
    const idAlu = +this.route.snapshot.paramMap.get('id');
    this.documService.deleteDocumento(idAlu, documento.id).subscribe(() => {
      this.alertifyService.success('Documento Eliminado');
      this.refreshData.emit(idAlu);
    });
  }
}
