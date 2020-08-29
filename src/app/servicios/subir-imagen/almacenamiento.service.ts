import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileItem } from '../../models/file-item';

import { finalize } from 'rxjs/operators';

@Injectable()
export class AlmacenamientoService {
  private MEDIA_STORAGE_PATH = 'carpeta';
  constructor(private readonly storage: AngularFireStorage) { }

  subirImagen(image: FileItem[]) {
    for(const item of image) {
      item.subiendo;

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
    return `${this,this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }
}
