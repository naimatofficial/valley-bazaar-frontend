import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

const FlatCard = (product) => {
	const { image, title, price } = product;
	const [discountAmount, setDiscountAmount] = useState(0);

	const oldPrice = 153.0;
	useEffect(() => {
		if (oldPrice > price) {
			setDiscountAmount(oldPrice - price);
		}
	}, [oldPrice, price]);

	return (
		<div className="w-72 bg-white border border-primary-100 rounded-lg overflow-hidden flex justify-between items-start mx-2">
			<div className="relative rounded-lg overflow-hidden group cursor-pointer z-10">
				{discountAmount > 0 && (
					<div className="discount-badge">-${discountAmount.toFixed(2)}</div>
				)}
				<img src={image} alt="product-image" className="product__img h-32" />
			</div>
			<div className="p-4 w-44">
				<p className="font-medium truncate mb-2">{title}</p>
				<div className="flex items-center gap-2">
					{oldPrice > price && (
						<p className="text-sm line-through text-gray-500">
							${oldPrice.toFixed(2)}
						</p>
					)}
					<p className="text-lg font-bold">${price.toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
};

export default FlatCard;
