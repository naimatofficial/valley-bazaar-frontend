/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import ProductDetails from "./ProductDetails"; // Adjust the import path as needed
import { useGetProductDetailsQuery } from "../../redux/slices/productsApiSlice";
import Loader from "../Loader";

const ProductDialog = ({ productId, open, onClose }) => {
	const { data: product, isLoading } = useGetProductDetailsQuery(productId);

	return isLoading ? (
		<Loader />
	) : product ? (
		<Dialog open={open} handler={onClose} size="xl">
			<ProductDetails product={product} onClose={onClose} />
		</Dialog>
	) : (
		<p> Product details not found!</p>
	);
};

export default ProductDialog;
