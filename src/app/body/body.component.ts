
import { Component, OnInit } from '@angular/core';
import { FormDataService } from './services/form-data.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [FormDataService, HttpService]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
