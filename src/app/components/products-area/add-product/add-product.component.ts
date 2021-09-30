import { NotifyService } from './../../../services/notify.service';
import { IncompleteGuard } from './../../../services/incomplete.guard';
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

    constructor(private myProductsService:ProductsService, private myRouter:Router,private notify:NotifyService){}

    
    public ChangeOccurred(){
        IncompleteGuard.canLeave = false;
    }

    public setImage(args:Event):void{
        this.product.image = (args.target as HTMLInputElement).files;
    }

    public async add() {
        try {
            await this.myProductsService.AddProductAsync(this.product);
            IncompleteGuard.canLeave = true;
            this.notify.success("Product added")
            // Redirect:
            this.myRouter.navigateByUrl("/products");
        }
        catch(err) {
            this.notify.error(err);
        }
    }




}
