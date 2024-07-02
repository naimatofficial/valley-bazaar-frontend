import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import WhatsAppButton from "../components/shared/StcikyIcons";
import StickyIcons from "../components/shared/StcikyIcons";
import Contacts from "../components/shared/Contacts";

const RootLayout = () => {
	return (
		<div>
			<Header />
			<div>
				<Outlet />
				<StickyIcons />
			</div>
			<Contacts />
		</div>
	);
};

export default RootLayout;
