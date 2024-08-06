import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/slices/cartSlice";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const CartViewItem = ({ item }) => {
	const [qty, setQty] = useState(item?.qty);

	const dispatch = useDispatch();

	useEffect(() => {
		if (qty) {
			dispatch(addToCart({ ...item, qty }));
		}
	}, [qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const increaseQty = () => {
		if (qty < item.stock) {
			setQty(qty + 1);
		}
	};

	const decreaseQty = () => {
		if (qty > item.minimumOrderQty) {
			setQty(qty - 1);
		} else
			toast.error(`Min. order for this item is ${item.minimumOrderQty} piece.`);
	};

	return (
		<div
			key={item._id}
			className="flex items-center mb-4 p-4 justify-around border-b px-2"
		>
			<img
				src={`http://localhost:3000/${item.thumbnail}`}
				alt={item.name}
				className="w-16 h-16 object-contain mr-4"
			/>
			<div className="flex-grow">
				<div className="font-semibold">{item.name}</div>
				<div className="text-gray-700">${item.price.toFixed(2)}</div>
			</div>
			<div>
				<div className="flex items-center justify-between">
					<button
						onClick={decreaseQty}
						className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
					>
						<FaMinus className="text-sm" />
					</button>
					<input
						type="number"
						value={qty}
						readOnly
						className="py-1 px-2 w-12 text-center bg-blue-50 rounded mx-2 focus:outline-none"
					/>
					<button
						onClick={increaseQty}
						className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
					>
						<FaPlus className="text-sm" />
					</button>
				</div>
			</div>
			<button
				onClick={() => removeFromCartHandler(item._id)}
				className="text-inherit cursor-pointer"
			>
				<FaTrash className="text-sm text-red-300 hover:text-red-400" />
			</button>
		</div>
	);
};

export default CartViewItem;
