import { Component, Output, EventEmitter } from '@angular/core';

import { AlmacenamientoService } from '../../servicios/subir-imagen/almacenamiento.service';
import { FileItem } from 'src/app/models/file-item';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css'],
  providers: [AlmacenamientoService],
})

export class SubirImagenComponent {

  @Output() public newItemEvent = new EventEmitter<string>();

  files: FileItem[] = [];
  isOverDrop = false;
  urlImagen:string;

  constructor(private readonly storageSvc: AlmacenamientoService) {
    this.urlImagen = "";
  }
  
  onUpload(): void {
    this.storageSvc.subirImagen(this.files);
  }

  asignarValor(val:string){
    this.urlImagen = val;
    console.log(this.urlImagen)
    this.sendUrl()
  }

  sendUrl() {
    this.newItemEvent.emit(this.urlImagen);
  }
}