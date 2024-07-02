import { Link } from "react-router-dom";
import VendorRegisterForm from "../../components/Seller/VendorRegisterForm";

const VendorRegisterPage = () => {
	return (
		<div className="flex justify-between items-center gap-6 bg-green-50 py-6 px-8">
			<div className="flex flex-col justify-center items-center">
				<h2 className="text-3xl">Vendor Registration</h2>
				<p className="text-base">
					Create your own store.Already have store?
					<Link
						to="/vendor/auth/login"
						className="text-green-500 text-xl font-bold ml-2"
					>
						Login
					</Link>
				</p>
				<img
					src="https://6valley.6amtech.com/public/assets/front-end/img/media/seller-registration.png"
					alt="vendor"
					className="h-64 w-64 object-contain"
				/>
			</div>
			<div className="flex-grow bg-white">
				<VendorRegisterForm />
			</div>
		</div>
	);
};

export default VendorRegisterPage;
