import { IProduct } from "../models/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductsHttpService2 extends BaseHttpService<IProduct> {
  anotherMethod() {
    return this.url;
  }
}
