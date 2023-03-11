import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { CarFormComponent } from './car-form/car-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarsComponent,
    CarFormComponent
  ],
  exports: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
