import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FlatCard = ({ imageUrl, title, oldPrice, newPrice }) => {
	const [discountAmount, setDiscountAmount] = useState(0);

	useEffect(() => {
		if (oldPrice > newPrice) {
			setDiscountAmount(oldPrice - newPrice);
		}
	}, [oldPrice, newPrice]);

	return (
		<div className="w-72 bg-white border border-green-50 rounded-lg overflow-hidden flex justify-between items-start mx-2">
			<div className="relative rounded-lg overflow-hidden group cursor-pointer">
				{discountAmount > 0 && (
					<div className="absolute top-2 left-2 bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded z-50">
						-${discountAmount.toFixed(2)}
					</div>
				)}
				<img
					src={imageUrl}
					alt="product-image"
					className="w-full h-32 p-4 object-contain rounded-lg transform transition-transform duration-300 group-hover:scale-110"
				/>
			</div>
			<div className="p-4 w-44">
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
};

FlatCard.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	oldPrice: PropTypes.number.isRequired,
	newPrice: PropTypes.number.isRequired,
};

export default FlatCard;
