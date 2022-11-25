import { Component, OnInit } from '@angular/core';
import { FormValuesClass } from 'src/app/classes/formValues';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css']
})
export class CreateDietComponent implements OnInit {

  formValues!: FormValuesClass;

  constructor(private formDataService : FormDataService) { }

  ngOnInit(): void {
    let formValues = this.formDataService.FormValuesArray;
  }

}
