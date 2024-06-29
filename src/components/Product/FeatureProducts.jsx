/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ProductCarousel from "../shared/ProductCarousel";
import { FaAngleRight } from "react-icons/fa";
import { ProductCard } from "./ProductCard";

const FeatureProducts = ({ products }) => {
	return (
		<div className="bg-white shadow-md rounded-lg p-4">
			<h2 className="text-2xl font-bold mb-4 text-center text-green-500">
				Featured Products
			</h2>
			<Link
				to="/products"
				className="flex justify-end p-3 items-center gap-2 text-green-700"
			>
				View All
				<span>
					<FaAngleRight className="text-lg text-green-500" />
				</span>
			</Link>
			<ProductCarousel
				data={products}
				component={ProductCard}
				largeDesktopLimit={5}
				desktopLimit={4}
			/>
		</div>
	);
};

export default FeatureProducts;
