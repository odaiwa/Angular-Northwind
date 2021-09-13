import { ProductModel } from 'src/app/models/product-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})

export class UpdateProductComponent implements OnInit {


  private product = new ProductModel();

  public nameControl = new FormControl();
  public priceControl = new FormControl();
  public stockControl = new FormControl();
  public imageControl = new FormControl();


  public productForm = new FormGroup({
    nameControl: this.nameControl,
    priceControl: this.priceControl,
    stockControl: this.stockControl,
    imageCControl: this.imageControl,

  });

  constructor() { }

  ngOnInit(): void {
  }

}
