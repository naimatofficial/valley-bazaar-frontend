/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

const SellerRegForm1 = ({ errors }) => {
	const { register } = useFormContext();

	return (
		<div className="flex justify-between items-center gap-6 bg-primary-100 py-6 px-8">
			<div className="flex flex-col justify-center items-center">
				<h2 className="text-3xl">Vendor Registration</h2>
				<p className="text-base">
					Create your own store.Already have store?
					<Link
						to="/vendor/auth/login"
						className="text-primary-500 text-xl font-bold ml-2"
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
			<div>
				<h2 className="text-2xl font-semibold mb-6">Account Information</h2>
				<div className="flex flex-wrap gap-4 justify-between items-center">
					<div className="mb-4">
						<label className="input-label">Email</label>
						<input
							{...register("email")}
							type="email"
							className={`input ${errors.email ? "border-red-500" : ""}`}
							placeholder="Enter email address"
						/>
						{errors.email && (
							<p className="text-red-500 text-xs italic">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="input-label">Password</label>
						<input
							{...register("password")}
							type="password"
							className={`input ${errors.password ? "border-red-500" : ""}`}
							placeholder="Enter password"
						/>
						{errors.password && (
							<p className="text-red-500 text-xs italic">
								{errors.password.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="input-label">Confirm Password</label>
						<input
							{...register("confirmPassword")}
							type="password"
							className={`input ${
								errors.confirmPassword ? "border-red-500" : ""
							}`}
							placeholder="Confirm password"
						/>
						{errors.confirmPassword && (
							<p className="text-red-500 text-xs italic">
								{errors.confirmPassword.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label className="input-label">Phone Number</label>
						<input
							{...register("phoneNumber")}
							type="text"
							className={`input ${errors.phoneNumber ? "border-red-500" : ""}`}
							placeholder="Enter phone number"
						/>
						{errors.phoneNumber && (
							<p className="text-red-500 text-xs italic">
								{errors.phoneNumber.message}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SellerRegForm1;
