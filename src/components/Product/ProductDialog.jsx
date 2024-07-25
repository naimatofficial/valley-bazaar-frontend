/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import ProductQuickView from "./ProductQuickView";

const ProductDialog = ({ productId, open, onClose }) => {
	return (
		<Dialog open={open} handler={onClose} size="xl">
			<ProductQuickView productId={productId} onClose={onClose} />
		</Dialog>
	);
};

export default ProductDialog;
