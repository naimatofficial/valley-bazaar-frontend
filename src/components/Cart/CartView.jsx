/* eslint-disable react/prop-types */
import { MdAddShoppingCart } from "react-icons/md"; // Importing MdAddShoppingCart
import CartList from "./CartList";

function CartView() {
	return (
		<>
			<div className="flex flex-row w-96 h-[8vh] items-center bg-primary-100 p-6 m-3 rounded-lg ">
				<div className="flex items-center justify-center">
					<MdAddShoppingCart className="h-8 w-8 text-gray-800" />
				</div>
				{/* <CartList /> */}
				<h2 className=" ml-3 text-center text-gray-800">Shopping Cart</h2>
			</div>
		</>
	);
}

export default CartView;
