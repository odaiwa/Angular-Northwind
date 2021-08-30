import { Component, OnInit } from '@angular/core';

// ng g c components/home-area/order

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

    public tooltip = "Free Shipping!";
    public item = "";

    constructor() { }

    ngOnInit(): void {
    }

    public showHelp(args: MouseEvent): void { // args - event object 
        console.log(args);
        alert("Fill in the order form...");
        this.item = "";
    }

}
