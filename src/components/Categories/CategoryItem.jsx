/* eslint-disable react/prop-types */
const CategoryItem = ({ category }) => {
	return (
		<div className="flex-center flex-col gap-2 p-2 group cursor-pointer">
			<img
				src={category.logo}
				alt={category.name}
				className="w-24 h-24 rounded-full transition-transform duration-300 group-hover:scale-90"
			/>
			<p className=" text-base transition-colors duration-300 ease-out text-gray-800 group-hover:text-orange-500">
				{category.name}
			</p>
		</div>
	);
};

export default CategoryItem;
