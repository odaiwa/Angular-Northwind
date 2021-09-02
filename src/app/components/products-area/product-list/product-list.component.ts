import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public allProducts:ProductModel[];

    constructor(private http: HttpClient) { } // HttpClient === axios

    async ngOnInit() {
        try{
            this.allProducts = await this.http.get<ProductModel[]>(environment.productsUrl).toPromise();
            console.log(this.allProducts);
        }catch(err){
            console.log(err.message)
        }
    }

}
