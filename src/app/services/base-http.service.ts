import axios from 'axios';
import { ICategory } from '../models/category.model';
import { IProduct } from '../models/product.model';

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = [];

  constructor(private url: string) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service2 = new BaseHttpService<number>();
// service2.getAll()

// const service3 = new BaseHttpService<ICategory>();
// service3.getAll()

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const url2 = 'https://api.escuelajs.co/api/v1/categories';

  const productsService = new BaseHttpService<IProduct>(url1);
  const categoriesService = new BaseHttpService<ICategory>(url2);

  const rtaProducts = await productsService.getAll();
  console.log('rtaProducts: ', rtaProducts.length);

  const rtaCategories = await categoriesService.getAll();
  console.log('rtaCategories: ', rtaCategories.length)

})();
