import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = [];
  editandoProductos: Productos;
  editando: boolean = false;

  constructor(public productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  borrarProductos(event, productos) {
    if(confirm('Estas seguro de querer borrarlo?')){
      this.productosService.borrarProductos(productos);
    }
  }

  editarProductos(event, productos) {
    this.editandoProductos = productos;
    this.editando = !this.editando;
  }

  actualizarProductos() {
    if(confirm('Estas seguro de querer actualizarlo?')){
    this.productosService.actualizarProductos(this.editandoProductos);
    this.editandoProductos = {} as Productos;
    this.editando = false;
    }
  }

}
