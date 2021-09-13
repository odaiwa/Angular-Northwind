import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from 'src/app/models/product-model';
import { Injectable } from '@angular/core';
import store from '../redux/Store';
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
}
