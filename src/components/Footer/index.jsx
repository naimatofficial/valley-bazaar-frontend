import AppStore from "../../assets/socials-icons/apple_app.png";
import GoogleApp from "../../assets/socials-icons/google_app.png";
import Logo from "../../assets/app-logo/app-logo-background.jpg";

import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";
import { FaLocationPin } from "react-icons/fa6";

const footerSections = [
	{
		title: "SPECIAL",
		links: [
			{ name: "Flash Deal", url: "#" },
			{ name: "Featured Products", url: "#" },
			{ name: "Latest Products", url: "#" },
			{ name: "Best Selling Products", url: "#" },
			{ name: "Top Rated Products", url: "#" },
		],
	},
	{
		title: "ACCOUNT & SHIPPING INFO",
		links: [
			{ name: "Profile Info", url: "#" },
			{ name: "Wish List", url: "#" },
			{ name: "Track Order", url: "#" },
			{ name: "Refund Policy", url: "#" },
			{ name: "Return Policy", url: "#" },
			{ name: "Cancellation Policy", url: "#" },
		],
	},
	{
		title: "NEWSLETTER",
		content: (
			<>
				<p className="mb-4">
					Subscribe to our new channel to get latest updates
				</p>
				<div className="relative flex items-center">
					<input
						type="email"
						placeholder="Your Email Address"
						className="pl-4 pr-20 py-2 rounded text-black w-full"
					/>
					<button
						className="absolute right-2 p-2 bg-blue-600 rounded text-white hover:bg-blue-700"
						style={{ top: "2px", bottom: "2px" }}
					>
						Subscribe
					</button>
				</div>
			</>
		),
	},
];

const Footer = () => {
	return (
		<>
			<footer className="bg-primary-700 text-white py-16 px-20">
				<div className="container mx-auto flex flex-row gap-4">
					<div className="flex-start">
						<img src={Logo} alt="logo" className="w-44 h-44 object-contain" />
						<h4 className="text-lg mb-2">DOWNLOAD OUR APP</h4>
						<div className="flex space-x-4">
							<Link to="/">
								<img src={GoogleApp} alt="App Store" className="w-36" />
							</Link>
							<Link to="/">
								<img src={AppStore} alt="Google Play" className="w-36" />
							</Link>
						</div>
					</div>
					<div className="ml-4">
						<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
							{footerSections.map((section, index) => (
								<FooterSection
									key={index}
									title={section.title}
									links={section.links}
									content={section.content}
								/>
							))}
						</div>
						<div className="container mx-auto flex flex-col md:flex-row justify-between items-start pt-6">
							<FooterContact />
							<div>
								<div className="flex flex-row justify-between items-center">
									<h4 className="text-lg mb-2">Address</h4>
									<hr className="w-[70%] self-center" />
								</div>
								<div className="flex items-center">
									<span className="mr-2">
										<FaLocationPin className="w-4 h-4 object-contain" />
									</span>
									<span>Kingston, New York 12401 United States</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="bg-primary-400 mx-auto flex flex-col md:flex-row justify-between items-center p-4">
				<div className="text-center md:text-left">
					<p>Copyright © 6amTech@2021</p>
				</div>
				<FooterSocial />
				<div className="text-center md:text-right">
					<Link to="#" className="mr-4 hover:underline">
						Terms & Conditions
					</Link>
					<Link to="#" className="hover:underline">
						Privacy Policy
					</Link>
				</div>
			</div>
		</>
	);
};

export default Footer;
