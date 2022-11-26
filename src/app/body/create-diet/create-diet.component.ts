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

  isMale(gender: string): boolean{
    return gender == 'Male';
  }

  isFemale(gender: string): boolean{
    return gender == 'Female';
  }
  
  recommendedKcalForMale(weight:number, height:number, age:number, activity: string): number{
    let aliveKcal = 66 + (13.7 * weight) + (5 * height) - (6.8 - age);
    let basicKcal = aliveKcal * this.activityMultiplier(activity);
    return basicKcal;
  }

  recommendedKcalForFemale(weight:number, height:number, age:number, activity: string): number{
    let aliveKcal = 65.5 + (9.6 * weight) + (1.85 * height) - (4.7 - age)
    let basicKcal = aliveKcal * this.activityMultiplier(activity);
    return basicKcal;
  }

  activityMultiplier(personalTypeOfActivity : string): number{
    switch(personalTypeOfActivity){
      case typeOfActivity.NOTRAINING: {
        return 1.3;
      }
      case typeOfActivity.MEDIUMTRAINING: {
        return 1.6;
      }
      case typeOfActivity.HARDTRAINING: {
        return 1.9;
      }
    }
    return 0;
  }

  calkulatorKCAL(): number | undefined{

    if(this.isMale(this.formValues.Gender)){

      switch(this.formValues.KcalCategory){
        case typeOfDiet.KEEPWEIGHT: 
          var finalKcal = this.recommendedKcalForMale(this.formValues.Weight, this.formValues.Height, this.formValues.Age, this.formValues.TrainingExperience);
          return finalKcal;
        case typeOfDiet.GAINWEIGHT: 
          var basicKcal = this.recommendedKcalForMale(this.formValues.Weight, this.formValues.Height, this.formValues.Age, this.formValues.TrainingExperience);
          var finalKcal = basicKcal + (0.3 * basicKcal);
          return finalKcal;
        case typeOfDiet.LOSEWEIGHT: 
          var basicKcal = this.recommendedKcalForMale(this.formValues.Weight, this.formValues.Height, this.formValues.Age, this.formValues.TrainingExperience);
          var finalKcal = basicKcal - (0.1 * basicKcal);
          return finalKcal;
      }
    }

    if(this.isFemale(this.formValues.Gender)){

      switch(this.formValues.KcalCategory){
        case typeOfDiet.KEEPWEIGHT: 
          var finalKcal = this.recommendedKcalForFemale(this.formValues.Weight, this.formValues.Height, this.formValues.Age, this.formValues.TrainingExperience);
          return finalKcal;
        case typeOfDiet.GAINWEIGHT: 
          var basicKcal = this.recommendedKcalForFemale(this.formValues.Weight, this.formValues.Height, this.formValues.Age, this.formValues.TrainingExperience);
          var finalKcal = basicKcal + (0.3 * basicKcal);
          return finalKcal;
        case typeOfDiet.LOSEWEIGHT: 
          var basicKcal = this.recommendedKcalForFemale(this.formValues.Weight, this.formValues.Height, this.formValues.Age, this.formValues.TrainingExperience);
          var finalKcal = basicKcal - (0.1 * basicKcal);
          return finalKcal;
      }
    }
  }
}

