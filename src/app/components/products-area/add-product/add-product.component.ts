import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();

    constructor(private http:HttpClient, private myRouter:Router){}


    public setImage(args:Event):void{
        this.product.image = (args.target as HTMLInputElement).files;
    }
    
    public async add() {
        try {
            const myFormData = new FormData();
            myFormData.append("name", this.product.name);
            myFormData.append("price", this.product.price.toString());
            myFormData.append("stock", this.product.stock.toString());
            myFormData.append("image", this.product.image.item(0));

            const addedProduct = await this.http.post<ProductModel>(environment.productsUrl, myFormData).toPromise();
            alert("Product added. ID: " + addedProduct.id);

            // Redirect:
            this.myRouter.navigateByUrl("/products");
        }
        catch(err) {
            alert(err.message);
        }
    }



}
