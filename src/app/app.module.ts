import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

import { AngularFireModule, ɵBlockUntilFirstOperator } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from "@angular/fire/storage";

import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { from } from 'rxjs';
import { SubirImagenComponent } from './componentes/subir-imagen/subir-imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductosComponent,
    ProductosFormComponent,
    SubirImagenComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    AngularFireModule,
    AppRoutingModule
  ],
  providers: [
    { provide: BUCKET, useValue:'gs://prueba-bf4c8.appspot.com' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
