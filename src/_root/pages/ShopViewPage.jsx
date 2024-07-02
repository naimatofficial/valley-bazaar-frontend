// import React from "react";
import { useEffect, useState } from "react";
import ShopBanner from "../../components/Banners/ShopBanner";
import { ProductCard } from "../../components/Product/ProductCard";
import SearchSort from "../../components/Sort/SerachSort";

import axios from "axios";
import Loader from "../../components/Loader";
import { CategorySidebar } from "./../../components/Seller/CategorySideBar";

const ShopViewPage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get(
				"https://fakestoreapi.com/products?limit=8"
			);

			setProducts(data);
		};

		getProducts();
	}, []);

	if (!products) {
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
