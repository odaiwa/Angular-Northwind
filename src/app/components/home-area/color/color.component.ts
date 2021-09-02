import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ColorsService } from 'src/app/services/color-service/colors.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(public colorGenerator:ColorsService) { }
  public randomColor:string;
  ngOnInit(): void {
  }

  @Output()
  public colorSelected = new EventEmitter<string>(); //New event created.


  public colorIt(value:string){
    this.randomColor = this.colorGenerator.getRandomColor();
    this.colorSelected.emit(value);
  }
}
