/* eslint-disable react/prop-types */
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
	return (
		<div className="flex-center">
			{categories && categories.length ? (
				categories?.map((item, index) => (
					<CategoryItem key={index} category={item} />
				))
			) : (
				<p>Categories not found!</p>
			)}
		</div>
	);
};

export default CategoryList;
