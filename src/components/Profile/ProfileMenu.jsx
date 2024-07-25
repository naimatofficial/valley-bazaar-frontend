import { PropTypes } from "prop-types";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import { Avatar, Typography } from "@material-tailwind/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import {
	AiOutlineUser,
	AiOutlineOrderedList,
	AiOutlineLogout,
} from "react-icons/ai";
import { createElement, useState } from "react";

const profileMenuItems = [
	{ label: "Profile", icon: AiOutlineUser },
	{ label: "Orders", icon: AiOutlineOrderedList },
	{ label: "Logout", icon: AiOutlineLogout },
];

function ProfileMenu({ user }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	console.log(user);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu
			open={isMenuOpen}
			handler={setIsMenuOpen}
			placement="bottom-end"
			className="w-24"
		>
			<MenuHandler>
				<button className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5">
					<Avatar
						variant="circular"
						size="sm"
						alt={user.firstName}
						className="border border-gray-900 p-0.5"
						src={
							user?.image ||
							"https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
						}
					/>
					<div className="text-xs text-black px-2 max-w-fit">
						<p className="">Hello, {user.firstName}</p>
						<p className="">Dashboard</p>
					</div>
					{/* <ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? "rotate-180" : ""
						}`}
					/> */}
				</button>
			</MenuHandler>
			<MenuList className="p-1">
				{profileMenuItems.map(({ label, icon }, index) => {
					const isLastItem = index === profileMenuItems.length - 1;
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded ${
								isLastItem
									? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
									: ""
							}`}
						>
							{createElement(icon, {
								className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
								strokeWidth: 2,
							})}
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color={isLastItem ? "red" : "inherit"}
							>
								{label}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

ProfileMenu.propTypes = {
	user: PropTypes.object.isRequired,
};

export default ProfileMenu;
