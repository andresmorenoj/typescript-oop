import { ProductMemoryService } from './services/productMemory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'description 1',
  categoryId: 12,
  images: [],
  creationAt: new Date(),
  updatedAt: new Date(),
})

const products = productService.getAll()
const productId = products[0].id

productService.updateProduct(productId, {
  title: 'product1 updated'
})

const rta = productService.findOne(productId)
console.log(rta);

