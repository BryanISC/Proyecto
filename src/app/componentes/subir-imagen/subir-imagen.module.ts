import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubirImagenRoutingModule } from './subir-imagen-routing.module';
import { SubirImagenComponent } from './subir-imagen.component';
import { NgDominicodeFilesDirective } from './directivas/ng-dominicode-files.directive';


@NgModule({
  declarations: [
    SubirImagenComponent, NgDominicodeFilesDirective],
  imports: [
    CommonModule,
    SubirImagenRoutingModule
  ]
})
export class SubirImagenModule { }
