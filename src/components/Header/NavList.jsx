import {
	Menu,
	MenuHandler,
	MenuList,
	Typography,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import BrandList from "../Brands/BrandProductsList";

const NavList = () => {
	const [openMenu, setOpenMenu] = React.useState(false);
	const [openMenu2, setOpenMenu2] = React.useState(false);

	return (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center text-lg lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/"
					className="flex items-center text-white hover:text-green-300 transition-colors"
				>
					Home
				</Link>
			</Typography>
			<Menu open={openMenu} handler={setOpenMenu} allowHover>
				<MenuHandler>
					<Typography
						as="li"
						variant="small"
						color="blue-gray"
						className="p-1 font-medium"
					>
						<Link
							to="/brands"
							className="flex items-center text-white hover:text-green-300 transition-colors"
						>
							Brands
						</Link>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden w-[300px] overflow-visible md:grid shadow-md">
					<BrandList />
				</MenuList>
			</Menu>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/products"
					className="flex items-center text-white hover:text-green-300 transition-colors"
				>
					Discounted Products
				</Link>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-medium"
			>
				<Link
					to="/vendors"
					className="flex items-center text-white hover:text-green-300 transition-colors"
				>
					All Vendors
				</Link>
			</Typography>
			<Menu open={openMenu2} handler={setOpenMenu2} allowHover>
				<MenuHandler>
					<Typography
						as="li"
						variant="small"
						color="blue-gray"
						className="p-1 font-medium"
					>
						<p className="flex items-center text-white hover:text-green-300 transition-colors">
							Vandor Zone
						</p>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden overflow-visible md:grid shadow-md">
					<Typography
						as="li"
						variant="small"
						color="blue-gray"
						className="p-1 font-medium"
					>
						<Link
							to="/vendor/auth/registration"
							className="flex items-center text-black border-b hover:text-green-300 transition-colors"
						>
							Become A Vendor
						</Link>
					</Typography>
					<Typography
						as="li"
						variant="small"
						color="blue-gray"
						className="p-1 font-medium"
					>
						<Link
							to="/vendor/auth/login"
							className="flex items-center text-black border-b hover:text-green-300 transition-colors"
						>
							Vendor login
						</Link>
					</Typography>
				</MenuList>
			</Menu>
		</ul>
	);
};

export default NavList;
