import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();


    public add() {
        console.log(this.product);
    }

}
