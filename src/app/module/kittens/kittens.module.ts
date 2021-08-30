import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcService } from 'src/app/services/calc.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[CalcService] // Service for module scope
})
export class KittensModule { }
