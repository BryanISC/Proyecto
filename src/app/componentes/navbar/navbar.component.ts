import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AutorizacionService],
})
export class NavbarComponent{

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(public authSvc: AutorizacionService, private router: Router) {}

  async onLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }
}

