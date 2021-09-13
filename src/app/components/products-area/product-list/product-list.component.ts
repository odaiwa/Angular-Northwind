import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public allProducts:ProductModel[];

    constructor(private myProductService:ProductsService) { } 

    async ngOnInit() {
        try{
            this.allProducts = await this.myProductService.getAllProductsAsync();
            
        }catch(err:any){
            console.log(err.message)
        }
    }

}
