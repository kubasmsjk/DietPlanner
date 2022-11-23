import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent implements OnInit {
  formModel: FormGroup;
  constructor(private router: Router) {

    this.formModel = new FormGroup({
      weight: new FormControl('', [Validators.required, Validators.min(20), Validators.max(200)]),
      height: new FormControl('', [Validators.required, Validators.min(140), Validators.max(220)]),
      age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(80)]),
      radio: new FormControl('', Validators.required),
      diet: new FormControl('', Validators.required),
      trainingExperience: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required)
    })

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

  submit(){
    
  }

}