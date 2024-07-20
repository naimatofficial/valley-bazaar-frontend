/* eslint-disable react/prop-types */
import { useGetBrandsQuery } from "../../redux/slices/brandsApiSlice";
import Loader from "../Loader";
import BrandItem from "./BrandItem";

const BrandList = ({ limit = 30 }) => {
	const { data: brands, isLoading } = useGetBrandsQuery({});

	return isLoading ? (
		<Loader />
	) : brands && brands.length ? (
		<div className="flex-center flex-wrap gap-4">
			{brands && brands.length > 0 ? (
				brands.map((item, index) => {
					if (index <= limit) return <BrandItem key={index} brand={item} />;
				})
			) : (
				<p> Brands not found!</p>
			)}
		</div>
	) : (
		<p>Brands not found</p>
	);
};

export default BrandList;
