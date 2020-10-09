import { Component, OnInit } from '@angular/core';
import { AuthService } from '../__services/auth.service';
import { AlertifyService } from '../__services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Sesion iniciada');
      this.model = {};
    }, error => {
      if (error instanceof ProgressEvent) {
        this.alertify.error('No se pudo conectar con el servidor');
      }
      else {
        this.alertify.error(error);
      }
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
