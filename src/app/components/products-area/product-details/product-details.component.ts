import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private myActivedRouter: ActivatedRoute, private http: HttpClient) { } //DI
    public imageUrl :string;
    public product: ProductModel;
    

    async ngOnInit() {
        try {
            const id = +this.myActivedRouter.snapshot.params.id;
            this.product = await this.http.get<ProductModel>(environment.productsUrl + id).toPromise();
            this.imageUrl = environment.productImagesUrl + this.product.imageName;
        } catch (err) {
            console.log(err.message);
        }
    }

}
