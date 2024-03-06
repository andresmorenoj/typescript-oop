 import axios from "axios"

(async () => {
	function delay(time: number) {
		const promise = new Promise<boolean>(resolve => {
			setTimeout(() => {
				resolve(true)
			}, time)
		})

		return promise
	}

	function getProducts() {
		const newProducs = axios.get('https://api.escuelajs.co/api/v1/products');
		return newProducs
	}

	async function getProductsAsync() {
		const newProducs = await axios.get('https://api.escuelajs.co/api/v1/products');
		return newProducs
	}


	console.log('--'.repeat(10));
	const rta = await delay(3000);
	console.log(rta);

	const products = await getProducts()
	console.log(products.data);

	const products2 = await getProductsAsync()
	console.log(products2);
})()
