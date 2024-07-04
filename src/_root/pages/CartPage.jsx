import CartSummary from "../../components/Cart/CartSummery";
import ShoppingCart from "../../components/Cart/ShoppingCart";

const CartPage = () => {
	return (
		<div>
			<div className="flex justify-between items-start">
				<ShoppingCart />
				<CartSummary />
			</div>
		</div>
	);
};

export default CartPage;
