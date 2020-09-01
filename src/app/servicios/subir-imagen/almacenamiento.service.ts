import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { FileItem } from '../../models/file-item';

@Injectable()
export class AlmacenamientoService {
  private MEDIA_STORAGE_PATH = 'imagenes';
  constructor(private readonly storage: AngularFireStorage) { }

  subirImagen(image: FileItem[]) {
    for(const item of image) {
      item.subiendo = true;

      const filePath = this.generarNombreDeArchivo(item.name);
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, item.file);

      item.porcentajeSubida = task.percentageChanges();
      task.snapshotChanges()
      .pipe(
        finalize( ()=> {
          item.descargarURL = fileRef.getDownloadURL();
          item.subiendo = false;
        })
      )
      .subscribe();
    }
  }

  private generarNombreDeArchivo(name:string):string{
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }
}
