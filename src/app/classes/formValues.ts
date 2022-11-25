export class FormValuesClass{
  private _firstName: string;
  private _kcalCategory: string;
  private _diet: string;
  private _weight: number;
  private _height: number;
  private _age: number;
  private _trainingExperience: string;
  private _gender: string;
    
    constructor(firstName:string, kcalCategory:string, diet:string, weight:number, 
       height:number, age:number, trainingExperience:string, gender:string){
       this._firstName = firstName;
       this._kcalCategory = kcalCategory;
       this._diet = diet;
       this._weight = weight;
       this._height = height;
       this._age = age;
       this._trainingExperience = trainingExperience;
       this._gender = gender;
      } 
  
  
    get FirstName(): string{
      return this._firstName;
    }

    set FirstName(firstName:string){
      this._firstName=firstName;
    }
    
    get KcalCategory():string{
      return this._kcalCategory;
    }

    set KcalCategory(kcalCategory:string){
      this._kcalCategory=kcalCategory;
    }

    get Diet():string{
      return this._diet;
    }

    set Diet(diet:string){
      this._diet=diet;
    }

    get Weight():number{
        return this._weight;
    }

    set Weight(weight:number){
      this._weight=weight;
    }

    get Height():number{
      return this._height;
    }

    set Height(height:number){
      this._height=height;
    }

    get Age():number{
      return this._age;
    }

    set Age(age:number){
      this._age=age;
    }

    get TrainingExperience():string{
      return this._trainingExperience;
    }

    set TrainingExperience(trainingExperience:string){
      this._trainingExperience=trainingExperience;
    }

    get Gender():string{
      return this._gender;
    }

    set Gender(gender:string){
      this._gender=gender;
    }
}