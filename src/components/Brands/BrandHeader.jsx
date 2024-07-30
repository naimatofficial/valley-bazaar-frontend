/* eslint-disable react/prop-types */
import { TbSortAscending2 } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";

export const BrandHeader = ({ filters }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	// Determine the title based on query parameters

	const handleFilterChange = (e) => {
		const { name, value } = e.target;
		searchParams.set(name, value);
		filters = {
			name: value,
		};
		setSearchParams(searchParams);
	};

	console.log(searchParams);

	const getTitle = () => {
		if (filters.brand) {
			return `Brand Products (${filters.brand})`;
		} else if (filters.category) {
			return `Category Products (${filters.category})`;
		} else if (filters.sort) {
			if (filters.sort === "featured") {
				return "Featured Products";
			} else if (filters.sort === "discount") {
				return "Discount Products";
			}
		}
		return "All Products";
	};

	const title = getTitle();
	return (
		<div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center w-full">
			<div>
				<h2 className="text-xl font-semibold">{title}</h2>
				<p className="text-gray-500">3 Items found</p>
			</div>
			<div>
				<div className="flex items-center space-x-2 border-2 border-gray-200  px-2 rounded-lg hover:shadow-lg">
					<TbSortAscending2 className="text-gray-600" />

					<label className="text-gray-700">Sort by:</label>
					<select
						className=" pl-4 pr-10 py-2 px-2 focus:outline-none"
						value={searchParams.get("sort") || ""}
						onChange={handleFilterChange}
						name="sort"
					>
						<option value={"latest"}>Latest</option>
						<option value={"popular"}>Popular</option>
						<option value={"price"}>Price: Low to High</option>
						<option value={"-price"}>Price: High to Low</option>
					</select>
				</div>
			</div>
		</div>
	);
};
