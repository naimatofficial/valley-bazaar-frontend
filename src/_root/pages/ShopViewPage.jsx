import ShopBanner from "../../components/Banners/ShopBanner";
import { ProductCard } from "../../components/Product/ProductCard";
import SearchSort from "../../components/Sort/SerachSort";

import Loader from "../../components/Loader";
import { CategorySidebar } from "./../../components/Seller/CategorySideBar";
import { useGetVendorDetailsQuery } from "../../redux/slices/vendorsApiSlice";
import { useParams } from "react-router-dom";

const ShopViewPage = () => {
	const { vendorId } = useParams();

	const { data: vendor, isLoading } = useGetVendorDetailsQuery(vendorId);

	console.log(vendor);

	return isLoading ? (
		<Loader />
	) : vendor ? (
		<div className="">
			<ShopBanner vendor={vendor} />
			<SearchSort />
			<div className="flex justify-between items-center  max-w-7xl mx-auto">
				<div className="w-1/4  border border-gray-100">
					<CategorySidebar />
				</div>
				{/* <div className="flex-1">
					{products?.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div> */}
			</div>
		</div>
	) : (
		<p>Vendor details not found!</p>
	);
};

export default ShopViewPage;
