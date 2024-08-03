import { useSelector } from "react-redux";
import CartSummary from "../../components/Cart/CartSummery";
import PaymentMethod from "../../components/Checkout/PaymentMethod";

const CheckoutPaymentPage = () => {
	const cart = useSelector((state) => state.cart);
	return (
		<div className="flex justify-between flex-col lg:flex-row gap-4 items-start w-full">
			<PaymentMethod />
			<CartSummary cart={cart} link="/order-confirmation" />
		</div>
	);
};

export default CheckoutPaymentPage;
