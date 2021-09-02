import { Component } from '@angular/core';

// ng g c components/home-area/home

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    public tipValue:number;
    public colorSelected:string;
    public displayTip(value:number):void{
        this.tipValue = value;
    }
    public displayColor(value:string):void{
        this.colorSelected = value;
    }

}
