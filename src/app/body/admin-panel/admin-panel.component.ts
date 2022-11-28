import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breakfast, Meals } from 'src/app/interfaces/meals';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

    basicDiet: Meals[]=[];
    vegeDiet: Meals[]=[];
    highProteinDiet: Meals[]=[];
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.getBasicDiet();
    this.getVegeDiet();
    this.getHighProteinDiet();
  }
  //PODSTAWOWA
  getBasicDiet(){
    this.httpService.getBasicDiet().subscribe(data=>
      this.basicDiet = data);
  }
  getVegeDiet(){
    this.httpService.getVegeDiet().subscribe(data=>
      this.vegeDiet = data);
  }
  getHighProteinDiet(){
    this.httpService.getHighProteinDiet().subscribe(data=>
      this.highProteinDiet = data);
  }
    
  showAllBasic(){
    for(let i=0;i<this.basicDiet[0].Breakfast.length;i++){
      console.log(this.basicDiet[0].Breakfast[i])
    }
    console.log("obiad")
    for(let i=0;i<this.basicDiet[1].Dinner.length;i++){
      console.log(this.basicDiet[1].Dinner[i])
    }
  }


  postMeal(v: string, m: Breakfast){
    this.httpService.postBreakfast(v, m).subscribe(data=>
      console.log(data));
  }

  
    
  deleteVegeDiet(){
  
  }
  
  //WYSOKOBIAŁKOWA
  
    
  deleteHighProteinDiet(){
    
  }

  
}
