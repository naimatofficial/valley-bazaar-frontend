/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import FlatCard from "../shared/FlatCard";
import { FaAngleRight } from "react-icons/fa";

const StarProducts = ({ icon, title, products }) => {
	return products ? (
		<div className="bg-white p-4 shadow-md  rounded-lg shadow-primary-100">
			<div className="flex justify-between items-center mx-2">
				<div className="flex justify-between items-center w-fit gap-2 mb-4">
					<img src={icon} alt="icon" className="w-10 h-10 object-contain" />
					<h3 className="text-xl font-bold">{title}</h3>
				</div>
				<Link to="/products" className="view-box">
					View All
					<span>
						<FaAngleRight className="text-lg" />
					</span>
				</Link>
			</div>

			<div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
				{products?.map((product, index) => (
					<FlatCard key={index} {...product} />
				))}
			</div>
		</div>
	) : null;
};

export default StarProducts;
