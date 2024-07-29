import { useSelector } from "react-redux";
import CartSummary from "../../components/Cart/CartSummery";
import ShoppingCart from "../../components/Cart/ShoppingCart";

const CartPage = () => {
	const cart = useSelector((state) => state.cart);

	console.log(cart);
	return (
		<div>
			<div className="flex justify-between flex-col lg:flex-row gap-2 items-start w-full">
				<ShoppingCart />
				<CartSummary cart={cart} />
			</div>
		</div>
	);
};

export default CartPage;
