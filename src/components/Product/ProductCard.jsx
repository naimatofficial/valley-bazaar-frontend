/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import ProductDialog from "./ProductDialog";

export function ProductCard(product) {
	const { image, title, price } = product;
	const oldPrice = 184.0;
	const [discountAmount, setDiscountAmount] = useState(0);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleProductClick = (product) => {
		setSelectedProduct(product);
		setIsDialogOpen(true);
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
		setSelectedProduct(null);
	};

	useEffect(() => {
		if (oldPrice > price) {
			setDiscountAmount(oldPrice - price);
		}
	}, [oldPrice, price]);

	return (
		<div className="w-56 bg-white rounded-lg overflow-hidden shadow-sm">
			<div className="relative rounded-lg overflow-hidden group cursor-pointer">
				{discountAmount > 0 && (
					<div className="absolute top-2 left-2 bg-blue-800 text-white text-xs font-bold px-2 py-1 rounded z-50">
						-${discountAmount.toFixed(2)}
					</div>
				)}
				<img
					src={image}
					alt="product-image"
					className="w-full h-56 object-contain rounded-lg transform transition-transform duration-300 group-hover:scale-110"
				/>
				<div className="absolute inset-0 bg-green-500 bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					<button
						onClick={() => handleProductClick(product)}
						className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:text-green-600"
					>
						<FaEye className="text-xl" />
					</button>
				</div>
			</div>
			<div className="p-4">
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
			{selectedProduct && (
				<ProductDialog
					// product={selectedProduct}
					open={isDialogOpen}
					onClose={handleCloseDialog}
				/>
			)}
		</div>
	);
}

// ProductCard.propTypes = {
// 	product: PropTypes.object().isRequired,
// };
