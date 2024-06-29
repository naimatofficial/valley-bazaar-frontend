/* eslint-disable react/prop-types */
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
	return (
		<div className="flex-center">
			{categories?.map((item, index) => (
				<CategoryItem key={index} category={item} />
			))}
		</div>
	);
};

export default CategoryList;
