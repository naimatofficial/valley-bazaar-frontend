import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "../../assets/empty-cart.png";

const CartList = () => {
	const { cartItems } = useSelector((state) => state.cart);

	return (
		<div className="p-4">
			{cartItems && cartItems.length ? (
				cartItems.map((item) => <CartItem key={item._id} item={item} />)
			) : (
				<div className="flex justify-center items-center flex-col gap-2">
					<img
						src={EmptyCart}
						alt="empty cart"
						className="w-full h-80 object-contain"
					/>
					<p className="text-lg text-gray-800 font-semibold">
						Your Cart Is Empty!
					</p>
				</div>
			)}
		</div>
	);
};

export default CartList;
