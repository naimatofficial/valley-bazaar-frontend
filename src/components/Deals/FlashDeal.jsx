/* eslint-disable react/prop-types */
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductCard } from "../Product/ProductCard";
import Timer from "./../shared/Timer";
import { useEffect, useState } from "react";
import axios from "axios";

const FlashDeal = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const { data } = await axios.get(
				"https://fakestoreapi.com/products?limit=3"
			);

			setProducts(data);
		};

		getProducts();
	}, []);
	return (
		<div className="bg-primary-100 shadow-md shadow-primary-100 p-3 flex justify-between items-center my-10">
			<div className="p-4">
				<div className="flex justify-between items-center mb-0">
					<div className="flex flex-col gap-4 text-primary-400">
						<h2 className="text-2xl font-bold text-current uppercase">
							Flash Deal
						</h2>
						<p className="text-lg font-medium text-current">
							Hurry Up ! The offer is limited. Grab while it lasts
						</p>
						<Timer />
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Link to="/featured-deals" className="view-box">
					View All
					<span>
						<FaAngleRight className="text-lg" />
					</span>
				</Link>
				<div className="flex-grow flex justify-between items-center gap-2">
					{products?.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div>
			</div>
		</div>
	);
};

export default FlashDeal;
