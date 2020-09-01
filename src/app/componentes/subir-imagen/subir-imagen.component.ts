import { Component } from '@angular/core';

import { AlmacenamientoService } from '../../servicios/subir-imagen/almacenamiento.service';
import { FileItem } from 'src/app/models/file-item';


@Component({
  selector: 'app-subir-imagen',
  templateUrl: './subir-imagen.component.html',
  styleUrls: ['./subir-imagen.component.css'],
  providers: [AlmacenamientoService],
})
export class SubirImagenComponent {
  files: FileItem[] = [];
  isOverDrop = false;

  constructor(private readonly storageSvc: AlmacenamientoService) {}
  
  onUpload(): void {
    this.storageSvc.subirImagen(this.files);
  }

}
