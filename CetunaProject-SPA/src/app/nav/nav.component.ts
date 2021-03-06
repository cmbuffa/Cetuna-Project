import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../__services/alertify.service';
import { AuthService } from '../__services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private alertify: AlertifyService, public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Sesion terminada');
    this.router.navigate(['/login']);
  }
}
