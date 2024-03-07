import { faker } from '@faker-js/faker';

import { IProduct } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export class ProductMemoryService {
  private products: IProduct[] = [];

  create(data: CreateProductDto): IProduct {
    const newProduct: IProduct = {
      ...data,
      id: faker.number.int(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: faker.number.int(),
        name: faker.commerce.productName(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        image: faker.image.url(),
      },
    };

    return this.add(newProduct);
  }

  add(product: IProduct): IProduct {
    this.products.push(product);

    return product;
  }

  updateProduct = (id: IProduct['id'], changes: UpdateProductDto): IProduct => {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  };

  findOne(id: IProduct['id']) {
    return this.products.find((item) => item.id === id);
  }
}
