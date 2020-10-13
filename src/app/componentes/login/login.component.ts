import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AutorizacionService],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AutorizacionService, private router: Router) {}

  async onLogin() {
    console.log(this.loginForm);
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(this.router);
  }
}