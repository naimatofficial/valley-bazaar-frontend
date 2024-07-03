import FeatureProducts from "../../components/Product/FeatureProducts";

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
import ServicesList from "../../components/Services/ServicesList";
import Loader from "./../../components/Loader";
import TopSeller from "../../components/Seller/TopSeller";
import useFetchProducts from "../../hooks/useFetchProducts";
import StarProducts from "../../components/Product/StarProducts";

import TopRatedIcon from "../../assets/top-rated.png";
import BestSellingIcon from "../../assets/best-sellings.png";

const HomePage = () => {
	const { products, loading, error } = useFetchProducts(
		"https://fakestoreapi.com/products"
	);

	if (loading) {
		return (
			<div className="h-screen w-full mx-auto">
				<Loader />
			</div>
		);
	}

	return error ? (
		<p>Products not found!</p>
	) : (
		products && (
			<main>
				{/* Hero Section */}
				<HeroSection />

				{/* Flash Deal */}
				<FlashDeal products={products} />

				{/* Feature Products Section */}
				<section className="py-4 mb-4">
					<FeatureProducts />
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

				{/* Top Sellers */}
				<TopSeller />

				<section className="py-4 mb-4 flex justify-between items-start gap-4">
					<DealOfTheDay
						image={"/src/assets/categories/laptop.png"}
						title={"Laptop"}
						price={150.0}
					/>
					<LatestProducts />
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

				<div className="flex justify-between items-center gap-4 my-4">
					<StarProducts icon={BestSellingIcon} title={"Best sellings"} />
					<StarProducts icon={TopRatedIcon} title={"Top rated"} />
				</div>

				<div className="bg-white p-2">
					<div className="flex justify-between items-center p-4">
						<h2 className="text-2xl font-bold mb-4 text-gray-900">Brands</h2>
						<Link to="/brands" className="view-box">
							View All
							<span>
								<FaAngleRight className="text-lg" />
							</span>
						</Link>
					</div>
					<BrandList brands={brands} limit={10} />
				</div>

				<section className="py-4">
					<ProductsCategory />
				</section>

				<section>
					<ServicesList />
				</section>
			</main>
		)
	);
};

export default HomePage;
