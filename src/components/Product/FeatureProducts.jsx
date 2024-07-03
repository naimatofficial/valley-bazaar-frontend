/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ProductCarousel from "../shared/ProductCarousel";
import { FaAngleRight } from "react-icons/fa";
import { ProductCard } from "./ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";
import Loader from "../Loader";

const FeatureProducts = () => {
	const { products, loading } = useFetchProducts(
		"https://fakestoreapi.com/products?sort=desc"
	);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="bg-white shadow-md rounded-lg p-4">
			<h2 className="text-2xl font-bold mb-4 text-center text-primary-500">
				Featured Products
			</h2>
			<Link to="/products" className="view-box">
				View All
				<span>
					<FaAngleRight className="text-lg" />
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
