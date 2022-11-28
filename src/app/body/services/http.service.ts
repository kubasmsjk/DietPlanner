import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Breakfast, Meals } from "src/app/interfaces/meals";
import { map } from "rxjs";

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){}

    //Śniadania dieta podstawowa
    getBasicDiet(){
        return this.http.get<Array<Meals>>("http://localhost:3000/basicDiet").pipe(map(result=>result));
    }

    //dieta vege
    getVegeDiet(){
        return this.http.get<Array<Meals>>("http://localhost:3000/vegeDiet").pipe(map(result=>result));
    }
    
    //Dieta wysokobiałkowa
    getHighProteinDiet(){
        return this.http.get<Array<Meals>>("http://localhost:3000/highProteinDiet").pipe(map(result=>result));
    }

    postBreakfast(diettype: string, meal: Breakfast){
        return this.http.post<Array<Meals>>("http://localhost:3000/"+diettype, meal).pipe(map(result=>result));
    }


    postBasicDiet(meal: Meals){
        return this.http.post<Array<Meals>>("http://localhost:3000/basicDiet", meal).pipe(map(result=>result));
    }


}