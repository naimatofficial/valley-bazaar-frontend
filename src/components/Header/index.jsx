import Topbar from "./Topbar";
import NavbarSticky from "./NavbarSticky";
import NavbarDark from "./NavbarDark";

const Header = () => {
	return (
		<div className="py-2">
			<Topbar />
			<NavbarSticky />
			<NavbarDark />
			<img
				src={"https://flagcdn.com/pk.svg"}
				alt={` flag`}
				className="mr-2 w-10 h-10 object-contain"
			/>
		</div>
	);
};

export default Header;
