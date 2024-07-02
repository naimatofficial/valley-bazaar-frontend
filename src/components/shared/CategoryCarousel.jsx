/* eslint-disable react/prop-types */
import ProductCarousel from "./ProductCarousel";

const CategoryCarousel = ({ title, data, component }) => {
	return (
		<div className="products-container">
			<h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase">
				{title}
			</h2>
			<ProductCarousel
				data={data}
				component={component}
				largeDesktopLimit={5}
				desktopLimit={4}
			/>
		</div>
	);
};

export default CategoryCarousel;
