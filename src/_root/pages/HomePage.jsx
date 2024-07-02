import { useEffect, useState } from "react";
import FeatureProducts from "../../components/Product/FeatureProducts";
import axios from "axios";

import Categories from "../../components/Categories";
import FeaturedDeal from "../../components/Deals/FeaturedDeal";
import LatestProducts from "../../components/Product/LatestProducts";
import DealOfTheDay from "../../components/Deals/DealOfTheDay";
import ProductsCategory from "../../components/Product/ProductsCategory";

// images
import PromoSaleImage from "../../assets/banner/promo-sale.webp";
import HeroSection from "../../components/shared/HeroSection";
import FlashDeal from "../../components/Deals/FlashDeal";
import BrandList from "../../components/Brands/BrandList";
import { FaAngleRight } from "react-icons/fa";
import { brands } from "../../utils";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import ServicesList from "../../components/Services/ServicesList";
import Contacts from "../../components/shared/Contacts";

const HomePage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get("https://fakestoreapi.com/products");

			setProducts(data);
		};

		getProducts();
	}, []);

	if (!products || !brands) {
		return <Loader />;
	}

	return (
		brands &&
		products && (
			<main className="mx-auto w-[85%] p-4">
				{/* Hero Section */}
				<HeroSection />

				{/* Flash Deal */}
				<FlashDeal products={products} />
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
						image={"/src/assets/categories/laptop.png"}
						title={"Laptop"}
						price={150.0}
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

				<div className="bg-white p-2">
					<div className="flex justify-between items-center p-4">
						<h2 className="text-2xl font-bold mb-4 text-gray-900">Brands</h2>
						<Link
							to="/brands"
							className="flex justify-end p-3 items-center gap-2 text-green-700"
						>
							View All
							<span>
								<FaAngleRight className="text-lg text-green-500" />
							</span>
						</Link>
					</div>
					<BrandList brands={brands} limit={10} />
				</div>

				{/* Arrivals Section */}
				<section className="py-4">
					<ProductsCategory products={products} />
				</section>

				<section>
					<ServicesList />
				</section>
			</main>
		)
	);
};

export default HomePage;
