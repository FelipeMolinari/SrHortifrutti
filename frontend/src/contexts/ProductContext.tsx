import React, { createContext, useState } from 'react';
import producstMock from '../util/productMock';
import { ProductProps, ProductsProviderProps, CartProps } from '../typescriptInterface';

export const ProductsContext = createContext({} as ProductsProviderProps);

const ProductsContextProvider: React.FC = ({ children }) => {
	const [ avaiablesProducts ] = useState<ProductProps[]>(producstMock);
	const [ cart, setCart ] = useState<CartProps[]>([]);

	function addToCart(id: number) {
		const check = cart.every((item) => {
			return item.product.id !== id;
		});
		if (check) {
			let data = avaiablesProducts.filter((product) => {
				return product.id === id;
			});

			setCart([ ...cart, { product: data[0], quantity: 1 } ]);
		} else {
			alert('the product has been added to cart.');
		}
	}
	function removeFromCart(id: number) {
		if (window.confirm('Tem certeza que deseja deletar esse produto?')) {
			cart.splice(
				cart.findIndex((item) => {
					const verifier = item.product.id === id ? true : false;

					return verifier;
				}),
				1
			);
			setCart([ ...cart ]);
		}
	}
	function changeQuantity(id: number, newQuantity: number) {
		const data = cart.map((item) => {
			if (item.product.id === id) {
				item.quantity = newQuantity;
			}
			return item;
		});
		console.log(data);
		setCart(data);
	}

	const value = { avaiablesProducts, cart, addToCart, removeFromCart, changeQuantity };
	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
