import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  producto = {} as Productos;

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
  }

  agregarProductos() {
    if(this.producto.name !== '' && this.producto.descripcion !== '' && this.producto.precio !== 0) {
      this.productosService.agregarProductos(this.producto); 
      this.producto = {} as Productos;
    }
    
  }

}
