import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Car } from './car';
import { CarFormComponent } from './car-form/car-form.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.sass']
})
export class CarsComponent implements OnInit {


  filter = new FormControl('');
  cars: Car[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openAddModal(): void{
    const modalRef = this.modalService.open(CarFormComponent);
    modalRef.componentInstance.carEmmiter.subscribe( (car: Car) => {
      this.cars.push(car);
      modalRef.close();
    });
  }

  openEditModal(car: Car, index: number):void {
    const modalRef = this.modalService.open(CarFormComponent);
    modalRef.componentInstance.car = car;
    modalRef.componentInstance.carEmmiter.subscribe( (car: Car) => {
      this.cars[index] = car;
      modalRef.close();
    })
  }

  removeItem(index: number):void {
    if(confirm(`Jesteś pewny że chcesz usunąć ten samochód?`)) {
      this.cars.splice(index, 1);
    };
  }


}
