import ShopBanner from "../../components/Banners/ShopBanner";
import SearchSort from "../../components/Sort/SerachSort";

import Loader from "../../components/Loader";
import { useGetVendorDetailsQuery } from "../../redux/slices/vendorsApiSlice";
import { useParams } from "react-router-dom";
import { CategorySidebar } from "./../../components/Header/CategorySideBar";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import { ProductCard } from "../../components/Product/ProductCard";

const ShopViewPage = () => {
	const { vendorId } = useParams();

	const { data: vendor, isLoading } = useGetVendorDetailsQuery(vendorId);

	const { data: vendorProducts, isLoading: isVendorProductsLoading } =
		useGetProductsQuery(
			{
				userId: vendor?._id,
				limit: 2,
			},
			{ skip: !vendor?._id }
		);

	console.log(vendorProducts);

	return isLoading ? (
		<Loader />
	) : vendor && vendor.firstName ? (
		<div className="">
			<ShopBanner vendor={vendor} />
			<SearchSort />
			<div className="flex justify-between gap-4 items-center w-full">
				<div className="w-1/4  border border-gray-100">
					<CategorySidebar />
				</div>
				<div className="w-full grid grid-cols-4 gap-2 p-4">
					{isVendorProductsLoading ? (
						<Loader />
					) : vendorProducts && vendorProducts?.doc?.length ? (
						vendorProducts?.doc?.map((product, index) => (
							<ProductCard key={index} {...product} />
						))
					) : (
						<p>Vendor products not found!</p>
					)}
				</div>
			</div>
		</div>
	) : (
		<p>Vendor details not found!</p>
	);
};

export default ShopViewPage;
