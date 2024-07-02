import AppStore from "../assets/socials-icons/apple_app.png";
import GoogleApp from "../assets/socials-icons/google_app.png";
import Logo from "../assets/brand-logo.png";

import {
	FaLinkedin,
	FaGoogle,
	FaPinterestP,
	FaInstagram,
	FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<>
			<footer className="bg-green-700 text-white p-5 pl-20 pr-20">
				<div className="container mx-auto flex flex-row">
					<div>
						<img src={Logo} alt="logo" className="w-24 mb-4" />
						<h4 className="text-lg mb-2">DOWNLOAD OUR APP</h4>
						<div className="flex space-x-4">
							<a href="#">
								<img src={GoogleApp} alt="App Store" className="w-36" />
							</a>
							<a href="#">
								<img src={AppStore} alt="Google Play" className="w-36" />
							</a>
						</div>
					</div>
					<div className="ml-4">
						<div className="flex flex-col">
							<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
								<div>
									<h4 className="text-lg mb-4">SPECIAL</h4>
									<ul>
										<li>
											<a href="#" className="hover:underline">
												Flash Deal
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Featured Products
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Latest Products
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Best Selling Products
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Top Rated Products
											</a>
										</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg mb-4">ACCOUNT & SHIPPING INFO</h4>
									<ul>
										<li>
											<a href="#" className="hover:underline">
												Profile Info
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Wish List
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Track Order
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Refund Policy
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Return Policy
											</a>
										</li>
										<li>
											<a href="#" className="hover:underline">
												Cancellation Policy
											</a>
										</li>
									</ul>
								</div>
								<div>
									<h4 className="text-lg mb-4">NEWSLETTER</h4>
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
								</div>
							</div>

							<div className="container mx-auto flex flex-col md:flex-row justify-between items-start pt-6">
								<div className="flex flex-col md:flex-col md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
									<div className="flex flex-col justify-between">
										<div className="flex flex-row justify-between items-center">
											<h4 className="text-lg mb-2">Start A Conversation</h4>
											<hr className="w-[70%] self-center" />
										</div>

										<div className="flex flex-row justify-between gap-4">
											<div className="flex items-center mb-2">
												<span className="mr-5 ml-5 ">📞</span>
												<span>+00xxxxxxxxxxxx</span>
											</div>
											<div className="flex items-center mb-2">
												<span className="mr-5 ml-5">✉️</span>
												<span>c*********@6amtech.com</span>
											</div>
											<div className="flex items-center">
												<span className="mr-5 ml-5">👤</span>
												<a href="#" className="hover:underline">
													Support Ticket
												</a>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div className="flex flex-row justify-between items-center">
										<h4 className="text-lg mb-2">Address</h4>
										<hr className="w-[70%] self-center" />
									</div>
									<div className="flex items-center">
										<span className="mr-2">📍</span>
										<span>Kingston, New York 12401 United States</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="bg-green-300 mx-auto flex flex-col md:flex-row justify-between items-center p-4">
				<div className="text-center md:text-left">
					<p>Copyright © 6amTech@2021</p>
				</div>
				<div className="flex space-x-4 my-4 md:my-0">
					<div className="bg-green-100  rounded-full">
						<a href="#" className="block p-2">
							<FaXTwitter className="w-6 h-6 hover:text-white" />
						</a>
					</div>
					<div className="bg-green-100  rounded-full">
						<a href="#" className="block p-2">
							<FaLinkedin className="w-6 h-6 hover:text-white" />
						</a>
					</div>
					<div className="bg-green-100 rounded-full">
						<a href="#" className="block p-2">
							<FaGoogle className="w-6 h-6 hover:text-white" />
						</a>
					</div>
					<div className="bg-green-100 rounded-full">
						<a href="#" className="block p-2">
							<FaPinterestP className="w-6 h-6 hover:text-white" />
						</a>
					</div>
					<div className="bg-green-100  rounded-full">
						<a href="#" className="block p-2">
							<FaInstagram className="w-6 h-6 hover:text-white" />
						</a>
					</div>
					<div className="bg-green-100  rounded-full">
						<a href="#" className="block p-2">
							<FaFacebookF className="w-6 h-6 hover:text-white" />
						</a>
					</div>
				</div>
				<div className="text-center md:text-right">
					<a href="#" className="mr-4 hover:underline">
						Terms & Conditions
					</a>
					<a href="#" className="hover:underline">
						Privacy Policy
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
