import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";
import { IProduct } from "./product.model";

export interface ProductServiceDriver {
  getAll(): Promise<IProduct[]> | IProduct[];
  update(id: IProduct['id'], changes: UpdateProductDto):Promise<IProduct> | IProduct;
  create(dto: CreateProductDto): Promise<IProduct> | IProduct;
  findOne(id: IProduct['id']): Promise<IProduct | undefined> | IProduct | undefined;
}
