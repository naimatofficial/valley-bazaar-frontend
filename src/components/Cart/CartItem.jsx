import { useDispatch } from "react-redux";
import Quantity from "../Product/subcomponent/Quantity";
import { useState } from "react";
import { removeFromCart } from "../../redux/slices/cartSlice";
import { AiFillDelete } from "react-icons/ai";

/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();

	const handleRemoveItem = (id) => {
		dispatch(removeFromCart(id));
		console.log("ID: ", id);
	};

	return (
		<div className="flex items-center mb-4 pb-2 bg-gray-50 rounded-lg p-4 ">
			<img
				src={`http://localhost:3000/${item.thumbnail}`}
				alt={item.name}
				className="w-16 h-16 object-cover rounded mr-4"
			/>
			<div className="flex-1">
				<h4 className="text-base font-semibold">{item.name}</h4>
				{/* <p>Shipping cost: ${item?.shippingCost || 0}</p> */}
				<span className="text-base ">${item.price.toLocaleString()}</span>
			</div>
			<div className="flex items-center flex-col gap-1">
				{item.taxIncluded && (
					<span className="text-xs">(Tax: ${item.taxAmount})</span>
				)}
			</div>
			<div className="flex items-center mx-4">
				<Quantity product={item} qty={qty} setQty={setQty} />
			</div>
			<div className="flex items-center">
				<span className="text-xl">${(item.price * qty).toLocaleString()}</span>
				<button
					onClick={() => handleRemoveItem(item._id)}
					className="ml-4 text-gray-700"
				>
					<AiFillDelete />
				</button>
			</div>
		</div>
	);
};

export default CartItem;
