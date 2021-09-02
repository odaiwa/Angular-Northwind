import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private myActivedRouter:ActivatedRoute) { } //DI

  ngOnInit(): void {
      const id = +this.myActivedRouter.snapshot.params.id;
      if(id === NaN){
          return;
      }
      console.log(id);
      
  }

}
