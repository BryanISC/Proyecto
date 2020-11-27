import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';
import { AutorizacionService } from 'src/app/servicios/login/autorizacion.service'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
  providers: [AutorizacionService],
})
export class ListaProductosComponent implements OnInit {

  productos = [];
  editandoProductos: Productos;
  editando: boolean = false;

  producto = {} as Productos;

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(public productosService: ProductosService, private authSvc: AutorizacionService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  agregarPedidos(){
    if(confirm('Estas seguro de su selección?')){
      this.productosService.agregarPedidos(this.producto);
      console.log(this.producto);
      this.toastr.success('Producto agregado al carrito', 'Titulo');
    }
  }

  actualizarPedidos() {
    if(confirm('Estas seguro de querer actualizarlo?')){
    this.productosService.actualizarPedidos(this.editandoProductos);
    this.editandoProductos = {} as Productos;
    this.editando = false;
    }
  }

  actualizarProductos() {
    if(confirm('Estas seguro de querer actualizarlo?')){
    this.productosService.actualizarProductos(this.editandoProductos);
    this.editandoProductos = {} as Productos;
    this.editando = false;
    }
    
  }

  editarProductos(event, productos) {
    this.editandoProductos = productos;
    this.editando = !this.editando;
  }

}
