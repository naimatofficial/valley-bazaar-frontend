import { useDispatch } from "react-redux";
import Quantity from "../Product/subcomponent/Quantity";
import { useEffect, useState } from "react";
import { removeFromCart } from "../../redux/slices/cartSlice";
import { Typography } from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CartItem = ({ item }) => {
	console.log(item);
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		if (item?.qty) {
			setQty(item.qty);
		}
	}, [item.qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
		console.log("ID: ", id);
	};

	return (
		<div className="bg-gray-50 p-3 flex gap-3 justify-between items-center rounded-lg shadow-sm mb-2">
			<div className="flex gap-2">
				<img
					src={`http://localhost:3000/${item.thumbnail}`}
					alt={item.name}
					className="h-20 object-cover rounded-md"
				/>
				<div className="flex flex-col justify-between items-start">
					<Link
						to={`/products/${item._id}`}
						className="hover:cursor-pointer hover:text-gray-600"
					>
						<Typography variant="h3" className="font-medium text-lg">
							{item.name}
						</Typography>
					</Link>
					<span className="text-gray-500 text-sm">Stock: {item.stock}</span>
					<Typography variant="paragraph" className="text-sm text-gray-600">
						Price: ${item.price}
					</Typography>
				</div>
			</div>

			<Quantity qty={qty} setQty={setQty} product={item} />
			<div>
				<button
					onClick={() => removeFromCartHandler(item._id)}
					className="text-inherit"
				>
					<FaTrash className="w-4 h-4 text-red-400" />
				</button>
				<Typography
					variant="paragraph"
					className="font-medium align-middle text-base"
				>
					Total: ${(item.qty * item.price).toFixed(2).toLocaleString()}
				</Typography>
			</div>
		</div>
	);
};

export default CartItem;
