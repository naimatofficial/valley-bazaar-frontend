/* eslint-disable react/prop-types */
const BrandItem = ({ brand }) => {
	return (
		<div className="rounded-full w-24 h-24 border border-gray-300 p-1 cursor-pointer">
			<img
				src={brand.image}
				alt={brand.name}
				className="object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
			/>
		</div>
	);
};

export default BrandItem;
