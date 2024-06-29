import { useEffect, useState } from "react";
import Header from "../components/Header";
import FeatureProducts from "../components/Product/FeatureProducts";
import axios from "axios";

// images
import PromoSaleImage from "../assets/banner/promo-sale.webp";
import Categories from "../components/Categories";
import FeaturedDeal from "../components/Deals/FeaturedDeal";

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
			<section>
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
		</main>
	);
};

export default Home;
