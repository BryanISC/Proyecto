import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Productos } from '../models/productos';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productosCollection: AngularFirestoreCollection<Productos>;
  productos: Observable<Productos[]>;
  productosDoc: AngularFirestoreDocument<Productos>;
  

  constructor(public db: AngularFirestore) {
    //this.productos = this.db.collection('productos').valueChanges();
    this.productosCollection = this.db.collection('productos');
    this.productos = this.productosCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Productos;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }
   
   getProductos() {
     return this.productos;
   }

   agregarProductos(productos: Productos){
     this.productosCollection.add(productos);
   }

   borrarProductos(productos: Productos) {
    this.productosDoc = this.db.doc(`productos/${productos.id}`);
    this.productosDoc.delete();
   }

   actualizarProductos(productos: Productos) {
    this.productosDoc = this.db.doc(`productos/${productos.id}`);
    this.productosDoc.update(productos);
   }

}
