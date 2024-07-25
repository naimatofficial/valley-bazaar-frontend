import PropTypes from "prop-types"; // Step 1: Import PropTypes
import AddressCard from "./subcomponenets/AddressCard";

const MyAddress = ({ addresses }) => {
	return (
		<div className="mx-auto rounded-lg shadow-lg p-4">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-2xl font-bold">My Address</h2>
				<button className="bg-green-500 text-white py-2 px-4 rounded-md">
					Add Address
				</button>
			</div>
			<div className="flex flex-wrap">
				{addresses.map((address, index) => (
					<div key={index} className="p-2 w-1/2">
						<AddressCard
							address={address}
							onEdit={() => console.log("Edit", address)}
							onDelete={() => console.log("Delete", address)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

// Step 2: Define propTypes for MyAddress
MyAddress.propTypes = {
	addresses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MyAddress;
