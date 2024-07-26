import CartList from "./CartList";

const ShoppingCart = () => {
	return (
		<div className="p-4 w-4/5 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
			<CartList />
		</div>
	);
};

export default ShoppingCart;
