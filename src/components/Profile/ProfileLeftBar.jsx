/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, List } from "@material-tailwind/react";

import {
	FaShoppingBag,
	FaUserCircle,
	FaInbox,
	FaHeart,
	FaWallet,
	FaStar,
	FaHome,
	FaTicketAlt,
	FaGift,
	FaTag,
	FaShippingFast,
	FaTimes,
	FaBars,
} from "react-icons/fa";
import MenuItem from "./subcomponenets/MenuItem";

const menuItems = [
	{ icon: FaUserCircle, label: "Profile Info", to: "/profile/profile-info" },
	{ icon: FaShoppingBag, label: "My Order", to: "/profile/my-order" },
	{ icon: FaHeart, label: "Wish List", to: "/profile/wish-list" },
	{ icon: FaWallet, label: "My Wallet", to: "/profile/my-wallet" },
	{ icon: FaStar, label: "My Loyalty Point", to: "/profile/my-loyalty-point" },
	{ icon: FaInbox, label: "Inbox", to: "/profile/inbox", chip: 14 },
	{ icon: FaHome, label: "My Address", to: "/profile/my-address" },
	{ icon: FaTicketAlt, label: "Support Ticket", to: "/profile/support-ticket" },
	{ icon: FaGift, label: "Refer & Earn", to: "/profile/refer-earn" },
	{ icon: FaTag, label: "Coupons", to: "/profile/coupons" },
	{ icon: FaShippingFast, label: "Track Order", to: "/profile/track-order" },
];

const ProfileLeftBar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleMenuItemClick = () => {
		setIsSidebarOpen(false);
	};

	return (
		<div>
			<button
				className="md:hidden p-2 text-gray-700"
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
			>
				{isSidebarOpen ? (
					<FaTimes className="h-6 w-6" />
				) : (
					<FaBars className="h-6 w-6" />
				)}
			</button>
			<div
				className={`sm:fixed xl:sticky inset-0 text-gray-800 z-10 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 md:relative md:translate-x-0`}
			>
				<Card className="xl:w-80 md:max-w-xs lg:max-w-sm xl:max-w-md h-full shadow-lg border border-gray-200 overflow-y-auto">
					<List>
						{menuItems.map((item, index) => (
							<MenuItem key={index} {...item} onClick={handleMenuItemClick} />
						))}
					</List>
				</Card>
			</div>
			{isSidebarOpen && (
				<div
					className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}
		</div>
	);
};

export default ProfileLeftBar;
