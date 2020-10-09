import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Documento } from '../__models/Documento';

@Component({
  selector: 'app-registro-docum-display',
  templateUrl: './registro-docum-display.component.html',
  styleUrls: ['./registro-docum-display.component.scss']
})
export class RegistroDocumDisplayComponent implements OnInit {
  title: string;
  docum: Documento;
  fileUrl: string;
  constructor(public bsModalRef: BsModalRef ) { }

  ngOnInit() {
  }

}
