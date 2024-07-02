/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";
import ProductDetails from "./ProductDetails"; // Adjust the import path as needed

const ProductDialog = ({ open, onClose }) => {
	const defaultProduct = {
		id: 234,
		title:
			"Essentials Women's Classic-Fit Short-Sleeve V-Neck T-Shirt, Multipacks",
		price: 250,
		description:
			" This versatile t-shirt is a classic wardrobe essential, perfect layered under your favorite jacket or cardigan, or wear on its own for casual, everyday style.",
		image: "https://m.media-amazon.com/images/I/617pwxxZpuL._AC_SX569_.jpg",
		rating: 4,
		thumbnails: [
			"https://m.media-amazon.com/images/I/617pwxxZpuL._AC_SX569_.jpg",
			"https://m.media-amazon.com/images/I/71qU2vnRWUL._AC_SX569_.jpg",
			"https://m.media-amazon.com/images/I/71zQ0Az6YBL._AC_SX569_.jpg",
			"https://m.media-amazon.com/images/I/81Abxty2dGL._AC_SX569_.jpg",
			"https://m.media-amazon.com/images/I/71hI0gQKheL._AC_SX569_.jpg",
		],
		quantity: 55,
		reviewsCount: 22,
	};
	return (
		<Dialog open={open} handler={onClose} size="xl">
			<ProductDetails product={defaultProduct} onClose={onClose} />
		</Dialog>
	);
};

export default ProductDialog;
