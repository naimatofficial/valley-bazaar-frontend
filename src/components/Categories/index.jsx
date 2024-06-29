import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
import categories from "../../utils";

const Categories = () => {
	return (
		<div className="bg-white shadow-md p-4">
			<div className="flex justify-between items-center p-4">
				<h2 className="text-xl font-bold mb-4 text-gray-900">Categories</h2>
				<Link
					to="/categories"
					className="flex justify-end p-3 items-center gap-2 text-green-700"
				>
					View All
					<span>
						<FaAngleRight className="text-lg text-green-500" />
					</span>
				</Link>
			</div>
			<CategoryList categories={categories} />
		</div>
	);
};

export default Categories;
