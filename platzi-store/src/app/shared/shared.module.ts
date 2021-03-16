import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighligthDirective } from './directives/highligth/highligth.directive';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPipe } from './pipes/cart/cart.pipe';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighligthDirective,
    HeaderComponent,
    FooterComponent,
    CartPipe
  ],
  exports: [
    ExponentialPipe,
    HighligthDirective,
    HeaderComponent,
    FooterComponent,
    CartPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
