import BrandList from "../../components/Brands/BrandList";
import { brands } from "../../utils";

const BrandsPage = () => {
	return (
		<div className="p-8">
			<div>
				<h2>Brands</h2>
			</div>
			<div>
				<BrandList brands={brands} />
			</div>
		</div>
	);
};

export default BrandsPage;
