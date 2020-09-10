import { CartProps } from '../typescriptInterface';

const DATA_CART_NAME = 'dataCart';

export function setLocalStorageProducts(cart: CartProps[]) {
	localStorage.setItem(DATA_CART_NAME, JSON.stringify(cart));
}

export function getLocalStorageProducts() {
	const data = localStorage.getItem(DATA_CART_NAME);
	if (data) {
		const dataParsed = JSON.parse(data);
		return dataParsed;
	} else return [];
}
