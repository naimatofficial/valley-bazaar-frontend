import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import BankPaymentForm from "./BankPaymentForm";

const PaymentMethod = () => {
	const [payOffline, setPayOffline] = useState(false);
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(!open);

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
					<div className="flex flex-col w-full bg-primary-100 rounded-lg p-4 ">
						<label className="flex flex-row cursor-pointer">
							<input
								type="radio"
								name="payment"
								className="mr-3"
								onClick={() => setPayOffline(true)}
							/>
							<span>Pay Offline</span>
						</label>
						{payOffline && (
							<div>
								<button
									className="btn bg-blue-gray-50 text-gray-900 py-2 px-4"
									onClick={handleOpen}
								>
									Bank Payment
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
			{open && (
				<BankPaymentForm
					open={open}
					setOpen={setOpen}
					handleOpen={handleOpen}
				/>
			)}
		</div>
	);
};

export default PaymentMethod;
