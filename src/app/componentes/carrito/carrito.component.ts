import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';
import { AutorizacionService } from 'src/app/servicios/login/autorizacion.service'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  providers: [AutorizacionService],
})
export class CarritoComponent implements OnInit {

  productos = [];
  editandoProductos: Productos;
  editando: boolean = false;
  producto = {} as Productos;

  public user$: Observable<any> = this.authSvc.afAuth.user;
  
  constructor(public productosService: ProductosService, private authSvc: AutorizacionService, private toastr: ToastrService) { }

  ngOnInit() {
    this.productosService.getPedidos().subscribe(productos => {
      this.productos = productos;
    });
  }

  borrarPedidos(event, productos) {
    if(confirm('Estas seguro?')){
      this.productosService.borrarPedidos(productos);
      this.toastr.error('Pedido borrado exitosamente', 'Titulo');
    }
  }

}
