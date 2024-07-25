import { Link } from "react-router-dom";
import { useGetBrandsQuery } from "../../redux/slices/brandsApiSlice";
import Loader from "../Loader";

const BrandDropDownItem = () => {
	const { data: brands, isLoading } = useGetBrandsQuery({});

	return isLoading ? (
		<Loader />
	) : brands && brands.length ? (
		<div className="w-full mx-auto p-4 bg-white">
			<ul>
				{brands.map((brand, index) => (
					<li
						key={index}
						className="flex justify-between items-center py-2 border-b outline-none hover:text-primary-400 cursor-pointer"
					>
						<span>{brand.name}</span>
						<span className="text-gray-500">({brand.count})</span>
					</li>
				))}
			</ul>
			<div className="text-center mt-4">
				<Link
					to="/brands"
					className="text-primary-500 hover:text-primary-400 outline-none"
				>
					View more
				</Link>
			</div>
		</div>
	) : (
		<p>No brands found!</p>
	);
};

export default BrandDropDownItem;
