
import { Component, OnInit } from '@angular/core';
import { FormDataService } from './services/form-data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [FormDataService]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
