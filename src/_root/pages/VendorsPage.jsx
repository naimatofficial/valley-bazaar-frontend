import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import SellerCard from "../../components/Seller/SellerCard";
import { useGetVendorsQuery } from "../../redux/slices/vendorsApiSlice";
import StoreList from "../../components/Seller/StoreList";

const VendorsPage = () => {
	const { data: sellers, isLoading } = useGetVendorsQuery({});

	const [filteredSellers, setFilteredSellers] = useState([]);
	const [keywords, setKeywords] = useState("");

	console.log(sellers);

	useEffect(() => {
		if (sellers) {
			setFilteredSellers(sellers);
		}
	}, [sellers]);

	const handleInputChange = (e) => {
		const keywords = e.target.value;
		setKeywords(keywords);

		const filteredItems = sellers.filter((seller) =>
			seller.shopName.toLowerCase().includes(keywords.toLowerCase())
		);

		setFilteredSellers(filteredItems);
	};

	console.log(filteredSellers);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div>
			<div className="bg-primary-100 p-4 lg:p-8 rounded-lg flex lg:flex-row flex-col gap-2 justify-between items-center mb-4">
				<div>
					<h2 className="text-2xl uppercase font-bold text-primary-400">
						ALL STORES
					</h2>
					<p className="text-base text-primary-400">
						Find your desired stores and shop your favourite products
					</p>
				</div>
				<div className="flex items-center">
					<input
						type="text"
						className="flex-grow p-2 border outline-none focus:border-primary-100 rounded rounded-r-none"
						placeholder="Search Store"
						value={keywords}
						onChange={handleInputChange}
					/>
					{/* <button className="p-2 bg-primary-400 text-white rounded rounded-l-none outline-none border-none">
						Serach
					</button> */}
				</div>
			</div>
			{sellers ? (
				<div className="">
					{filteredSellers?.length ? (
						<StoreList sellers={filteredSellers} />
					) : (
						<p className="w-full bg-red-300">{`This Store "${keywords}" not found!.. Please try another keywords`}</p>
					)}
				</div>
			) : (
				<p>Stores not found!</p>
			)}
		</div>
	);
};

export default VendorsPage;
