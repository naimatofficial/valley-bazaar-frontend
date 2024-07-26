import {
	Badge,
	IconButton,
	Menu,
	MenuHandler,
	MenuList,
} from "@material-tailwind/react";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import CartView from "./../Cart/CartView";
import { useSelector } from "react-redux";

const CartIcon = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const cart = useSelector((state) => state.cart);

	const totalItems = cart?.cartItems?.length || 0;
	const totalPrice = cart?.totalPrice * 1 || 0;

	return (
		<Menu open={openMenu} handler={setOpenMenu} allowHover>
			<MenuHandler>
				<div className="flex flex-row items-center bg-transparent">
					<Badge content={totalItems}>
						<Link to="/cart">
							<IconButton
								variant="text"
								aria-label="Shopping Cart"
								className="rounded-full border-none"
							>
								<FaShoppingCart className="h-5 w-5 text-primary-500" />
							</IconButton>
						</Link>
					</Badge>
					<button className="hidden md:block text-center w-24 border-none lg:flex flex-col text-sm items-center justify-center">
						<span className="text-gray-600">My cart</span>
						<div className="text-gray-900 flex-center gap-2 font-bold">
							<span>${totalPrice?.toLocaleString()}</span>
							<MdArrowDropDown />
						</div>
					</button>
				</div>
			</MenuHandler>
			<MenuList className="hidden h-[50vh] overflow-visible md:grid shadow-md">
				<CartView cart={cart} />
			</MenuList>
		</Menu>
	);
};

export default CartIcon;
