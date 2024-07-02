/* eslint-disable react/prop-types */
import ProductCarousel from "../shared/ProductCarousel";
import FlatCard from "../shared/FlatCard";
import { ProductCard } from "./ProductCard";
import CategoryCarousel from "../shared/CategoryCarousel";

const ProductsCategory = ({ products }) => {
	console.log(products);
	return (
		<div>
			<div className="products-container">
				<h2 className="text-2xl font-bold mb-4 text-gray-900">New Arrivals</h2>
				<ProductCarousel
					data={products}
					component={FlatCard}
					largeDesktopLimit={4}
					desktopLimit={3}
				/>
			</div>
			<CategoryCarousel
				title={"HOME, PET & APPLIANCES"}
				data={products}
				component={ProductCard}
			/>
			<CategoryCarousel
				title={"	PHONES & TELECOM"}
				data={products}
				component={ProductCard}
			/>
			<CategoryCarousel
				title={"BEAUTY, HEALTH & HAIR"}
				data={products}
				component={ProductCard}
			/>
			<CategoryCarousel
				title={"JEWELRY & WATCHES"}
				data={products}
				component={ProductCard}
			/>
			<CategoryCarousel
				title={"EBOOK"}
				data={products}
				component={ProductCard}
			/>
			<CategoryCarousel
				title={"WOMEN FASHION"}
				data={products}
				component={ProductCard}
			/>
			<CategoryCarousel
				title={"	OUTDOOR FUN & SPORTS"}
				data={products}
				component={ProductCard}
			/>
		</div>
	);
};

export default ProductsCategory;
