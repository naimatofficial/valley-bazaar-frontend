import { NavbarTop } from "./Navbar";
import Topbar from "./Topbar";
import { NavbarSimple } from "./MainNav";

const Header = () => {
	return (
		<div className="py-2">
			<Topbar />
			<NavbarTop />
			<NavbarSimple />
		</div>
	);
};

export default Header;
