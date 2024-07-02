/* eslint-disable react/prop-types */
import BrandItem from "./BrandItem";

const BrandList = ({ brands, limit = 30 }) => {
	return (
		<div className="flex-center flex-wrap gap-4">
			{brands?.map((item, index) => {
				if (index !== limit) return <BrandItem key={index} brand={item} />;
			})}
		</div>
	);
};

export default BrandList;
