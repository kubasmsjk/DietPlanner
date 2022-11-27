import { Injectable } from '@angular/core';
import { Breakfast, Dinner, Supper } from 'src/app/interfaces/meals';

@Injectable()

export class TransitiveDietService {
  private _kcal!: number;
  private finalBreakfastArray: Array<Breakfast> =[];
  private finalDinnerArray: Array<Dinner> =[];
  private finalSupperArray: Array<Supper> =[];
  constructor() {
   }

  setKcal(kcal: number){
    this._kcal = kcal;
  }
  getKcal(): number{
  return this._kcal;
  }

  addBreakfastToArray(breakfast: Array<Breakfast>){
    this.finalBreakfastArray = breakfast;
  }

  addDinnerToArray(dinner: Array<Dinner>){
    this.finalDinnerArray = dinner;
  }

  addSupperToArray(supper: Array<Supper>){
    this.finalSupperArray = supper;
  }

  get FinalBreakfastArray(){
    return this.finalBreakfastArray;
  }
  get FinalDinnerArray(){
    return this.finalDinnerArray;
  }
  get FinalSupperArray(){
    return this.finalSupperArray;
  }
}
