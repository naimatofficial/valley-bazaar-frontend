import { ProductCard } from "./ProductCard";

/* eslint-disable react/prop-types */
const LatestProducts = ({ products }) => {
	return (
		<div className="bg-white px-4">
			<h3 className="text-2xl font-bold mb-4">Latest Products</h3>
			<div className="grid grid-cols-4 gap-2">
				{products?.map((product, index) => (
					<ProductCard
						key={index}
						imageUrl={product.image}
						title={product.title}
						oldPrice={184.0}
						newPrice={product.price}
					/>
				))}
			</div>
		</div>
	);
};

export default LatestProducts;
