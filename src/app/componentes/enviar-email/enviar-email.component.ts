import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private authSvc: AutorizacionService, public productosService: ProductosService, private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.productosService.getEmail().subscribe(productos => {
      this.productos = productos;
    });
  }

  async onReset() {
    try{
      if(confirm('Estas seguro de la direccion de correo?')){
        const email = this.userEmail.value;
      await this.authSvc.resetPassword(email);
      this.toastr.success('Correo enviado exitosamente', 'Alerta');
      }
      
      
      // this.router.navigate(['/enviar-email'])
    }
    catch(error){console.log(error)}
  }

}
