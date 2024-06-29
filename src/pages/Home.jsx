import { useEffect, useState } from "react";
import Header from "../components/Header";
import FeatureProducts from "../components/Product/FeatureProducts";
import axios from "axios";

// images
import PromoSaleImage from "../assets/banner/promo-sale.webp";
import Categories from "../components/Categories";
import FeaturedDeal from "../components/Deals/FeaturedDeal";
import LatestProducts from "../components/Product/LatestProducts";
import DealOfTheDay from "../components/Deals/DealOfTheDay";
import ProductsCategory from "../components/Product/ProductsCategory";

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get(
				"https://fakestoreapi.com/products?limit=6"
			);

			setProducts(data);
		};

		getProducts();
	}, []);

	return (
		<main className="mx-auto w-[85%] p-4">
			<Header />
			{/* Feature Products Section */}
			<section className="py-4 mb-4">
				<FeatureProducts products={products} />
			</section>

			{/* Categories Section */}
			<section>
				<Categories />
			</section>

			{/* Featured Deal */}
			<section className="py-4">
				<FeaturedDeal products={products} />
			</section>

			{/* Deal Offer Section */}
			<section className="py-4 mb-4">
				<img
					src={PromoSaleImage}
					alt="promo sale banner"
					className="rounded-lg"
				/>
			</section>

			<section className="py-4 mb-4 flex justify-between items-start gap-4">
				<DealOfTheDay
					imageUrl={"/src/assets/categories/laptop.png"}
					title={"Laptop"}
					oldPrice={184.0}
					newPrice={150.0}
				/>
				<LatestProducts products={products} />
			</section>

			{/* Banner Sale Section */}
			<section className="py-4">
				<div className="flex-center gap-4 w-full">
					<img
						src={"/src/assets/banner/mega-sale.webp"}
						alt="mega sale"
						className="w-1/2 rounded-lg"
					/>
					<img
						src={"/src/assets/banner/super-sale.webp"}
						alt="mega sale"
						className="w-1/2 rounded-lg"
					/>
				</div>
			</section>

			{/* Arrivals Section */}
			<section className="py-4">
				<ProductsCategory products={products} />
			</section>

			<section></section>
		</main>
	);
};

export default Home;
