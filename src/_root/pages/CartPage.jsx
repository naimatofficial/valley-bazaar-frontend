import { useSelector } from "react-redux";
import CartSummary from "../../components/Cart/CartSummery";
import ShoppingCart from "../../components/Cart/ShoppingCart";

const CartPage = () => {
	const cart = useSelector((state) => state.cart);

	return (
		<div>
			<div className="flex justify-between flex-col lg:flex-row gap-4 items-start w-full">
				<ShoppingCart />
				<CartSummary cart={cart} link="/checkout-details" />
			</div>
		</div>
	);
};

export default CartPage;
