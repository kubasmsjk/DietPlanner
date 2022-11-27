import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breakfast, Dinner, Supper } from 'src/app/interfaces/meals';
import { TransitiveDietService } from '../services/transitive-diet.service';

@Component({
  selector: 'app-diet-table',
  templateUrl: './diet-table.component.html',
  styleUrls: ['./diet-table.component.css']
})
export class DietTableComponent implements OnInit {

  firstName!: string | null;
  kcal!: number | null;
  finalBreakfastArray: Array<Breakfast> =[];
  finalDinnerArray: Array<Dinner> =[];
  finalSupperArray: Array<Supper> =[];

  weekDays = ["poniedzialek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];

  constructor(private route: ActivatedRoute,private transitiveDietService : TransitiveDietService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.firstName = params['firstName']);
    this.kcal = this.transitiveDietService.getKcal();
    this.finalBreakfastArray = this.transitiveDietService.FinalBreakfastArray;
    this.finalDinnerArray = this.transitiveDietService.FinalDinnerArray;
    this.finalSupperArray = this.transitiveDietService.FinalSupperArray
  }
}
