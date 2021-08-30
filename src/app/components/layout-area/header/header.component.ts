import { Component, OnInit } from '@angular/core';

// ng g c components/layout-area/header

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
