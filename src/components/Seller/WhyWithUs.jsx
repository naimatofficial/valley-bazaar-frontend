import img from "../../assets/vendor/sell-with-us.png";
import { features } from "../../utils";

const WhySellWithUs = () => {
	return (
		<div className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl  text-gray-900">Why Sell With Us</h2>
					<p className="mt-4 text-sm text-gray-500 px-[320px]">
						Boost your sales! Join us for a seamless, profitable experience with
						vast buyer reach and top-notch support. Sell smarter today!
					</p>
				</div>
				<div className="flex justify-center mb-12">
					<img
						src={img}
						alt="Why Sell With Us"
						className="w-80 max-w-md mx-auto"
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
					{features.map((feature, index) => (
						<div key={index} className="text-center p-6 ">
							<h3 className="text-sm  text-gray-900 mb-4">{feature.title}</h3>
							<p className="text-gray-500 text-left">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhySellWithUs;
