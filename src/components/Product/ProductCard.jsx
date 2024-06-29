import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";

export function ProductCard({ imageUrl, title, oldPrice, newPrice }) {
	const [discountAmount, setDiscountAmount] = useState(0);

	useEffect(() => {
		if (oldPrice > newPrice) {
			setDiscountAmount(oldPrice - newPrice);
		}
	}, [oldPrice, newPrice]);

	console.log(discountAmount);

	return (
		<div className="w-56 bg-white rounded-lg overflow-hidden shadow-sm">
			<div className="relative rounded-lg overflow-hidden group cursor-pointer">
				{discountAmount > 0 && (
					<div className="absolute top-2 left-2 bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded z-50">
						-${discountAmount.toFixed(2)}
					</div>
				)}
				<img
					src={imageUrl}
					alt="product-image"
					className="w-full h-56 object-contain rounded-lg transform transition-transform duration-300 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-green-500 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<div className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:text-green-600">
						<FaEye className="text-xl" />
					</div>
				</div>
			</div>
			<div className="p-4">
				<p className="font-medium truncate mb-2">{title}</p>
				<div className="flex items-center gap-2">
					{oldPrice > newPrice && (
						<p className="text-sm line-through text-gray-500">
							${oldPrice.toFixed(2)}
						</p>
					)}
					<p className="text-lg font-bold">${newPrice.toFixed(2)}</p>
				</div>
			</div>
		</div>
	);
}

ProductCard.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	oldPrice: PropTypes.number.isRequired,
	newPrice: PropTypes.number.isRequired,
};
