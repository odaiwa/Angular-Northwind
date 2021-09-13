import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private myActivatedRoute: ActivatedRoute, private myProductsService: ProductsService) { } //DI
    public imageUrl :string;
    public product: ProductModel;
    

    async ngOnInit() {
        try {
            const id = +this.myActivatedRoute.snapshot.params.id;
            this.product = await this.myProductsService.getOneProduct(id);
            this.imageUrl = environment.productImagesUrl + this.product.imageName;
        } catch (err:any) {
            console.log(err.message);
        }
    }

}
