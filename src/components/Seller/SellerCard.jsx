import PropTypes from "prop-types"; // Import PropTypes for prop validation (optional)
import { Link } from "react-router-dom";

const SellerCard = (seller) => {
	const { banner, name, rating, reviews, products } = seller;

	return (
		<>
			<div className="bg-white rounded-lg border border-green-200 overflow-hidden flex flex-col w-75 mx-2">
				<Link to="/shop-view">
					<img
						src={banner}
						alt={name}
						className="w-full h-24 object-cover transform transition duration-300 ease-in-out hover:scale-105"
					/>
					<div className="p-4 flex-col items-center">
						<div className="flex flex-row gap-2">
							<img
								src={
									"https://6valley.6amtech.com/storage/app/public/shop/2023-06-14-648868dfa14f3.png"
								}
								alt={name}
								className="w-16 h-16 bg-white rounded-full object-cover -mt-8 border-2 border-white shadow-md transform transition duration-300 ease-in-out hover:scale-105"
							/>

							<div className="flex flex-col -mt-4">
								<h3 className="font-medium text-gray-800">{name}</h3>
								<div className="flex flex-row gap-1">
									<span className="text-yellow-400">★</span>
									<span className=" text-gray-600 text-sm">
										{rating} Rating
									</span>
								</div>
							</div>
						</div>

						<div className="flex mt-2 justify-around">
							<div className="flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md">
								<h4 className="text-lg font-semibold text-green-800">
									{reviews}
								</h4>
								<span className="text-gray-600 text-sm p-1">Reviews</span>
							</div>
							<div className="flex flex-row text-center gap-1 px-3 bg-gray-100 rounded-md">
								<h4 className="text-lg font-semibold text-green-800">
									{products}
								</h4>
								<span className="text-gray-600 text-sm p-1">Products</span>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

// Optional: Adding PropTypes for prop validation
SellerCard.propTypes = {
	banner: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	logoUrl: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	reviews: PropTypes.number.isRequired,
	products: PropTypes.number.isRequired,
};

export default SellerCard;
