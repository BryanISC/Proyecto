import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';

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

  producto = {} as Productos;

  constructor(private authSvc: AutorizacionService, private router: Router, public productosService: ProductosService) {}

  async onRegister() {
    const { email, password } = this.registroForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.router.navigate(['/verificacion-email']);
        this.productosService.agregarEmail(this.producto);
      }
    } catch (error) {
      console.log(error);
    }
  }
}