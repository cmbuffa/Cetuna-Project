/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegistroAlumnoDetalleEditComponent } from './registro-alumno-detalle-edit.component';

describe('RegistroAlumnoDetalleEditComponent', () => {
  let component: RegistroAlumnoDetalleEditComponent;
  let fixture: ComponentFixture<RegistroAlumnoDetalleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAlumnoDetalleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAlumnoDetalleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
