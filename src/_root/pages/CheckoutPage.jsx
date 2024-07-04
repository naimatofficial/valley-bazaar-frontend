import { Outlet } from "react-router-dom";
import Checkout from "../../components/Checkout/Checkout";

const CheckoutPage = () => {
	return (
		<div>
			<Checkout />
			<div className="flex justify-between items-start">
				<Outlet />
			</div>
		</div>
	);
};

export default CheckoutPage;
