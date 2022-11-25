import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormValuesClass } from '../../classes/formValues';
import { nameValidator } from '../../validators/name-validator';
import { FormDataService } from '../services/form-data.service';


@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent implements OnInit {

  formModel: FormGroup;

  constructor(private router: Router, private formDataService : FormDataService) {
    this.formModel = new FormGroup({
      weight: new FormControl('', [Validators.required, Validators.min(20), Validators.max(200)]),
      height: new FormControl('', [Validators.required, Validators.min(140), Validators.max(220)]),
      age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(80)]),
      radio: new FormControl('', Validators.required),
      diet: new FormControl('', Validators.required),
      trainingExperience: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      firstName: new FormControl('',[Validators.required, nameValidator])
    });

   }

  ngOnInit(): void {
    
  }

  get firstName() { 
    return this.formModel.get('firstName')?.value;
  }
  get weight() { 
    return this.formModel.get('weight')?.value;
  }
  get height() { 
  return this.formModel.get('height')?.value;
  }
  get age() { 
    return this.formModel.get('age')?.value;
  }
  get typeOfWeight() { 
    return this.formModel.get('radio')?.value;
  }
  get diet() { 
    return this.formModel.get('diet')?.value;
  }
  get trainingExperience() { 
    return this.formModel.get('trainingExperience')?.value;
  }
  get gender() { 
    return this.formModel.get('gender')?.value;
  }

  onSubmit(){
    let formValues = new FormValuesClass(this.firstName,this.typeOfWeight,this.diet,this.weight,this.height,this.age,this.trainingExperience,this.gender)
    this.formDataService.addFormValuesToArray(formValues)
  }

}