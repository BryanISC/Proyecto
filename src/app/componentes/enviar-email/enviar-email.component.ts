import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorizacionService } from '../../servicios/login/autorizacion.service';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';


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

  constructor(private authSvc: AutorizacionService, public productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getEmail().subscribe(productos => {
      this.productos = productos;
    });
  }

  onSendEmail(): void {
    this.authSvc.enviarVerificacionEmail();
    
  }

}
