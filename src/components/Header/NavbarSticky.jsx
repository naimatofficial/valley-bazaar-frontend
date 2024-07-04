import { useEffect, useState } from "react";
import { Navbar, IconButton, Badge } from "@material-tailwind/react";
import {
	FaRegHeart,
	FaUser,
	FaShoppingCart,
	FaSignInAlt,
	FaUserPlus,
} from "react-icons/fa";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../../assets/app-logo/app-logo-transparent.png";
import SearchBar from "./SerachBar";
import { Link } from "react-router-dom";
import CartView from "../Cart/CartView";

const NavbarSticky = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [openMenu2, setOpenMenu2] = useState(false);

	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const threshold = window.innerHeight * 0.25;
		setIsSticky(scrollPosition > threshold);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`w-full z-50 transition-transform duration-300 delay-100 ease-in py-4 ${
				isSticky
					? "fixed top-0 shadow-lg bg-white translate-y-0"
					: "relative translate-y-0"
			}`}
			style={{
				top: isSticky ? "0" : "0px", // Adjust this value based on the height of your Topbar
			}}
		>
			<Navbar variant="gradient" className="mx-auto w-[80%] p-0 shadow-none ">
				<div className="flex items-center justify-between gap-x-6 text-white">
					<Link to="/">
						<img src={logo} alt="brand logo" className="w-52 object-contain" />
					</Link>
					<div className="w-full">
						<SearchBar />
					</div>
					<div className="ml-auto flex gap-3 md:mr-4 items-center">
						<Badge content="0">
							<IconButton
								variant="text"
								className="bg-gray-100 rounded-full border-none"
							>
								<FaRegHeart className="h-5 w-5 text-primary-500" />
							</IconButton>
						</Badge>
						<div>
							<Menu open={openMenu2} handler={setOpenMenu2} allowHover>
								<MenuHandler>
									<IconButton
										variant="text"
										className="bg-gray-100 rounded-full border-none"
									>
										<FaUser className="h-5 w-5 text-primary-500" />
									</IconButton>
								</MenuHandler>
								<MenuList className="hidden overflow-visible md:grid shadow-md">
									<MenuItem>
										<Link to="/customer/auth/sign-in">
											<FaSignInAlt className="inline mr-2" />
											Login
										</Link>
									</MenuItem>
									<MenuItem>
										<Link to="/customer/auth/sign-up">
											<FaUserPlus className="inline mr-2" />
											SignUp
										</Link>
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
						<div>
							<Menu open={openMenu} handler={setOpenMenu} allowHover>
								<MenuHandler>
									<div className="flex flex-row items-center">
										<Badge content="5">
											<Link to="/cart">
												<IconButton
													variant="text"
													aria-label="Shopping Cart"
													className="bg-gray-100 rounded-full border-none"
												>
													<FaShoppingCart className="h-5 w-5 text-primary-500" />
												</IconButton>
											</Link>
										</Badge>
										<button className="text-center w-24 border-none flex flex-col text-sm  items-center justify-center">
											<span className="text-gray-600">My cart</span>
											<div className="text-gray-900 flex-center gap-2 font-bold">
												<span>$0.00</span>
												<MdArrowDropDown />
											</div>
										</button>
									</div>
								</MenuHandler>
								<MenuList className="hidden h-[50vh] overflow-visible md:grid shadow-md">
									<CartView />
								</MenuList>
							</Menu>
						</div>
					</div>
				</div>
			</Navbar>
		</div>
	);
};

export default NavbarSticky;
