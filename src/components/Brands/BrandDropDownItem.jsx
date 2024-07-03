import { Link } from "react-router-dom";

const brands = [
	{ name: "Digital Product", count: 3 },
	{ name: "Estha dot", count: 4 },
	{ name: "S.Cube", count: 6 },
	{ name: "Fashion", count: 3 },
	{ name: "JK", count: 7 },
	{ name: "Waltro", count: 3 },
	{ name: "Ohoenix", count: 6 },
	{ name: "Estro", count: 3 },
	{ name: "Triangle", count: 17 },
	{ name: "Agron", count: 1 },
	{ name: "i Bird", count: 8 },
];

const BrandDropDownItem = () => {
	return (
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
	);
};

export default BrandDropDownItem;
