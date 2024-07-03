import { Outlet } from "react-router-dom";
import Checkout from "../../components/Checkout/Checkout";
import CheckoutSummary from "./../../components/Checkout/CheckoutSummery";

const CheckoutPage = () => {
	return (
		<div>
			<Checkout />
			<div className="flex justify-between items-start">
				<Outlet />
				<CheckoutSummary />
			</div>
		</div>
	);
};

export default CheckoutPage;
