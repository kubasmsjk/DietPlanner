import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  constructor(private httpService: HttpService, private router: Router) { }

  getDiets(){
    this.httpService.getDiets().subscribe(diets =>{
      console.log(diets);
    });
  }

  deleteDiet(){

  }
  
}
export interface Diet{
  id?: number;
  name?: string;
  kcal?: string;
}