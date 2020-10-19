import { Component, OnInit } from '@angular/core';
import { FileItem } from "../../models/file-item";

import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';
import { ConstantPool } from '@angular/compiler';


@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  imgURL:string

  producto = {} as Productos;

  constructor(public productosService: ProductosService) { 
    this.imgURL = ""
  }

  ngOnInit(): void {
  }

  agregarUrl(evento){
    this.imgURL = evento;
  }

  agregarProductos() {
    if(this.producto.name !== '' && this.producto.descripcion !== '' && this.producto.precio !== 0) {
      this.producto.imagenUrl = this.imgURL;  
      console.log(this.producto);
      this.productosService.agregarProductos(this.producto);
      
    }
    this.producto = {} as Productos;
    this.imgURL = "";
    alert('Producto guardado exitosamente')

  }
  
}
