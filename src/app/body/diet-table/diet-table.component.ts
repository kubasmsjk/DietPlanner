import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diet-table',
  templateUrl: './diet-table.component.html',
  styleUrls: ['./diet-table.component.css']
})
export class DietTableComponent implements OnInit {

  firstName!: string | null;

  weekDays = ["poniedzialek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.firstName = params['firstName']);
  }
}
