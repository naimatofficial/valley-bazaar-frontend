import SellerCard from "../../components/Seller/SellerCard";
import { vendors } from "../../utils";

const VendorsPage = () => {
	return (
		<div>
			<div className="bg-green-50 p-8 rounded-lg flex justify-between items-center mb-4">
				<div>
					<h2 className="text-2xl uppercase font-bold text-green-500">
						ALL STORES
					</h2>
					<p className="text-base text-green-500">
						Find your desired stores and shop your favourite products
					</p>
				</div>
				<div className="flex items-center border border-gray-300 rounded-md">
					<input
						type="text"
						className="flex-grow p-2 border outline-none focus:border-green-200"
						placeholder="Search Store"
					/>
					<button className="py-3 px-6 bg-green-50 rounded-r-md">Serach</button>
				</div>
			</div>
			<div className="max-w-6xl mx-auto py-4 grid grid-cols-4 gap-4">
				{vendors.map((item, index) => (
					<SellerCard key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default VendorsPage;
