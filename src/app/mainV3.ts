import { ProductHttpService } from './services/productHttpService';

(() => async () => {
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map(item => item.price));

  // const productId
})();
