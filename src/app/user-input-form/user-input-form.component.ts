import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent implements OnInit {
  formModel: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {

    this.formModel = new FormGroup({
      weight: new FormControl('', [Validators.required, Validators.min(20), Validators.max(200)]),
      height: new FormControl('', [Validators.required, Validators.min(140), Validators.max(220)]),
      age: new FormControl('', [Validators.required, Validators.min(10), Validators.max(80)])
    })

   }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl('/diet-planner');
  }

}