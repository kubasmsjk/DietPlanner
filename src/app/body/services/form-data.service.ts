import { Injectable } from '@angular/core';
import { FormValuesClass } from 'src/app/classes/formValues';

@Injectable()
export class FormDataService {
  private formValuesClass: FormValuesClass[] = [];

  constructor() { }

  addFormValuesToArray(formValues: FormValuesClass){
    this.formValuesClass.push(formValues);
  }

  get FormValuesArray(){
    return this.formValuesClass;
  }
}