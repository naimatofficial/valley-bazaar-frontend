/* eslint-disable react/prop-types */
import BrandItem from "./BrandItem";

import cartIcon from "./../../assets/brands/cart-icon.png";
import greenGood from "./../../assets/brands/green-good.png";
import greenLeave from "./../../assets/brands/green-leave.png";
import greenYellow from "./../../assets/brands/green-yellow.png";
import healthIcon from "./../../assets/brands/helath-icon.png";
import iLogo from "./../../assets/brands/i-logo.png";
import infine from "./../../assets/brands/infine.png";
import microIcon from "./../../assets/brands/micro-icon.png";
import people from "./../../assets/brands/people.png";
import pillar from "./../../assets/brands/pillar.png";
import wLogo from "./../../assets/brands/w-logo.png";

const brands = [
	{ name: "Mens", image: cartIcon },
	{ name: "Womens", image: greenGood },
	{ name: "Mobile", image: greenLeave },
	{ name: "Sports", image: greenYellow },
	{ name: "Electronics", image: healthIcon },
	{ name: "Electronics", image: cartIcon },
	{ name: "Electronics", image: iLogo },
	{ name: "Electronics", image: infine },
	{ name: "Electronics", image: microIcon },
	{ name: "Electronics", image: people },
	{ name: "Electronics", image: pillar },
	{ name: "Electronics", image: wLogo },
];

const BrandList = ({ limit = 30 }) => {
	return (
		<div className="flex-center flex-wrap gap-4">
			{brands?.map((item, index) => {
				if (index !== limit) return <BrandItem key={index} brand={item} />;
			})}
		</div>
	);
};

export default BrandList;
