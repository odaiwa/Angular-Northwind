import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();

    constructor(private myProductsService:ProductsService, private myRouter:Router){}


    public setImage(args:Event):void{
        this.product.image = (args.target as HTMLInputElement).files;
    }
    
    public async add() {
        try {
            await this.myProductsService.AddProductAsync(this.product);
            console.log("Product added")
            // Redirect:
            this.myRouter.navigateByUrl("/products");
        }
        catch(err) {
            alert(err);
        }
    }



}
