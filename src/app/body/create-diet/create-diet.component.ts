import { Component, OnInit } from '@angular/core';
import { FormValuesClass } from 'src/app/classes/formValues';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css']
})
export class CreateDietComponent implements OnInit {

  formValues!: FormValuesClass;

  constructor(private formDataService : FormDataService) { }

  ngOnInit(): void {
    let formValues = this.formDataService.FormValuesArray;
  }
   kalkulatorKCAL(){
    if(this.formValues.Gender == 'Male' && this.formValues.KcalCategory == 'keepWeight'){
      var aliveKcal = 66 + (13.7 * this.formValues.Weight) + (5 * this.formValues.Height) - (6.8 - this.formValues.Age)
      var basicKcal = aliveKcal * Klient_details.aktywnosc
      console.log(basicKcal)
    }
    else if(this.formValues.Gender == 'Male' && this.formValues.KcalCategory == 'gainWeight'){
      var aliveKcal = 66 + (13.7 * this.formValues.Weight) + (5 * this.formValues.Height) - (6.8 - this.formValues.Age)
      var basicKcal = aliveKcal * Klient_details.aktywnosc
      var finalKcal = basicKcal + (0.3 * basicKcal)
      console.log(finalKcal)
    }
    else if(this.formValues.Gender == 'Male' && this.formValues.KcalCategory == 'loseWeight'){
      var aliveKcal = 66 + (13.7 * this.formValues.Weight) + (5 * this.formValues.Height) - (6.8 - this.formValues.Age)
      var basicKcal = aliveKcal * Klient_details.aktywnosc
      var finalKcal = basicKcal - (0.1 * basicKcal)
      console.log(finalKcal)
    }
    else if(this.formValues.Gender == 'Female' && this.formValues.KcalCategory == 'keepWeight'){
      var aliveKcal = 65.5 + (9.6 * this.formValues.Weight) + (1.85 * this.formValues.Height) - (4.7 - this.formValues.Age)
      var basicKcal = aliveKcal * Klient_details.aktywnosc
      console.log(basicKcal)
    }
    else if(this.formValues.Gender == 'Female' && this.formValues.KcalCategory == 'gainWeight'){
      var aliveKcal = 65.5 + (9.6 * this.formValues.Weight) + (1.85 * this.formValues.Height) - (4.7 - this.formValues.Age)
      var basicKcal = aliveKcal * Klient_details.aktywnosc
      var finalKcal = basicKcal + (0.3 * basicKcal)
      console.log(finalKcal)
    }
    else if(this.formValues.Gender == 'Female' && this.formValues.KcalCategory == 'loseWeight'){
      var aliveKcal = 65.5 + (9.6 * this.formValues.Weight) + (1.85 * this.formValues.Weight) - (4.7 - this.formValues.Age)
      var basicKcal = aliveKcal * Klient_details.aktywnosc
      var finalKcal = basicKcal - (0.1 * basicKcal)
      console.log(finalKcal)
    }
  }

}
