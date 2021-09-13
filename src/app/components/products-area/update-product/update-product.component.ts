import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})

export class UpdateProductComponent implements OnInit {


  private product = new ProductModel();

  public nameControl = new FormControl(null,[Validators.required,Validators.pattern("^[A-Z].*$")]);
  public priceControl = new FormControl(null,Validators.required);
  public stockControl = new FormControl(null,Validators.required);
  public imageControl = new FormControl(null,Validators.required);


  public productForm = new FormGroup({
    nameControl: this.nameControl,
    priceControl: this.priceControl,
    stockControl: this.stockControl,
    imageControl: this.imageControl,

  });

  constructor(private myProductService:ProductsService, private myActivatedRoute: ActivatedRoute, private myRouter: Router) { }

  public async update() {
    try {

      this.product.name = this.nameControl.value;
      this.product.price = this.priceControl.value;
      this.product.stock = this.stockControl.value;

      const updatedProduct = await this.myProductService.UpdateProductAsync(this.product);
      console.log(updatedProduct.id);
      this.myRouter.navigateByUrl("/products/details/"+this.product.id);

    } catch (err) {
      console.log(err);
    }
  }

  public setImage(args: Event): void {
    this.product.image = (args.target as HTMLInputElement).files;
  }


  async ngOnInit() {
    try {

      this.product.id = +this.myActivatedRoute.snapshot.params.id;
      
      this.product = await this.myProductService.getOneProduct(this.product.id);      this.nameControl.setValue(this.product.name);
      this.priceControl.setValue(this.product.price);
      this.stockControl.setValue(this.product.stock);
      this.imageControl.setValue(this.product.image);
    } catch (err) {
      console.log(err);
    }
  }

}
