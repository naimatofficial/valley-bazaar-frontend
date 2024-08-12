import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";

const WishItems = ({ wishlistItems }) => {
	return (
		<div>
			<h2 className="text-xl font-bold mb-4">WishList</h2>
			{wishlistItems.map((item) => (
				<div
					key={item.id}
					className="flex items-center justify-between mb-4 p-4 border rounded-lg"
				>
					<div className="flex">
						<div className="absolute bg-primary-500 text-white text-xs px-1 py-1 rounded-lg m-1">
							{item.discountType === "percentage"
								? `-${item.discountValue}%`
								: `-$${item.discountValue}`}
						</div>
						<img
							src={item.image}
							alt={item.name}
							className="w-20 h-20 object-cover mr-4"
						/>
						<div className="flex flex-col justify-center">
							<div className="text-sm truncate w-36 md:w-96">{item.name}</div>
							<div className="text-xs text-gray-600">Brand: {item.brand}</div>
							<div className="flex items-center">
								<span className="text-sm font-semibold text-gray-800 mr-2">
									${item.discountedPrice.toFixed(2)}
								</span>
								<span className="line-through text-gray-500">
									${item.originalPrice.toFixed(2)}
								</span>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<button className="text-primary-500 hover:text-primary-100">
							<FaHeart />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

WishItems.propTypes = {
	wishlistItems: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			brand: PropTypes.string.isRequired,
			originalPrice: PropTypes.number.isRequired,
			discountedPrice: PropTypes.number.isRequired,
			discountType: PropTypes.oneOf(["percentage", "amount"]).isRequired,
			discountValue: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default WishItems;
