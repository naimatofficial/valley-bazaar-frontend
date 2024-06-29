/* eslint-disable react/prop-types */
import ProductCarousel from "../shared/ProductCarousel";
import FlatCard from "../shared/FlatCard";
import { ProductCard } from "./ProductCard";

const ProductsCategory = ({ products }) => {
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

			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					HOME, PET & APPLIANCES
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					PHONES & TELECOM
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					BEAUTY, HEALTH & HAIR
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					JEWELRY & WATCHES
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					EBOOK
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					WOMEN FASHION
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					OUTDOOR FUN & SPORTS
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
			<div className="products-container">
				<h2 className="text-xl font-bold mb-4 py-2 text-gray-900 uppercase">
					MEN FASHION
				</h2>
				<ProductCarousel
					data={products}
					component={ProductCard}
					largeDesktopLimit={6}
					desktopLimit={4}
				/>
			</div>
		</div>
	);
};

export default ProductsCategory;
