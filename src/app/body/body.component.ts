import { Component, OnInit } from '@angular/core';
import { FormDataService } from './services/form-data.service';
import { HttpService } from './services/http.service';
import { TransitiveDietService } from './services/transitive-diet.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [FormDataService,TransitiveDietService, HttpService]
})

export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
