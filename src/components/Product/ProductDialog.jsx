/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import ProductDetails from "./ProductDetails"; // Adjust the import path as needed

const ProductDialog = ({ productId, open, onClose }) => {
	return (
		<Dialog open={open} handler={onClose} size="xl">
			<ProductDetails productId={productId} onClose={onClose} />
		</Dialog>
	);
};

export default ProductDialog;
