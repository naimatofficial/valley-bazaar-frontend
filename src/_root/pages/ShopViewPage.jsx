import ShopBanner from "../../components/Banners/ShopBanner";
import { ProductCard } from "../../components/Product/ProductCard";
import SearchSort from "../../components/Sort/SerachSort";

import Loader from "../../components/Loader";
import { CategorySidebar } from "./../../components/Seller/CategorySideBar";
import useFetchProducts from "../../hooks/useFetchProducts";

const ShopViewPage = () => {
	const { products, loading } = useFetchProducts(
		"https://fakestoreapi.com/products"
	);

	if (loading) {
		return <Loader />;
	}
	return (
		<div className=" ">
			<ShopBanner />
			<SearchSort />
			<div className="flex justify-between items-center  max-w-7xl mx-auto">
				<div className="w-1/4  border border-gray-100">
					<CategorySidebar />
				</div>
				<div className="flex-1">
					{products?.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ShopViewPage;
