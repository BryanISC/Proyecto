import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from "./componentes/productos/productos.component";
import { HomeComponent } from "./componentes/home/home.component";
import { SubirImagenComponent } from "./componentes/subir-imagen/subir-imagen.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'subir-imagen', component: SubirImagenComponent},
  // {path: 'subir-imagen', loadChildren: () => import('./app.module').then(m => m.SubirImagenModule)},
  {path: 'productos', component: ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
