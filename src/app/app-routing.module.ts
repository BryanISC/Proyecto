import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from "./componentes/productos/productos.component";
import { HomeComponent } from "./componentes/home/home.component";
import { SubirImagenComponent } from "./componentes/subir-imagen/subir-imagen.component";
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EnviarEmailDeConfirmacionComponent } from './componentes/enviar-email-de-confirmacion/enviar-email-de-confirmacion.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
