import Topbar from "./Topbar";
import NavbarSticky from "./NavbarSticky";
import NavbarDark from "./NavbarDark";

const Header = () => {
	return (
		<div className="py-2">
			<Topbar />
			<NavbarSticky />
			<NavbarDark />
		</div>
	);
};

export default Header;
