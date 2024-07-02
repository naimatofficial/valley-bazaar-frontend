import "tailwindcss/tailwind.css";
import ProductCarousel from "../shared/ProductCarousel";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SellerCard from "./SellerCard";

const sellers = [
	{
		id: 1,
		name: "Electronics",
		rating: 0.0,
		reviews: 0,
		products: 6,
		imageUrl:
			"https://6valley.6amtech.com/storage/app/public/shop/2023-06-13-64883892c6c11.png",
		banner:
			"https://6valley.6amtech.com/storage/app/public/shop/banner/2023-06-14-648870b2eec5b.png",
	},
	{
		id: 2,
		name: "Country Fair",
		rating: 0.0,
		reviews: 0,
		products: 3,
		imageUrl:
			"https://6valley.6amtech.com/storage/app/public/shop/2023-06-13-64883892c6c11.png",
		banner:
			"https://6valley.6amtech.com/storage/app/public/shop/banner/2023-06-14-648870b2eec5b.png",
	},
	{
		id: 3,
		name: "Fashion Store",
		rating: 0.0,
		reviews: 0,
		products: 5,
		imageUrl:
			"https://6valley.6amtech.com/storage/app/public/shop/2023-06-13-64883892c6c11.png",
		banner:
			"https://6valley.6amtech.com/storage/app/public/shop/banner/2023-06-14-648870b2eec5b.png",
	},

	{
		id: 4,
		name: "Super Market",
		rating: 0.0,
		reviews: 0,
		products: 8,
		imageUrl:
			"https://6valley.6amtech.com/storage/app/public/shop/2023-06-13-64883892c6c11.png",
		banner:
			"https://6valley.6amtech.com/storage/app/public/shop/banner/2023-06-14-648870b2eec5b.png",
	},
];

const TopSeller = () => (
	<div className="bg-white shadow-md rounded-lg p-4">
		<div className="flex justify-between items-center">
			<h2 className="text-2xl font-bold mb-4">Top Sellers</h2>
			<Link
				to="/sellers"
				className="flex justify-end p-3 items-center gap-2 text-green-700"
			>
				View All
				<span>
					<FaAngleRight className="text-lg text-green-500" />
				</span>
			</Link>
		</div>

		<ProductCarousel
			data={sellers}
			component={SellerCard}
			largeDesktopLimit={4}
			desktopLimit={3}
		/>
	</div>
);

export default TopSeller;
