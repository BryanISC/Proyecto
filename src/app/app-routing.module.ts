import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from "./componentes/productos/productos.component";
import { HomeComponent } from "./componentes/home/home.component";
import { SubirImagenComponent } from "./componentes/subir-imagen/subir-imagen.component";
import { ProductosFormComponent } from './componentes/productos-form/productos-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  {path: 'subir-imagen', component: SubirImagenComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos-form', component: ProductosFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
