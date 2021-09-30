import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/models/product-model';
import { Injectable } from '@angular/core';
import store from '../redux/store';
import { ProductsActionType } from '../redux/products-state';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public async getAllProductsAsync(): Promise<ProductModel[]> {
    if (store.getState().productsState.products.length === 0) {
      const products = await this.http.get<ProductModel[]>(environment.productsUrl).toPromise();
      store.dispatch({ type: ProductsActionType.ProductsDownloaded, payload: products });
    }
    return store.getState().productsState.products;
  }

  public async getOneProduct(id:number):Promise<ProductModel>{
    const products = await this.getAllProductsAsync();
    return products.find(p => p.id === id);
  }

  public async AddProductAsync(product:ProductModel):Promise<ProductModel>{
    const myFormData = new FormData();
    myFormData.append("name", product.name);
    myFormData.append("price", product.price.toString());
    myFormData.append("stock", product.stock.toString());
    myFormData.append("image",product.image.item(0));

    const addedProduct = await this.http.post<ProductModel>(environment.productsUrl, myFormData).toPromise();
    store.dispatch({type:ProductsActionType.ProductAdded,payload:addedProduct});
    return addedProduct;
  }


  public async UpdateProductAsync(product:ProductModel):Promise<ProductModel>{
    const myFormData = new FormData();
    myFormData.append("name", product.name);
    myFormData.append("price", product.price.toString());
    myFormData.append("stock", product.stock.toString());
    if(product.image) myFormData.append("image",product.image.item(0));

    const updatedProduct = await this.http.put<ProductModel>(environment.productsUrl+product.id, myFormData).toPromise();
    store.dispatch({type:ProductsActionType.ProductAdded,payload:updatedProduct});
    return updatedProduct;
  }


}
