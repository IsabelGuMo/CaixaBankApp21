import { data } from "./data"

export const Houses = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='container-items'>
			{data.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.nameProduct} />
					</figure>
					<div className='info-price'>
						<h5><p className='price'>{product.price} € </p></h5>
					</div>
					<div className='info-product'>
						<h5 className="city-product">{product.city}</h5>
						<h2 className="name-product">{product.nameProduct}</h2>
						<h6>{product.dimensions}</h6>
						<h6 className="description">{product.description}</h6>
						<button onClick={() => onAddProduct(product)}>
							Ver ficha
						</button>
					</div>
				</div>
			))}
		</div>
	);
};