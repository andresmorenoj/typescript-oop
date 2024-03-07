import { IProduct } from '../models/product.model';
import { ICategory } from '../models/category.model';

export interface CreateProductDto extends Omit<IProduct, 'id' | 'category'>{
  categoryId: ICategory['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

