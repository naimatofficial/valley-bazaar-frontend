/* eslint-disable react/prop-types */
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCarousel from "../shared/ProductCarousel";
import Card from "../shared/Card";

const FeaturedDeal = ({ products }) => {
	return (
		<div className="bg-green-100 shadow-md p-2">
			<div className="p-4">
				<div className="flex justify-between items-center mb-0">
					<h2 className="text-xl font-bold text-gray-900">Featured Deal</h2>
					<Link
						to="/featured-deals"
						className="flex justify-end p-3 items-center gap-2 text-green-500"
					>
						View All
						<span>
							<FaAngleRight className="text-lg text-green-500" />
						</span>
					</Link>
				</div>
				<p className="text-lg font-medium text-gray-600">
					See the latest deals and exciting new offers!
				</p>
			</div>

			<ProductCarousel
				data={products}
				component={Card}
				largeDesktopLimit={4}
				desktopLimit={3}
			/>
		</div>
	);
};

export default FeaturedDeal;
