import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.css'],
  providers: [AutorizacionService],
})
export class EnviarEmailComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;
  productos = [];
  producto = {} as Productos ;

  userEmail = new FormControl('');

  constructor(private authSvc: AutorizacionService, public productosService: ProductosService, private router:Router) { }

  ngOnInit() {
    this.productosService.getEmail().subscribe(productos => {
      this.productos = productos;
    });
  }

  // onSendEmail(): void {
  //   this.authSvc.enviarVerificacionEmail();
    
  // }

  async onReset() {
    try{
      const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('Estas seguro de la direccion de correo?');
      alert('Correo enviado correctamente');
      // this.router.navigate(['/enviar-email'])
    }
    catch(error){console.log(error)}
  }

}
