/* eslint-disable react/prop-types */
import { Rating } from "@material-tailwind/react";
import React from "react";
import { FaHeart } from "react-icons/fa";

const ProductDetails = ({ product, onClose }) => {
	const {
		title,
		price,
		description,
		image,
		rating,
		thumbnails,
		quantity,
		reviewsCount,
	} = product;

	const [mainImage, setMainImage] = React.useState(image);
	const [productQuantity, setProductQuantity] = React.useState(quantity);

	const handleQuantityChange = (change) => {
		setProductQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
	};

	return (
		<div className="flex flex-col w-full h-full p-4 border shadow-lg bg-white rounded-lg">
			<div className="flex justify-between items-center p-4 border-b">
				<h2 className="text-xl font-semibold">{title}</h2>
				<button onClick={onClose} className="text-gray-500">
					&times;
				</button>
			</div>
			<div className="flex flex-row gap-3 p-4">
				<div className="w-1/2 flex flex-col">
					<div className="w-full h-80 overflow-hidden shadow-sm">
						<img
							src={mainImage}
							alt="Main Image"
							className="w-full h-96 object-contain py-2 transition-all duration-300 ease-out"
						/>
					</div>
					<div className="flex justify-center mt-4">
						{thumbnails.map((src, index) => (
							<img
								key={index}
								src={src}
								alt={`Thumbnail ${index + 1}`}
								className="w-20 h-20 object-cover mr-2 border border-gray-100 rounded-md cursor-pointer"
								onClick={() => setMainImage(src)}
							/>
						))}
					</div>
				</div>
				<div className="w-1/2 flex flex-col">
					<h2 className="text-2xl">{title}</h2>
					<div className="flex items-center mb-2">
						<Rating value={Number(rating)} readonly />
						<span className="ml-2 text-gray-600">({reviewsCount})</span>
						<div className="flex justify-between gap-2 items-center mx-2">
							<p className="border-r-2 pr-2">4 Reviews </p>
							<p className="border-r-2 pr-2">6 Orders</p>
							<p>1 Wish Listed</p>
						</div>
					</div>
					<div className="flex gap-3 items-center mb-2 text-gray-600">
						<span className="text-xl font-bold text-primary-500">${price}</span>
					</div>
					<p className="text-gray-600 mb-4">{description}</p>
					<div className="flex items-center mb-4">
						<span className="text-lg font-medium">Quantity:</span>
						<div className="flex items-center border rounded-md ml-2">
							<button
								onClick={() => handleQuantityChange(-1)}
								className="px-3 py-1"
							>
								-
							</button>
							<input
								type="number"
								value={productQuantity}
								onChange={(e) => setProductQuantity(parseInt(e.target.value))}
								className="w-12 text-center"
							/>
							<button
								onClick={() => handleQuantityChange(1)}
								className="px-3 py-1"
							>
								+
							</button>
						</div>
					</div>
					<div className="flex gap-3">
						<button className="w-full bg-orange-500 text-white py-2 px-4 rounded">
							Buy now
						</button>
						<button className="w-full bg-primary-500 text-white py-2 px-4 rounded">
							Add to cart
						</button>
						<button className="w-full border border-primary-500 text-primary-500 py-2 px-4 rounded flex items-center justify-center">
							<FaHeart className="mr-2" /> 0
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
