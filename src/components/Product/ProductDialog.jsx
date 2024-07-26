/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import ProductQuickView from "./ProductQuickView";
import { useGetProductDetailsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";

const ProductDialog = ({ productId, open, onClose }) => {
	const { data: product, isLoading } = useGetProductDetailsQuery(productId);

	console.log(product);

	return isLoading ? (
		<div className="z-50">
			<Loader />
		</div>
	) : product ? (
		<Dialog open={open} handler={onClose} size="xl">
			<ProductQuickView product={product} onClose={onClose} />
		</Dialog>
	) : (
		<p>Product details not found!</p>
	);
};

export default ProductDialog;
