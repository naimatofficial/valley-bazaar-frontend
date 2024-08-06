import { BrandHeader } from "../../components/Brands/BrandHeader";
import FilterSidebar from "../../components/Sort/FilterSidebar";
import Loader from "../../components/Loader";
import { ProductCard } from "../../components/Product/ProductCard";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";
import { useSearchParams } from "react-router-dom";

export const ProductsPage = () => {
	const [searchParams] = useSearchParams();
	// Extract query parameters from URL

	let filters = {};
	for (let [param, value] of searchParams.entries()) {
		filters[param] = value;
		if (param === "discount") {
			filters = {
				sort: "discount",
			};
		}

		if (param === "featured") {
			filters = {
				isFeatured: true,
			};
		}
	}

	console.log(filters);

	// Fetch products based on query parameters
	const { data: products, isLoading } = useGetProductsQuery(filters, {
		skip: !filters,
	});

	return isLoading ? (
		<Loader />
	) : products && products.doc && products?.doc.length ? (
		<>
			<div className="mt-4 w-full mx-auto py-4">
				<BrandHeader filters={filters} products={products} />
				<div className="flex justify-between items-start gap-4 my-4">
					<FilterSidebar />
					<div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 transition-all ease-in duration-300">
						{products?.doc?.map((product, index) => (
							<ProductCard key={index} {...product} />
						))}
					</div>
				</div>
			</div>
		</>
	) : (
		<p className="text-center p-12">Products not found!</p>
	);
};
export default ProductsPage;
