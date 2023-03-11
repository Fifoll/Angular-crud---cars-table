import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.sass']
})
export class CarFormComponent implements OnInit {

  @Input() car?: Car;

  @Output() carEmmiter = new EventEmitter<Car>();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      brand: this.car?.brand || '',
      model: this.car?.model || '',
      year: this.car?.year || ''
    });
  }

  onSave() {
    this.carEmmiter.emit(this.form.value);
  }

}
