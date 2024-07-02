import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import StickyIcons from "../components/shared/StcikyIcons";
import Contacts from "../components/shared/Contacts";
import Footer from "../components/Footer";

const RootLayout = () => {
	return (
		<div>
			<Header />
			<div className="w-10/12 mx-auto p-4">
				<Outlet />
			</div>
			<StickyIcons />
			<Contacts />
			<Footer />
		</div>
	);
};

export default RootLayout;
