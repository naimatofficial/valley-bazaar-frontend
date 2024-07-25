// import PropTypes from "prop-types";

const FlatCard = (product) => {
	const oldPrice = product?.price + product?.discount || 0;

	return (
		<div className="w-72 bg-white border border-primary-100 rounded-lg overflow-hidden flex justify-between items-start mx-2">
			<div className="relative rounded-lg overflow-hidden group cursor-pointer z-10">
				{product.discount > 0 && (
					<div className="discount-badge">-${product.discount?.toFixed(2)}</div>
				)}
				<img
					src={`http://localhost:3000/${product.thumbnail}`}
					alt={product.name}
					className="product__img h-32"
				/>
			</div>
			<div className="p-4 w-44">
				<p className="font-medium truncate mb-2">{product.name}</p>
				<div className="flex items-center gap-2">
					{oldPrice > product.price && (
						<p className="text-sm line-through text-gray-500">
							${oldPrice.toFixed(2)}
						</p>
					)}
					<p className="text-lg font-bold">${product.price.toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
};

export default FlatCard;
