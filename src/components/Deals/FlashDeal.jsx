/* eslint-disable react/prop-types */
// src/components/FlashDealSection.jsx
import { Link } from "react-router-dom";
import { ProductCard } from "../Product/ProductCard";
import FlashDealTimer from "./FlashDealTimer";
import { FaAngleRight } from "react-icons/fa";
import Loader from "../Loader";
import { useGetFlashDealsQuery } from "../../redux/slices/productsApiSlice";

// const products = [
// 	{
// 		name: "Exclusive & Stylish Suit",
// 		price: 450.0,
// 		oldPrice: 500.0,
// 		discount: 50.0,
// 		thumbnail: "https://via.placeholder.com/150",
// 	},
// 	{
// 		name: "Exclusive & Stylish Suit",
// 		price: 450.0,
// 		oldPrice: 500.0,
// 		discount: 50.0,
// 		thumbnail: "https://via.placeholder.com/150",
// 	},
// 	{
// 		name: "Exclusive & Stylish Suit",
// 		price: 450.0,
// 		oldPrice: 500.0,
// 		discount: 50.0,
// 		thumbnail: "https://via.placeholder.com/150",
// 	},
// 	// Add more product objects
// ];

const FlashDeal = ({ products }) => {
	const { data, isLoading } = useGetFlashDealsQuery({});

	const deal = data?.filter((item) => item.publish === true);

	const endDate =
		deal?.[0].endDate ||
		new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000); // Example date

	return isLoading ? (
		<Loader />
	) : data && data.length && products ? (
		<div className="p-6 w-full mx-auto bg-primary-100 flex lg:flex-row flex-col justify-between gap-8 items-start">
			<div className="flex flex-col items-center py-4">
				<div className="mb-8">
					<h2 className="lg:text-2xl md:text-xl text-lg font-bold text-primary-400">
						FLASH DEAL
					</h2>
					<p className="text-primary-400">
						Hurry Up! The offer is limited. Grab while it lasts
					</p>
				</div>
				<div className="p-2">
					<FlashDealTimer endDate={endDate} />
				</div>
			</div>

			<div className="mx-auto">
				<Link to="/products/flash-deals" className="view-box">
					View All
					<span>
						<FaAngleRight className="text-lg" />
					</span>
				</Link>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
					{products?.map((product, index) => {
						if (index <= 3) return <ProductCard key={index} {...product} />;
					})}
				</div>
			</div>
		</div>
	) : null;
};

export default FlashDeal;
