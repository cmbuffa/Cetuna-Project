import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-registro-docum-add',
  templateUrl: './registro-docum-add.component.html',
  styleUrls: ['./registro-docum-add.component.css']
})
export class RegistroDocumAddComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  baseUrl = environment.apiUrl;
  alumnoId: number;
  descripcion = '';
  foto = false;

  constructor(private route: ActivatedRoute, public bsModalRef: BsModalRef,
              private element: ElementRef) { }

  ngOnInit() {
    this.initializeUploader();
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'alumnos/' + this.alumnoId + '/documentos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 20 * 1024 * 1024
    });

    this.uploader.onBuildItemForm = (item, form) => {
      form.append('Descripcion', this.descripcion);
      form.append('esFoto', this.foto);
    };

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

  }

  uploadDocum() {
    this.uploader.uploadAll();
    this.event.emit(true);
    this.bsModalRef.hide();
  }

  cancel() {
    this.event.emit(false);
    this.bsModalRef.hide();
  }

  onImageChange(event) {
    const reader = new FileReader();
    const image = this.element.nativeElement.querySelector('#imgPreview');

    reader.onload = (e: any) => {
        const src = e.target.result;
        image.src = src;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
}
