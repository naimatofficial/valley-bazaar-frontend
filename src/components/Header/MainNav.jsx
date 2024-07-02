import React, { useEffect } from "react";
import {
	Navbar,
	Collapse,
	Typography,
	IconButton,
	Menu,
	MenuHandler,
	MenuList,
} from "@material-tailwind/react";
import { MdArrowDropDown } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";

import { FaBars, FaTimes } from "react-icons/fa";
import { CategorySidebar } from "../Seller/CategorySideBar";
import { useLocation } from "react-router-dom";
import NavList from "./NavList";

export function NavbarSimple() {
	const [openMenu3, setOpenMenu3] = React.useState(false);
	const [openNav, setOpenNav] = React.useState(false);

	const location = useLocation();

	useEffect(() => {
		if (location && location.pathname === "/") {
			setOpenMenu3(true);
		}
	}, [location]);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<>
			<div className="bg-green-600 ">
				<Navbar className="mx-auto max-w-screen-2xl px-6 py-3 border-none shadow-none bg-green-600 ">
					<div className="flex items-center gap-5 ">
						<div className="w-[250px] h-[45px] bg-white items-center">
							<Menu
								open={openMenu3}
								handler={setOpenMenu3}
								allowHover
								className="flex flex-col"
							>
								<MenuHandler>
									<Typography
										as="li"
										variant="small"
										color="blue-gray"
										className="p-2 font-medium"
									>
										<p className="flex items-center hover:text-green-500 text-green-600 justify-between cursor-pointer">
											<BiSolidCategory className="w-6 h-6 mr-2" />{" "}
											{/* Added margin-right to the category icon */}
											<span className="text-xl">Category</span>
											<MdArrowDropDown className="w-6 h-6 ml-2" />{" "}
											{/* Added margin-left to the dropdown icon */}
										</p>
									</Typography>
								</MenuHandler>
								<MenuList className="hidden w-[300px] overflow-visible md:grid p-0">
									<CategorySidebar />
								</MenuList>
							</Menu>
						</div>

						<div className="hidden lg:block">
							<NavList />
						</div>
						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<FaTimes className="h-6 w-6" strokeWidth={2} />
							) : (
								<FaBars className="h-6 w-6" strokeWidth={2} />
							)}
						</IconButton>
					</div>
					<Collapse open={openNav}>
						<NavList />
					</Collapse>
				</Navbar>
			</div>
		</>
	);
}
