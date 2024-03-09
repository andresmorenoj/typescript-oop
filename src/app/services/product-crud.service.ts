import { UpdateProductDto } from "../dtos/product.dto";
import { IProduct } from "../models/product.model";
import { ProductsHttpService2 } from "./productHttp2.service";


export class ProductCrudService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http =  new ProductsHttpService2(this.url);

  async update(id: IProduct['id'], dto: UpdateProductDto){
    return this.http.update(id, dto);
  }
}
