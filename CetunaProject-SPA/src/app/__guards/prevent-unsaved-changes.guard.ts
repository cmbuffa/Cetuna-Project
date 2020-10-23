import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {RegistroAlumnoDetalleEditComponent} from '../registro/registro-alumno-detalle-edit/registro-alumno-detalle-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<RegistroAlumnoDetalleEditComponent> {

    canDeactivate(component: RegistroAlumnoDetalleEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Esta seguro de querer abandonar esta pagina? Se perderan los cambios no guardados!');
        }
        return true;
    }
}
