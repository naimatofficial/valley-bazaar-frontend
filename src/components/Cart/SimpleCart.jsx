// import { useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md"; // Importing MdAddShoppingCart

function ShoppingCart() {
	// const [cartItems, setCartItems] = useState([]);

	// const addItemToCart = (item) => {
	//   setCartItems((prevItems) => [...prevItems, item]);
	// };

	// const removeItemFromCart = (indexToRemove) => {
	//   setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
	// };

	// const calculateTotal = () => {
	//   return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
	// };

	return (
		<>
			<div className="flex flex-row w-96 h-[8vh] items-center bg-primary-100 p-6 m-3 rounded-lg ">
				<div className="flex items-center justify-center">
					<MdAddShoppingCart className="h-8 w-8 text-gray-800" />
				</div>
				<h2 className=" ml-3 text-center text-gray-800">Shopping Cart</h2>
			</div>
		</>
	);
}

export default ShoppingCart;
