import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Meals } from "src/app/interfaces/meals";

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){}

    //Śniadania dieta podstawowa
    getBasicDiet(){
        return this.http.get<Array<Meals>>("http://localhost:3000/basicDiet");
    }

    getBasicDietBreakfast(id:number){

    }

    addBasicDietBreakfast(basciDiet: Meals){

    }

    updateBasicDietBreakfast(basciDiet: Meals){

    }

    deleteBasicDietBreakfast(id: number){

    }

    //dieta vege
    getVegeDiet(){
        return this.http.get<Array<Meals>>("http://localhost:3000/vegeDiet");
    }
    
    getVegeDietBreakfast(id:number){

    }

    addVegeDietBreakfast(basciDiet: Meals){

    }

    updateVegeDietBreakfast(basciDiet: Meals){

    }

    deleteVegeDietBreakfast(id: number){

    }

     //Dieta wysokobiałkowa
     getHighProteinDiet(){
        return this.http.get<Array<Meals>>("http://localhost:3000/highProteinDiet");
    }
    
    getHighProteinDietBreakfast(id:number){

    }

    addHighProteinDietBreakfast(basciDiet: Meals){

    }

    updateHighProteinDietBreakfast(basciDiet: Meals){

    }

    deleteHighProteinDietBreakfast(id: number){

    }
    
}