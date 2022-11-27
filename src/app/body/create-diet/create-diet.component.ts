import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValuesClass } from 'src/app/classes/formValues';
import { typeOfActivity } from 'src/app/enums/typeOfActivity';
import { typeOfDiet } from 'src/app/enums/typeOfDiet';
import { Meals } from 'src/app/interfaces/meals';
import { FormDataService } from '../services/form-data.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css']
})
export class CreateDietComponent implements OnInit {
  
  formValues!: FormValuesClass;
  basicDiet: Meals[]=[];
  vegeDiet: Meals[]=[];
  highProteinDiet: Meals[]=[]  
  constructor(private formDataService : FormDataService,private httpService: HttpService,private router: Router) { }

  ngOnInit(): void {
    
    this.httpService.getBasicDiet().subscribe(data=>
      this.basicDiet = data);
    this.httpService.getVegeDiet().subscribe(data=>
      this.vegeDiet = data);
    this.httpService.getHighProteinDiet().subscribe(data=>
      this.highProteinDiet = data);
    let formValues = this.formDataService.FormValuesArray;
  }
  
  finalBreakfastArray(type: string): Array<object>{

    let finalBreakfastArray = []
    var length = 7

    if(type == 'basicDiet'){  
      for(var i = 0 ; i<length ; i++){   
        finalBreakfastArray[i] = this.basicDiet[0].Breakfast[Math.floor(Math.random() * this.basicDiet[0].Breakfast.length)];        
      } 
      
    }
    else if(type == 'vegeDiet'){
      for(var i = 0 ; i<length ; i++){   
        finalBreakfastArray[i] = this.vegeDiet[0].Breakfast[Math.floor(Math.random() * this.vegeDiet[0].Breakfast.length)];
      }

    }
    else if(type == 'highProteinDiet'){
      for(var i = 0 ; i<length ; i++){   
        finalBreakfastArray[i] = this.highProteinDiet[0].Breakfast[Math.floor(Math.random() * this.highProteinDiet[0].Breakfast.length)];
      }
    }
    console.table(finalBreakfastArray)
    return finalBreakfastArray
  }

  finalDinnerArray(){

    let finalDinnerArray = []
    var length = 7

    if(this.formValues.Diet == 'basicDiet'){  
      for(var i = 0 ; i<length ; i++){   
        finalDinnerArray[i] = this.basicDiet[1].Dinner[Math.floor(Math.random() * this.basicDiet[1].Dinner.length)];        
      } 

    }
    else if(this.formValues.Diet == 'vegeDiet'){
      for(var i = 0 ; i<length ; i++){   
        finalDinnerArray[i] = this.vegeDiet[1].Dinner[Math.floor(Math.random() * this.vegeDiet[1].Dinner.length)];
      }

    }
    else if(this.formValues.Diet == 'highProteinDiet'){
      for(var i = 0 ; i<length ; i++){   
        finalDinnerArray[i] = this.highProteinDiet[1].Dinner[Math.floor(Math.random() * this.highProteinDiet[1].Dinner.length)];
      }
    }
  }

  finalSupperArray(){

    let finalSupperArray = []
    var length = 7

    if(this.formValues.Diet == 'basicDiet'){  
      for(var i = 0 ; i<length ; i++){   
        finalSupperArray[i] = this.basicDiet[2].Supper[Math.floor(Math.random() * this.basicDiet[2].Supper.length)];        
      } 

    }
    else if(this.formValues.Diet == 'vegeDiet'){
      for(var i = 0 ; i<length ; i++){   
        finalSupperArray[i] = this.vegeDiet[2].Supper[Math.floor(Math.random() * this.vegeDiet[2].Supper.length)];
      }

    }
    else if(this.formValues.Diet == 'highProteinDiet'){
      for(var i = 0 ; i<length ; i++){   
        finalSupperArray[i] = this.highProteinDiet[2].Supper[Math.floor(Math.random() * this.highProteinDiet[2].Supper.length)];
      }
    }
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

  calkulatorKCAL(): number{

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
    return 0;
  }
}

