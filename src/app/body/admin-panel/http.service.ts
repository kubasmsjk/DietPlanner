import { Injectable } from "@angular/core";
import { Diet } from "./admin-panel.component";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){}
    
    getDiets(): Observable<Array<Diet>>{
       return this.http.get<Array<Diet>>("http://localhost:3000/posts");
    }
    getDiet(id:number){

    }

    addPost(diet: Diet){

    }

    updateDiet(diet: Diet){

    }

    deleteDiet(id: number){

    }
}