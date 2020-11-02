import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from '../../../servicios/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.css']
})
export class ModalEditarComponent implements OnInit {

  productos = [];
  producto = {} as Productos;
  editandoProductos: Productos;
  editando: boolean = false;

  constructor(public modal: NgbModal, public productosService: ProductosService) { }

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