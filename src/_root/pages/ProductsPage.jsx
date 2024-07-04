import { BrandHeader } from "../../components/Brands/BrandHeader";
import FilterSidebar from "../../components/Sort/FilterSidebar";
import useFetchProducts from "../../hooks/useFetchProducts";
import Loader from "../../components/Loader";
import { ProductCard } from "../../components/Product/ProductCard";

export const ProductsPage = () => {
	const { products, loading } = useFetchProducts(
		"https://fakestoreapi.com/products"
	);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<div className="mt-4 p-4 max-w-7xl mx-auto py-4">
				<BrandHeader />
				<div className="flex justify-between items-start gap-4 my-4">
					<FilterSidebar />
					<div className="grid grid-cols-4 gap-2">
						{products?.map((product, index) => (
							<ProductCard key={index} {...product} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default ProductsPage;
