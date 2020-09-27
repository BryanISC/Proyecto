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

import { CommonModule } from '@angular/common';

import { SubirImagenRoutingModule } from './componentes/subir-imagen/subir-imagen-routing.module';
import { SubirImagenComponent } from './componentes/subir-imagen/subir-imagen.component';
import { NgDominicodeFilesDirective } from './componentes/subir-imagen/directivas/ng-dominicode-files.directive';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { ClientesPedidosComponent } from './componentes/clientes-pedidos/clientes-pedidos.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductosComponent,
    ProductosFormComponent,
    SubirImagenComponent, 
    NgDominicodeFilesDirective, 
    PedidosComponent, 
    ClientesPedidosComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    AngularFireModule,
    AppRoutingModule,
    SubirImagenRoutingModule,
    CommonModule
  ],
  providers: [
    { provide: BUCKET, useValue:'gs://prueba-bf4c8.appspot.com/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class SubirImagenModule {}
