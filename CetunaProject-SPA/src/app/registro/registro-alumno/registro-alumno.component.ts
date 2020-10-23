import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../../__models/Alumno';
import { PaginatedResult, Pagination} from '../../__models/Pagination';
import { Filters } from '../../__models/Filters';
import { AlertifyService } from '../../__services/alertify.service';
import { AlumnoService } from '../../__services/alumno.service';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {
  alumnos: Alumno[];
  pagination: Pagination;
  filters: Filters = {id: null, description: null };
  buscar: string;

  constructor(private alertifyService: AlertifyService, private router: ActivatedRoute, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.router.data.subscribe(retVal => {
      this.alumnos = retVal['alumnos'].result;
      this.pagination = retVal['alumnos'].pagination;
    }, error => {
      this.alertifyService.error(error);
    });
  }

  busqueda() {
    if (this.buscar === '') {
      this.filters.id = null;
      this.filters.description = null;
    }
    else {
      if (isNaN(+this.buscar)) {
        this.filters.description = this.buscar;
      }
      else {
        this.filters.id = +this.buscar;
      }
    }
    this.refreshData();
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.refreshData();
  }

  refreshData() {
    this.alumnoService.getAlumnos(this.pagination.currentPage, this.pagination.itemsPerPage, this.filters.id, this.filters.description)
    .subscribe((res: PaginatedResult<Alumno[]>) => {
      this.alumnos = res.result;
      this.pagination = res.pagination;
    });
  }
}
