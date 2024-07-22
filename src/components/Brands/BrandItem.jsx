import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandItem = ({ brand }) => {
	return (
		<Link
			to={`/brands/${brand._id}`}
			className="rounded-full w-24 h-24 border border-gray-300 p-1 cursor-pointer"
		>
			<img
				src={`http://localhost:3000/${brand.thumbnail}`}
				alt={brand.name}
				className="object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
			/>
		</Link>
	);
};

export default BrandItem;
