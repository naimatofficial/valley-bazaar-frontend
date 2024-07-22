/* eslint-disable react/prop-types */
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";
import ProductCarousel from "./ProductCarousel";

const CategoryCarousel = ({ category, component }) => {
	const { data: products, isLoading: isProductsLoading } = useGetProductsQuery(
		{
			category: category._id,
		},
		{ skip: !category._id }
	);

	return isProductsLoading ? (
		<Loader />
	) : products && products?.doc && products?.doc?.length ? (
		<div className="products-container">
			<h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">
				{category.name}
			</h2>
			<ProductCarousel
				data={products?.doc}
				component={component}
				largeDesktopLimit={5}
				desktopLimit={4}
			/>
		</div>
	) : null;
};

export default CategoryCarousel;
