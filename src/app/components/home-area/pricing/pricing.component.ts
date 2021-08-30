import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
  //providers:[CalcService] // Craete CalcService object only in the component scope;
})
export class PricingComponent {

  private myCalc:CalcService;

  constructor(calc:CalcService){ //DI Dependence Injection
    this.myCalc = calc;
  }

  public showSummery():void{
    const arr=[10,20,30,40];
    
    
    const sum = this.myCalc.getSum(arr);

    console.log("Sum : "+sum);

  }

}
