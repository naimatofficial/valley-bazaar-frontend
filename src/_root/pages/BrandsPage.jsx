import BrandList from "../../components/Brands/BrandList";
import Loader from "../../components/Loader";
import { useGetBrandsQuery } from "../../redux/slices/brandsApiSlice";

const BrandsPage = () => {
	const { data: brands, isLoading } = useGetBrandsQuery({});

	if (isLoading) {
		return <Loader />;
	}

	return (
		brands &&
		!isLoading && (
			<div className="">
				<div className="bg-primary-100 p-8 rounded-lg mb-4">
					<h2 className="text-2xl uppercase font-bold text-primary-400">
						ALL Brands
					</h2>
					<p className="text-base text-primary-400">
						Find your favourite brands and products
					</p>
				</div>
				<div className="p-4">
					<BrandList brands={brands} />
				</div>
			</div>
		)
	);
};

export default BrandsPage;
