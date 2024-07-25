/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import ProductDialog from "./ProductDialog";
import { Link } from "react-router-dom";

export function ProductCard(product) {
	const oldPrice = product.price + product.discount;
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

	return (
		<div className="w-56 bg-white rounded-lg overflow-hidden shadow-sm">
			<div className="relative rounded-lg overflow-hidden group cursor-pointer z-10">
				{product.discount > 0 && (
					<div className="discount-badge">-${product.discount?.toFixed(2)}</div>
				)}
				<img
					src={`http://localhost:3000/${product.thumbnail}`}
					alt={product.name}
					className="product__img h-56"
				/>
				<div className="product__quick-view z-20">
					<button
						onClick={() => handleProductClick(product)}
						className="bg-white p-2 rounded-full shadow-sm cursor-pointer hover:text-primary-400"
					>
						<FaEye className="text-xl" />
					</button>
				</div>
			</div>
			<div className="p-4 group">
				<Link to={`/products/${product._id}`}>
					<p className="font-medium truncate mb-2 group-hover:text-primary-400 transition-all ease-in">
						{product.name}
					</p>
					<div className="flex items-center gap-2">
						{oldPrice > product.price && (
							<p className="text-sm line-through text-gray-500">
								${oldPrice.toFixed(2)}
							</p>
						)}
						<p className="text-lg font-bold">${product.price.toFixed(2)}</p>
					</div>
				</Link>
			</div>

			{selectedProduct && (
				<ProductDialog
					productId={product._id}
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
