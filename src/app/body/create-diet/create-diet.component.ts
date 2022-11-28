import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { typeOfActivity } from 'src/app/enums/typeOfActivity';
import { purposeOfDiet } from 'src/app/enums/purposeOfDiet';
import { Breakfast, Dinner, Meals, Supper } from 'src/app/interfaces/meals';
import { FormDataService } from '../services/form-data.service';
import { HttpService } from '../services/http.service';
import { typeOfDiet } from 'src/app/enums/typeOfDiet';
import { TransitiveDietService } from '../services/transitive-diet.service';

@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css']
})
export class CreateDietComponent implements OnInit, OnDestroy {
  @Input() isformValid : boolean | undefined;
  @Input() disabled : boolean | undefined;

  basicDiet: Meals[]=[];
  vegeDiet: Meals[]=[];
  highProteinDiet: Meals[]=[]  

  constructor(private formDataService : FormDataService,private httpService: HttpService,
    private transitiveDietService : TransitiveDietService) { }
  
    ngOnDestroy(): void {
      var formValues = this.formDataService.FormValuesArray;

      var kcal = this.calkulatorKcal(formValues[0]);
      this.transitiveDietService.setKcal(kcal);

      var finalBreakfastArray = this.finalBreakfastArray(formValues[0].Diet);
      var finalDinnerArray = this.finalDinnerArray(formValues[0].Diet);
      var finalSupperArray = this.finalSupperArray(formValues[0].Diet);
  
      this.transitiveDietService.addBreakfastToArray(finalBreakfastArray);
      this.transitiveDietService.addDinnerToArray(finalDinnerArray);
      this.transitiveDietService.addSupperToArray(finalSupperArray);

  }

  ngOnInit(): void {
    
    this.httpService.getBasicDiet().subscribe(data=>
    this.basicDiet = data);
    this.httpService.getVegeDiet().subscribe(data=>
    this.vegeDiet = data);
    this.httpService.getHighProteinDiet().subscribe(data=>
    this.highProteinDiet = data);
   
  }

  randomBreakfastMeals(arrayDiet : Array<Meals>,finalBreakfastArray :Array<Breakfast>): Array<Breakfast>{
    let length = 7;
    for(var i = 0 ; i<length ; i++){   
      finalBreakfastArray[i] = arrayDiet[0].Breakfast[Math.floor(Math.random() * arrayDiet[0].Breakfast.length)];        
    }
    return finalBreakfastArray;
  }

  finalBreakfastArray(type : string): Array<Breakfast>{
    let finalBreakfastArray : Array<Breakfast> = [];

    switch(type){
      case typeOfDiet.BASICDIET:{
        return this.randomBreakfastMeals(this.basicDiet,finalBreakfastArray);
      }
      case typeOfDiet.VEGEDIET:{
        return this.randomBreakfastMeals(this.vegeDiet,finalBreakfastArray);
      }
      case typeOfDiet.HIGHTHPROTEINDIET:{
        return this.randomBreakfastMeals(this.highProteinDiet,finalBreakfastArray);
      }
    }
    return finalBreakfastArray;
  }

  randomDinnerMeals(arrayDiet : Array<Meals>,finalDinnerArray :Array<Dinner>): Array<Dinner>{
    let length = 7;
    for(var i = 0 ; i<length ; i++){   
      finalDinnerArray[i] = arrayDiet[1].Dinner[Math.floor(Math.random() * arrayDiet[1].Dinner.length)];        
    }
    return finalDinnerArray;
  }

  finalDinnerArray(type : string): Array<Dinner>{
    let finalDinnerArray : Array<Dinner> = [];

    switch(type){
      case typeOfDiet.BASICDIET:{
        return this.randomDinnerMeals(this.basicDiet,finalDinnerArray);
      }
      case typeOfDiet.VEGEDIET:{
        return this.randomDinnerMeals(this.vegeDiet,finalDinnerArray);
      }
      case typeOfDiet.HIGHTHPROTEINDIET:{
        return this.randomDinnerMeals(this.highProteinDiet,finalDinnerArray);
      }
    }
    return finalDinnerArray;
  }

