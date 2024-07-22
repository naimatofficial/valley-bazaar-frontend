/* eslint-disable react/prop-types */
import ProductCarousel from "../shared/ProductCarousel";
import FlatCard from "../shared/FlatCard";
import { ProductCard } from "./ProductCard";
import CategoryCarousel from "../shared/CategoryCarousel";
import Loader from "../Loader";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import { useGetCategoriesQuery } from "../../redux/slices/categoriesApiSlice";

const ProductsCategory = () => {
	const { data: categories, isLoading: isCategoriesLoading } =
		useGetCategoriesQuery({});

	// const { data: arrivalProducts } = useGetProductsQuery({newArrival=true});

	if (isCategoriesLoading) {
		return <Loader />;
	}

	return (
		<div>
			{/* {arrivalProducts && arrivalProducts?.doc && (
				<div className="products-container">
					<h2 className="text-2xl font-bold mb-4 text-gray-900">
						New Arrivals
					</h2>
					<ProductCarousel
						data={arrivalProducts?.docs}
						component={FlatCard}
						largeDesktopLimit={4}
						desktopLimit={3}
					/>
				</div>
			)} */}

			{categories?.data &&
				categories?.data?.map((category) => {
					return (
						<CategoryCarousel
							key={category._id}
							category={category}
							component={ProductCard}
						/>
					);
				})}
		</div>
	);
};

export default ProductsCategory;
