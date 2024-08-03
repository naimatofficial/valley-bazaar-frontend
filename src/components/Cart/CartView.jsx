/* eslint-disable react/prop-types */
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md"; // Importing MdAddShoppingCart
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

function CartView() {
	const initialCartItems = [
		{
			id: 1,
			name: "New Long Sleeve Formal Shirt",
			price: 717.99,
			quantity: 1,
			image:
				"https://pk-live-21.slatic.net/kf/S18355b86953c456bba30ae6109c090e93.jpg_750x750.jpg_.webp", // Replace with your image link
		},
		{
			id: 2,
			name: "Casual T-Shirt",
			price: 29.99,
			quantity: 2,
			image:
				"https://pk-live-21.slatic.net/kf/S0a552f8fa89148d2b54cf580ef89e772Q.jpg_750x750.jpg_.webp", // Replace with your image link
		},
		{
			id: 3,
			name: "Casual T-Shirt",
			price: 29.99,
			quantity: 2,
			image:
				"https://pk-live-21.slatic.net/kf/S0a552f8fa89148d2b54cf580ef89e772Q.jpg_750x750.jpg_.webp", // Replace with your image link
		},
	];

	const [cartItems, setCartItems] = useState(initialCartItems);

	const incrementQuantity = (id) => {
		setCartItems(
			cartItems.map((item) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const decrementQuantity = (id) => {
		setCartItems(
			cartItems.map((item) =>
				item.id === id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	const removeItem = (id) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	};

	const total = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const savings = 71.01; // Example savings
	const freeDeliveryThreshold = 1000; // Example threshold for free delivery
	const remainingForFreeDelivery =
		freeDeliveryThreshold - total > 0 ? freeDeliveryThreshold - total : 0;

	return (
		<>
			<div>
				<div className="flex flex-row items-center bg-primary-100 p-4 m-3 rounded-lg ">
					<div className="flex items-center justify-center">
						<MdAddShoppingCart className="h-6 w-6 text-gray-800" />
					</div>
					{/* <CartList /> */}
					<h3 className=" ml-3 text-center text-gray-800">Shopping Cart</h3>
				</div>
				<div>
					{cartItems.length > 0 ? (
						<>
							<div className="text-blue-600 mb-4">
								You have saved ${savings}!
							</div>
							{cartItems.map((item) => (
								<div
									key={item.id}
									className="flex items-center mb-4 p-4 justify-around border-b px-2"
								>
									<img
										src={item.image}
										alt={item.name}
										className="w-16 h-16 object-cover mr-4"
									/>
									<div className="flex-grow">
										<div className="font-semibold">{item.name}</div>
										<div className="text-gray-900">
											${item.price.toFixed(2)}
										</div>
									</div>
									<div className="flex items-center">
										<div className="flex flex-col items-center justify-center border border-gray-400 rounded-full p-1">
											<button
												onClick={() => decrementQuantity(item.id)}
												className="text-gray-600 hover:text-gray-900"
											>
												<FaMinus className="w-2" />
											</button>
											<span>{item.quantity}</span>
											<button
												onClick={() => incrementQuantity(item.id)}
												className="text-gray-600 hover:text-gray-900"
											>
												<FaPlus className="w-2" />
											</button>
										</div>
										<button
											onClick={() => removeItem(item.id)}
											className="text-red-300 text-center hover:text-red-400 p-3"
										>
											<FaTrashAlt />
										</button>
									</div>
								</div>
							))}
							<div className="text-blue-600 mb-4">
								${remainingForFreeDelivery.toFixed(2)} Add more for free
								delivery
							</div>
							<div className="flex justify-between items-center mb-4">
								<span className="font-semibold">Subtotal:</span>
								<span className="font-semibold text-lg">
									${total.toFixed(2)}
								</span>
							</div>
							<button className="w-full bg-primary-500  text-white py-2 px-4 rounded-lg hover:bg-primary-400 ">
								Proceed To Checkout
							</button>
						</>
					) : (
						<div className="flex flex-col items-center justify-center mt-8">
							<MdRemoveShoppingCart className="h-16 w-16 text-gray-400" />
							<p className="text-gray-600 mt-4">Your cart is empty</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default CartView;
