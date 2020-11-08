import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from 'src/app/servicios/login/autorizacion.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css'],
  providers: [AutorizacionService]
})
export class RecuperarPasswordComponent implements OnInit {

  userEmail = new FormControl('');

  constructor(private authSvc: AutorizacionService, private router:Router) { }

  ngOnInit(): void {
  }

  async onReset() {
    try{
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Email sent, check your inbox!');
      this.router.navigate(['/login'])
    }
    catch(error){console.log(error)}
  }
}
