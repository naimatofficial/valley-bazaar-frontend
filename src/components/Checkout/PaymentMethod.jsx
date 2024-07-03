import { MdArrowBackIos } from "react-icons/md";

const PaymentMethod = () => {
	return (
		<div className="flex justify-center items-center w-full ">
			<div className="w-full h-[600px]  bg-white p-6 rounded-lg shadow-lg  ">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-semibold">Payment method</h2>
					<a
						href="#"
						className="flex items-center text-green-600 hover:underline"
					>
						<MdArrowBackIos className="mr-2" />
						Go back
					</a>
				</div>
				<p className="text-lg mb-4">Select A Payment Method To Proceed</p>
				<div className="mb-6">
					<label className="flex flex-row  rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-50">
						<input type="radio" name="payment" className="mr-3" />
						<span className="flex items-center">
							<img
								src="https://via.placeholder.com/24"
								alt="Cash on Delivery"
								className="mr-2"
							/>
							Cash on Delivery
						</span>
					</label>
					<div className="mb-4">
						<p className="text-lg font-medium">
							Pay Via Online{" "}
							<span className="text-sm text-gray-500">
								(Faster & Secure Way To Pay)
							</span>
						</p>
						<div className="grid grid-cols-2 gap-4 mt-2">
							<label className="flex flex-row  rounded-lg p-4 cursor-pointer hover:bg-gray-50">
								<input type="radio" name="payment" className="mr-3" />
								<span className="flex items-center">
									<img
										src="https://via.placeholder.com/24"
										alt="Paypal"
										className="mr-2"
									/>
									Paypal
								</span>
							</label>
							<label className="flex flex-row  rounded-lg p-4 cursor-pointer hover:bg-gray-50">
								<input type="radio" name="payment" className="mr-3" />
								<span className="flex items-center">
									<img
										src="https://via.placeholder.com/24"
										alt="Stripe"
										className="mr-2"
									/>
									Stripe
								</span>
							</label>
							<label className="flex flex-row  rounded-lg p-4 cursor-pointer hover:bg-gray-50">
								<input type="radio" name="payment" className="mr-3" />
								<span className="flex items-center">
									<img
										src="https://via.placeholder.com/24"
										alt="Razor Pay"
										className="mr-2"
									/>
									Razor Pay
								</span>
							</label>
							<label className="flex flex-row  rounded-lg p-4 cursor-pointer hover:bg-gray-50">
								<input type="radio" name="payment" className="mr-3" />
								<span className="flex items-center">
									<img
										src="https://via.placeholder.com/24"
										alt="Ssl Commerz"
										className="mr-2"
									/>
									Ssl Commerz
								</span>
							</label>
						</div>
					</div>
					<label className="flex flex-row  bg-green-50 rounded-lg p-4 cursor-pointer hover:bg-green-100">
						<input type="radio" name="payment" className="mr-3" />
						Pay Offline
					</label>
				</div>
			</div>
		</div>
	);
};

export default PaymentMethod;
