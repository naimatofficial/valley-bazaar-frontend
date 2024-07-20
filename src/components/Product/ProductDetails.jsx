/* eslint-disable react/prop-types */
import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDetails = ({ product, onClose }) => {
	const [mainImage, setMainImage] = useState(product?.thumbnail);
	const [productQuantity, setProductQuantity] = useState(product.quantity);

	const productImages = [...product.images, product?.thumbnail];

	const handleQuantityChange = (change) => {
		setProductQuantity((prevQuantity) => Math.max(prevQuantity + change, 1));
	};

	return (
		<div className="flex flex-col w-full h-full p-4 border shadow-lg bg-white rounded-lg">
			<div className="flex justify-between items-center p-4 border-b">
				<Link to={`/products/${product._id}`}>
					<h2 className="text-xl font-semibold">{product.name}</h2>
				</Link>
				<button onClick={onClose} className="text-gray-500">
					&times;
				</button>
			</div>
			<div className="flex flex-row gap-3 p-4">
				<div className="w-1/2 flex flex-col">
					<div className="w-full h-80 overflow-hidden shadow-sm">
						<img
							src={`http://localhost:3000/${mainImage}`}
							alt={product.name}
							className="w-full h-96 object-contain py-2 transition-all duration-300 ease-out"
						/>
					</div>
					<div className="flex justify-center mt-4">
						{productImages?.map((src, index) => (
							<img
								key={index}
								src={`http://localhost:3000/${src}`}
								alt={`Thumbnail ${index + 1}`}
								className="w-20 h-20 object-cover mr-2 border border-gray-100 rounded-md cursor-pointer"
								onClick={() => setMainImage(src)}
							/>
						))}
					</div>
				</div>
				<div className="w-1/2 flex flex-col">
					<h2 className="text-2xl">{product.name}</h2>
					<div className="flex items-center mb-2">
						<Rating value={Number(4)} readonly />
						<span className="ml-2 text-gray-600">({10})</span>
						<div className="flex justify-between gap-2 items-center mx-2">
							<p className="border-r-2 pr-2">4 Reviews </p>
							<p className="border-r-2 pr-2">6 Orders</p>
							<p>1 Wish Listed</p>
						</div>
					</div>
					<div className="flex gap-3 items-center mb-2 text-gray-600">
						<span className="text-xl font-bold text-primary-500">
							${product.price}
						</span>
					</div>
					<p className="text-gray-600 mb-4">{product.description}</p>
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
						<button className=" border border-primary-500 text-primary-500 py-2 px-4 rounded flex items-center justify-center">
							<FaHeart className="mr-2" /> 0
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
