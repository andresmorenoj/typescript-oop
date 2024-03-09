import { ProductHttpService } from './services/productHttp.service';

(() => async () => {
  const productService = new ProductHttpService();

  console.log('--'.repeat(10));

  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map(item => item.price));

  // const productId
})();
