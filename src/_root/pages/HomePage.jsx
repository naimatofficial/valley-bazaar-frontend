import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

import FeatureProducts from "../../components/Product/FeatureProducts";
import Categories from "../../components/Categories";
import FeaturedDeal from "../../components/Deals/FeaturedDeal";
import LatestProducts from "../../components/Product/LatestProducts";
import DealOfTheDay from "../../components/Deals/DealOfTheDay";
import ProductsCategory from "../../components/Product/ProductsCategory";
import HeroSection from "../../components/shared/HeroSection";
import FlashDeal from "../../components/Deals/FlashDeal";
import BrandList from "../../components/Brands/BrandList";
import ServicesList from "../../components/Services/ServicesList";
import Loader from "./../../components/Loader";
import TopSeller from "../../components/Seller/TopSeller";
import StarProducts from "../../components/Product/StarProducts";

// images
import PromoSaleImage from "../../assets/banner/promo-sale.webp";
import MegaSaleBanner1 from "../../assets/banner/mega-sale.webp";
import MegaSaleBanner2 from "../../assets/banner/super-sale.webp";
import TopRatedIcon from "../../assets/top-rated.png";
import BestSellingIcon from "../../assets/best-sellings.png";
import {
	useGetProductsQuery,
	useGetTopRatedProductsQuery,
} from "../../redux/slices/productsApiSlice";

const HomePage = () => {
	const { data: products, isLoading: productsLoading } = useGetProductsQuery(
		{}
	);
	const { data: topProducts } = useGetTopRatedProductsQuery({});

	return productsLoading ? (
		<div className="h-screen w-full mx-auto">
			<Loader />
		</div>
	) : products && products?.docs ? (
		<main>
			{/* Hero Section */}
			<HeroSection />

			{/* Flash Deal */}
			<FlashDeal products={products.docs} />

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
				<FeaturedDeal products={products.docs} />
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
					image={"./src/assets/categories/laptop.png"}
					title={"Laptop"}
					price={150.0}
				/>
				<LatestProducts />
			</section>

			{/* Banner Sale Section */}
			<section className="py-4">
				<div className="flex-center gap-4 w-full">
					<img
						src={MegaSaleBanner1}
						alt="mega sale"
						className="w-1/2 rounded-lg"
					/>
					<img
						src={MegaSaleBanner2}
						alt="mega sale"
						className="w-1/2 rounded-lg"
					/>
				</div>
			</section>

			<div className="flex justify-between items-center gap-4 my-4">
				<StarProducts
					icon={BestSellingIcon}
					title={"Best sellings"}
					products={topProducts}
				/>
				<StarProducts
					icon={TopRatedIcon}
					title={"Top rated"}
					products={topProducts}
				/>
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
				<BrandList limit={10} />
			</div>

			<section className="py-4">
				<ProductsCategory />
			</section>

			<section>
				<ServicesList />
			</section>
		</main>
	) : (
		<p>🚫Something went wrong, Please try again!</p>
	);
};

export default HomePage;
