import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enviar-email-de-confirmacion',
  templateUrl: './enviar-email-de-confirmacion.component.html',
  styleUrls: ['./enviar-email-de-confirmacion.component.css'],
  providers: [AutorizacionService],
})
export class EnviarEmailDeConfirmacionComponent implements OnInit {
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AutorizacionService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSendEmail(): void {
    this.authSvc.enviarVerificacionEmail();
    this.toastr.success('Correo enviado exitosamente', 'Alerta');
  }

}
