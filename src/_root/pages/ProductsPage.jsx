import { BrandHeader } from "../../components/Brands/BrandHeader";
import FilterSidebar from "../../components/Sort/FilterSidebar";
import useFetchProducts from "../../hooks/useFetchProducts";
import Loader from "../../components/Loader";
import { ProductCard } from "../../components/Product/ProductCard";
import { useGetProductsQuery } from "../../redux/slices/productsApiSlice";

export const ProductsPage = () => {
	const { data: products, isLoading } = useGetProductsQuery({});

	return isLoading ? (
		<Loader />
	) : products && products.docs ? (
		<>
			<div className="mt-4 p-4 max-w-7xl mx-auto py-4">
				<BrandHeader />
				<div className="flex justify-between items-start gap-4 my-4">
					<FilterSidebar />
					<div className="grid grid-cols-4 gap-2">
						{products?.docs?.map((product, index) => (
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
