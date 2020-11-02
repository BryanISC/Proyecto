import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';
// import { PedidosService } from '../../servicios/productos.service'
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos = [];
  editandoProductos: Productos;
  editando: boolean = false;

  producto = {} as Productos;

  constructor(public productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(productos => {
      this.productos = productos;
    });
  }

  agregarPedidos(){
    if(confirm('Estas seguro de su selección?')){
      this.productosService.agregarPedidos(this.producto);
      console.log(this.producto);
    }
    
  }

  actualizarPedidos() {
    if(confirm('Estas seguro de querer actualizarlo?')){
    this.productosService.actualizarProductos(this.editandoProductos);
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
