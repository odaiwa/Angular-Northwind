//ng g class models/product-model
export class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;
    public image: FileList;

}