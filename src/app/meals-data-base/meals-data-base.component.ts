import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-meals-data-base',
  templateUrl: './meals-data-base.component.html',
  styleUrls: ['./meals-data-base.component.css']
})
export class MealsDataBaseComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
