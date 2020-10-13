import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [AutorizacionService],
})
export class RegistroComponent {
  registroForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AutorizacionService, private router: Router) {}

  async onRegister() {
    const { email, password } = this.registroForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}