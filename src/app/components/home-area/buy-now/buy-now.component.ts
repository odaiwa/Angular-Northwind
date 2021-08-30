import { Component, OnInit } from '@angular/core';

// ng g c components/home-area/buy-now

@Component({
    selector: 'app-buy-now',
    templateUrl: './buy-now.component.html',
    styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {

    public price = 100;
    public currentDate = new Date();

    constructor() { }

    ngOnInit(): void {
    }

}
