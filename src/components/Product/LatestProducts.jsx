import { useGetLatestProductsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";
import { ProductCard } from "./ProductCard";

/* eslint-disable react/prop-types */
const LatestProducts = () => {
	const { data: products, isLoading } = useGetLatestProductsQuery({});

	return isLoading ? (
		<Loader />
	) : products ? (
		<div className="bg-white px-4">
			<h3 className="text-2xl font-bold mb-4">Latest Products</h3>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-2">
				{products?.map((product, index) => {
					if (index <= 7) return <ProductCard key={index} {...product} />;
				})}
			</div>
		</div>
	) : (
		<p>Latest products not found!</p>
	);
};

export default LatestProducts;
