import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function DealOfTheDay({ imageUrl, title, oldPrice, newPrice }) {
	const [discountAmount, setDiscountAmount] = useState(0);

	useEffect(() => {
		if (oldPrice > newPrice) {
			setDiscountAmount(oldPrice - newPrice);
		}
	}, [oldPrice, newPrice]);

	console.log(discountAmount);

	return (
		<div className="p-4 bg-green-50 border border-green-700 shadow-sm rounded-lg ">
			<h2 className="uppercase text-base font-bold text-center text-green-500 py-4">
				Deal of the day
			</h2>
			<div className="w-56 bg-white py-4 rounded-lg overflow-hidden shadow-sm text-center">
				<div className="relative rounded-lg overflow-hidden group cursor-pointer">
					{discountAmount > 0 && (
						<div className="absolute top-2 left-2 bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded z-50">
							-${discountAmount.toFixed(2)}
						</div>
					)}
					<img
						src={imageUrl}
						alt="product-image"
						className="w-full h-56 object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-110"
					/>
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
				<div>
					<button className="btn primary-btn">Buy Now</button>
				</div>
			</div>
		</div>
	);
}

DealOfTheDay.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	oldPrice: PropTypes.number.isRequired,
	newPrice: PropTypes.number.isRequired,
};

export default DealOfTheDay;
