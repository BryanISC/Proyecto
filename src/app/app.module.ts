import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

import { AngularFireModule} from '@angular/fire';
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

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavbarComponent } from './componentes/navbar/navbar.component'
import { RouterModule} from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { EnviarEmailComponent } from './componentes/enviar-email/enviar-email.component';
import { EnviarEmailDeConfirmacionComponent } from './componentes/enviar-email-de-confirmacion/enviar-email-de-confirmacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { StripePaymentComponent } from "./componentes/stripe-payment/stripe-payment.component";
import { StripeModule } from "stripe-angular";
import { PaymentRequestComponent } from "./componentes/payment-request/payment-request.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({  
  declarations: [
    AppComponent,
    ProductosComponent,
    ListaProductosComponent,
    ProductosFormComponent,
    SubirImagenComponent, 
    NgDominicodeFilesDirective, 
    PedidosComponent, 
    NavbarComponent,
    HomeComponent,
    EnviarEmailComponent,
    EnviarEmailDeConfirmacionComponent,
    CarruselComponent,
    CarritoComponent,
    FooterComponent,
    StripePaymentComponent,
    PaymentRequestComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    AngularFireModule,
    AppRoutingModule,
    SubirImagenRoutingModule,
    CommonModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    NgbModule,
    StripeModule.forRoot('pk_test_51HqUfNG00OUBPhyxc9MO3hJ80muN4UZK3Zzc83P1MnIvW86k8TPVKsAK8ZoOBW7lzx287jGjx0fU5pbaim5YNnz500gadENrFC'),
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 3000, progressBar: true, progressAnimation: 'increasing'}),
    NgxPayPalModule,
  ],
  providers: [
    { provide: BUCKET, useValue:'gs://prueba-bf4c8.appspot.com/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class SubirImagenModule {}
