import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MealsClass } from '../classes/meals';

@Component({
  selector: 'app-meals-data-base',
  templateUrl: './meals-data-base.component.html',
  styleUrls: ['./meals-data-base.component.css']
})
export class MealsDataBaseComponent implements OnInit {

  basicDiet: MealsClass[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<MealsClass>>('http://localhost:3000/vege').subscribe((basicDiet: MealsClass[]) =>
    {
      console.log('res', basicDiet);
    });
  }

}
