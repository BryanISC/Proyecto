import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecuperarPasswordRoutingModule } from './recuperar-password-routing.module';
import { RecuperarPasswordComponent } from './recuperar-password.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecuperarPasswordComponent],
  imports: [
    CommonModule,
    RecuperarPasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecuperarPasswordModule { }
