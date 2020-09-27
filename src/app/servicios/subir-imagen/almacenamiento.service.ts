import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { FileItem } from '../../models/file-item';
import { ProductosFormComponent } from 'src/app/componentes/productos-form/productos-form.component';
import { stringify } from '@angular/compiler/src/util';


@Injectable()
export class AlmacenamientoService {

  prod: ProductosFormComponent;
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
          //item.id = fileRef.getToken();
          // this.prod.agregarUrl(stringify(item.descargarURL));
          // console.log(stringify(item.descargarURL));
          item.subiendo = false;

          // var uno = filePath.child();
          
          // console.log(uno);
            
        })
      )
      .subscribe();
    }
  }


  private generarNombreDeArchivo(name:string):string{
    return `${this.MEDIA_STORAGE_PATH}/${new Date().getTime()}_${name}`;
  }








}