  randomSupperMeals(arrayDiet : Array<Meals>,finalSupperArray :Array<Supper>): Array<Supper>{
    let length = 7;
    for(var i = 0 ; i<length ; i++){   
      finalSupperArray[i] = arrayDiet[2].Supper[Math.floor(Math.random() * arrayDiet[2].Supper.length)];        
    }
    return finalSupperArray;
  }

  finalSupperArray(type : string): Array<Supper>{
    let finalSupperArray : Array<Supper> = [];

    switch(type){
      case typeOfDiet.BASICDIET:{
        return this.randomSupperMeals(this.basicDiet,finalSupperArray);
      }
      case typeOfDiet.VEGEDIET:{
        return this.randomSupperMeals(this.vegeDiet,finalSupperArray);
      }
      case typeOfDiet.HIGHTHPROTEINDIET:{
        return this.randomSupperMeals(this.highProteinDiet,finalSupperArray);
      }
    }
    return finalSupperArray;
  }

  isMale(gender: string): boolean{
    return gender == 'male';
  }

  isFemale(gender: string): boolean{
    return gender == 'female';
  }
  
  recommendedKcalForMale(weight:number, height:number, age:number, activity: string): number{
    let aliveKcal = 66 + (13.7 * weight) + (5 * height) - (6.8 - age);
    let basicKcal = aliveKcal * this.activityMultiplier(activity);
    return Math.round(basicKcal);
  }

  recommendedKcalForFemale(weight:number, height:number, age:number, activity: string): number{
    let aliveKcal = 65.5 + (9.6 * weight) + (1.85 * height) - (4.7 - age)
    let basicKcal = aliveKcal * this.activityMultiplier(activity);
    return Math.round(basicKcal) ;
  }

  activityMultiplier(personalTypeOfActivity : string): number{
    switch(personalTypeOfActivity){
      case typeOfActivity.NOTRAINING: {
        return 1.3;
      }
      case typeOfActivity.MEDIUMTRAINING: {
        return 1.7;
      }
      case typeOfActivity.HARDTRAINING: {
        return 1.9;
      }
    }
    return 0;
  }

  calkulatorKcal(formValues: any): number{

    if(this.isMale(formValues.Gender)){
      
      switch(formValues.KcalCategory){
        case purposeOfDiet.KEEPWEIGHT: 
          var finalKcal = this.recommendedKcalForMale(formValues.Weight, formValues.Height, formValues.Age, formValues.TrainingExperience);
          return finalKcal;
        case purposeOfDiet.GAINWEIGHT: 
          var basicKcal = this.recommendedKcalForMale(formValues.Weight, formValues.Height, formValues.Age, formValues.TrainingExperience);
          var finalKcal = basicKcal + (0.3 * basicKcal);
          return finalKcal;
        case purposeOfDiet.LOSEWEIGHT: 
          var basicKcal = this.recommendedKcalForMale(formValues.Weight, formValues.Height, formValues.Age, formValues.TrainingExperience);
          var finalKcal = basicKcal - (0.17 * basicKcal);
          return finalKcal;
      }
    }

    if(this.isFemale(formValues.Gender)){

      switch(formValues.KcalCategory){
        case purposeOfDiet.KEEPWEIGHT: 
          var finalKcal = this.recommendedKcalForFemale(formValues.Weight, formValues.Height, formValues.Age, formValues.TrainingExperience);
          return finalKcal;
        case purposeOfDiet.GAINWEIGHT: 
          var basicKcal = this.recommendedKcalForFemale(formValues.Weight, formValues.Height, formValues.Age, formValues.TrainingExperience);
          var finalKcal = basicKcal + (0.3 * basicKcal);
          return finalKcal;
        case purposeOfDiet.LOSEWEIGHT: 
          var basicKcal = this.recommendedKcalForFemale(formValues.Weight, formValues.Height, formValues.Age, formValues.TrainingExperience);
          var finalKcal = basicKcal - (0.18 * basicKcal);
          return finalKcal;
      }
    }
    return 0;
  }
}

