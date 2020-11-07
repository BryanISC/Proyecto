import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from "./componentes/productos/productos.component";
import { HomeComponent } from "./componentes/home/home.component";
import { SubirImagenComponent } from "./componentes/subir-imagen/subir-imagen.component";
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EnviarEmailDeConfirmacionComponent } from './componentes/enviar-email-de-confirmacion/enviar-email-de-confirmacion.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ModalComponent } from './componentes/lista-productos/modal/modal.component';
import { ModalEditarComponent } from './componentes/productos/modal-editar/modal-editar.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  {path: 'subir-imagen', component: SubirImagenComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos-form', component: ProductosFormComponent},
  { path: 'login', loadChildren: () => import('./componentes/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./componentes/registro/registro.module').then(m => m.RegistroModule) },
  {path: 'navbar', component: NavbarComponent},
  {path: 'verificacion-email', component: EnviarEmailDeConfirmacionComponent},
  {path: 'lista-productos', component: ListaProductosComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'modal-editar', component: ModalEditarComponent},
  {path: 'carrusel', component: CarruselComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
