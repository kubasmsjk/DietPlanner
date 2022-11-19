import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-input-form',
  templateUrl: './user-input-form.component.html',
  styleUrls: ['./user-input-form.component.css']
})
export class UserInputFormComponent implements OnInit {

  myForm = this.fb.group({
    weight: new FormControl('', [Validators.min(20), Validators.max(200)]),
    height: new FormControl('', [Validators.min(140), Validators.max(220)]),
    age: new FormControl('', [Validators.min(10), Validators.max(80)])
  })

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigateByUrl('/diet-planner');
  }

}