import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meals } from 'src/app/interfaces/meals';

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
    
  deleteBasicDiet(){
    console.log(this.basicDiet[1].Dinner[5].name)
  }
  
  ////VEGE
  getVegeDiet(){
    this.httpService.getVegeDiet().subscribe(data=>
      this.vegeDiet = data);
  }
    
  deleteVegeDiet(){
  
  }
  
  //WYSOKOBIAŁKOWA
  getHighProteinDiet(){
    this.httpService.getHighProteinDiet().subscribe(data=>
      this.highProteinDiet = data);
  }
    
  deleteHighProteinDiet(){
    
  }

}
