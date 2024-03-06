import axios from "axios"
import { IProduct } from "./models/product.model";

(async () => {
	async function getProducts() {
		const { data } = await axios.get<IProduct[]>('https://api.escuelajs.co/api/v1/products');

		return data
	}

	const products2 = await getProducts()
	console.log(products2.map(item => `${item.id} - ${item.title}`));
})()
