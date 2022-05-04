import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ageValidate, nameValidation } from '../validations/formValidators'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalState: boolean = false;
  @Output() modalStateChange = new EventEmitter<boolean>();

  modalFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, nameValidation]),
    surname: new FormControl('', [Validators.required]),
    age: new FormControl(0, [Validators.required, ageValidate]),
    city: new FormControl('', [Validators.required])
  });
  cities: string[] = [
    'Riga', 'Daugavpils', 'Jūrmala', 'Ventspils'
  ];
  openedOptions!: boolean;

  @Output() tableRowEmmiter = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
    this.openedOptions = false;
  }

  closeModalByBackDrop (event: Event): void {
    const target = event.target as Element;
    
    if (target!.className === 'modal-backdrop') {
      this.closeModal();
      this.clearModalInputs();
    }
  }

  addEntityToTable (): void {
    this.tableRowEmmiter.emit({
      name: this.modalFormGroup.value.name,
      surname: this.modalFormGroup.value.surname,
      age: this.modalFormGroup.value.age,
      city: this.modalFormGroup.value.city
    });
    this.closeModal();
    this.clearModalInputs();
  }

  openSelectCityDropdown () {
    this.openedOptions = !this.openedOptions;
  }
  selectCityFromDropdown (selectedCity: string): void {
    this.modalFormGroup.patchValue({
      city: selectedCity
    });
  }

  closeModal (): void {
    this.modalState = false;
    this.modalStateChange.emit(this.modalState);
    this.clearModalInputs();
  }

  clearModalInputs (): void {
    this.modalFormGroup.reset();
  }

}
