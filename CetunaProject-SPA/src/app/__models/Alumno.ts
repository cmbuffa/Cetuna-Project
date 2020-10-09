import { Documento } from './Documento';

export interface Alumno {
    id: number;
    cedula: number;
    nombreApellido: string;
    edad: number;
    ciudadActual: string;
    dptoActual: string;
    celular: string;
    lugarTrabajo: string;
    nacionalidad: string;
    fechaModificacion: Date;
    nombres?: string;
    apellidos?: string;
    fecNacimiento?: Date;
    ciudadNacimiento?: string;
    dptoNacimiento?: string;
    direccionParticular?: string;
    lineaBaja?: string;
    direccionLaboral?: string;
    telLaboral?: string;
    fotoUrl?: string;
    documentos?: Documento[];
}

export const EmptyAlumno = (): Alumno => ({
    id: null,
    cedula: null,
    nombreApellido: '',
    edad: null,
    ciudadActual: '',
    dptoActual: '',
    celular: '',
    lugarTrabajo: '',
    nacionalidad: '',
    fechaModificacion: null,
    nombres: '',
    apellidos: '',
    fecNacimiento: null,
    ciudadNacimiento: '',
    dptoNacimiento: '',
    direccionParticular: '',
    lineaBaja: '',
    direccionLaboral: '',
    telLaboral: '',
    fotoUrl: ''
});
