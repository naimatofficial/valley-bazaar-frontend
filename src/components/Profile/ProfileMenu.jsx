import { PropTypes } from "prop-types";
import {
	AiOutlineUser,
	AiOutlineOrderedList,
	AiOutlineLogout,
} from "react-icons/ai";
import { useState } from "react";

import UserAvatar from "../../assets/user-avatar.jpg";
import { useNavigate } from "react-router-dom";

const profileMenuItems = [
	{ label: "Profile", icon: AiOutlineUser, link: "/profile/profile-info" },
	{ label: "Orders", icon: AiOutlineOrderedList, link: "/profile/orders" },
	{ label: "Logout", icon: AiOutlineLogout, link: "/logout" },
];

const ProfileMenu = ({ user }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = (link) => {
		setIsMenuOpen(false);
		navigate(link);
	};

	console.log(user);

	return (
		<div className="relative">
			<button onClick={toggleMenu} className="flex items-center gap-2 p-1">
				<img
					className="h-8 w-8 object-contain rounded-full"
					src={
						user?.image ? `http://localhost:3000/${user?.image}` : UserAvatar
					}
					alt={user.firstName}
				/>
				<div className="hidden md:block text-sm text-gray-900">
					<p>Hello, {user.firstName}</p>
					<p>Dashboard</p>
				</div>
			</button>
			{isMenuOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
					{profileMenuItems.map(({ label, icon: Icon, link }) => (
						<button
							key={label}
							onClick={() => closeMenu(link)}
							className="flex items-center gap-2 px-4 py-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100"
						>
							<Icon className="h-4 w-4" />
							<span>{label}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

ProfileMenu.propTypes = {
	user: PropTypes.object.isRequired,
};

export default ProfileMenu;
