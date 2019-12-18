import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-calculator',
  templateUrl: './temp-calculator.component.html',
  styleUrls: ['./temp-calculator.component.css']
})
export class TempCalculatorComponent {

  fahrenheit = 0;
  celcius = 0;

  constructor() { }

  convertFtoC(){
    //(°F − 32) × 5/9 = °C
    var res = (this.fahrenheit - 32) * (5/9);
    this.celcius = res;
  }

  convertCtoF(){
    var res = this.celcius * (9 / 5) + 32;
    this.fahrenheit =res;
  }
}
