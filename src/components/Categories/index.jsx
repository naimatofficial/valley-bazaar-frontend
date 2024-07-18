import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

import mensImage from "./../../assets/categories/mens.png";
import womensImage from "./../../assets/categories/womens.png";
import mobileImage from "./../../assets/categories/mobile.png";
import sportsImage from "./../../assets/categories/sports.png";
import laptopImage from "./../../assets/categories/laptop.png";
import homeImage from "./../../assets/categories/home.png";
import jewImage from "./../../assets/categories/jew.png";
import eduImage from "./../../assets/categories/edu.png";
import kidsImage from "./../../assets/categories/kids.png";
import hairImage from "./../../assets/categories/hair.png";
import { useGetCategoriesQuery } from "../../redux/slices/categoriesApiSlice";
import Loader from "../Loader";

// const categories = [
// 	{ name: "Mens", image: mensImage },
// 	{ name: "Womens", image: womensImage },
// 	{ name: "Mobile", image: mobileImage },
// 	{ name: "Sports", image: sportsImage },
// 	{ name: "Electronics", image: laptopImage },
// 	{ name: "Home Appliances", image: homeImage },
// 	{ name: "Fashion", image: jewImage },
// 	{ name: "Books", image: eduImage },
// 	{ name: "Toys", image: kidsImage },
// 	{ name: "Beauty", image: hairImage },
// ];

const Categories = () => {
	const { data: categories, isLoading, error } = useGetCategoriesQuery({});

	if (isLoading) {
		return <Loader />;
	}

	return error ? (
		<p>data not found</p>
	) : (
		<div className="bg-white shadow-md p-4">
			<div className="flex justify-between items-center p-4">
				<h2 className="text-xl font-bold mb-4 text-gray-900">Categories</h2>
				<Link to="/categories" className="view-box">
					View All
					<span>
						<FaAngleRight className="text-lg " />
					</span>
				</Link>
			</div>
			<CategoryList categories={categories?.doc} />
		</div>
	);
};

export default Categories;
