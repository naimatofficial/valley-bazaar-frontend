import CategoryList from "../../components/Categories/CategoryList";
import Loader from "../../components/Loader";
import { useGetCategoriesQuery } from "../../redux/slices/categoriesApiSlice";

const CategoriesPage = () => {
	const { data: categories, isLoading } = useGetCategoriesQuery({});

	if (isLoading) {
		return <Loader />;
	}

	console.log(categories);

	return (
		categories?.data &&
		!isLoading && (
			<div className="">
				<div className="bg-primary-100 p-8 rounded-lg mb-4">
					<h2 className="text-2xl uppercase font-bold text-primary-400">
						ALL categories
					</h2>
					<p className="text-base text-primary-400">
						Find your favourite categories and products
					</p>
				</div>
				<div className="p-4">
					<CategoryList categories={categories?.data} />
				</div>
			</div>
		)
	);
};

export default CategoriesPage;
