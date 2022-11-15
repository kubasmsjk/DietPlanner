import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent implements OnInit {


  weightChoose = 'loseWeight'
  dietType = 'basicDiet'
  trainingExperience = 'mediumTraining'
  sex = 'male'
  weight = 0
  height = 0
  age = 1

  myForm = this.fb.group({
    weight: new FormControl('', [Validators.min(20), Validators.max(200)]),
    height: new FormControl('', [Validators.min(140), Validators.max(220)]),
    age: new FormControl('', [Validators.min(10), Validators.max(80)])
  })

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  userInput(formValue: NgForm) {
    this.router.navigateByUrl('/diet-planner');
    console.log(formValue.value)
    
  }


  //submit(){
  //  
  //  this.router.navigateByUrl('/diet-planner');
  //}

}
