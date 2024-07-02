import BrandList from "../../components/Brands/BrandList";
import { brands } from "../../utils";

const BrandsPage = () => {
	return (
		<div className="">
			<div className="bg-green-50 p-8 rounded-lg mb-4">
				<h2 className="text-2xl uppercase font-bold text-green-500">
					ALL Brands
				</h2>
				<p className="text-base text-green-500">
					Find your favourite brands and products
				</p>
			</div>
			<div className="p-4">
				<BrandList brands={brands} />
			</div>
		</div>
	);
};

export default BrandsPage;
