import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  productos = [];
  editandoProductos: Productos;
  editando: boolean = false;

  constructor(public productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getPedidos().subscribe(productos => {
      this.productos = productos;
    });
  }

  actualizarPedidos() {
    if(confirm('Estas seguro?')){
    this.productosService.actualizarPedidos(this.editandoProductos);
    this.editandoProductos = {} as Productos;
    this.editando = false;
    }
  }

  editarProductos(event, productos) {
    this.editandoProductos = productos;
    this.editando = !this.editando;
  }

  borrarPedidos(event, productos) {
    if(confirm('Estas seguro?')){
      this.productosService.borrarPedidos(productos);
    }
  }

}
