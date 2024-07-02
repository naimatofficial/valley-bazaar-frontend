import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const VendorLoginForm = () => {
	const { register, handleSubmit } = useForm();

	const [showPassword, setShowPassword] = useState(false);

	const onSubmit = (data) => {
		console.log(data); // Handle form submission logic here
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="w-[500px] mx-auto p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-out">
			<div className="text-center text-blue-gray-800 mb-8">
				<h2 className="text-2xl font-bold mb-4">Sign in</h2>
				<h3 className="text-xl font-bold mb-4">Welcome back to vendor login</h3>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="emailPhone" className="input-label">
						Your Email
					</label>
					<input
						id="emailPhone"
						type="text"
						{...register("emailPhone", { required: true })}
						className="input"
						placeholder="email@address.com"
					/>
				</div>
				<div className="mb-4 relative">
					<label htmlFor="password" className="input-label">
						Password
					</label>
					<input
						id="password"
						type={showPassword ? "text" : "password"}
						{...register("password", { required: true })}
						className="input"
						placeholder="8+ Characters requried"
					/>
					<button
						type="button"
						onClick={handleTogglePassword}
						className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
					>
						{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
					</button>
				</div>
				<div>
					<button type="submit" className="w-full btn primary-btn">
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default VendorLoginForm;
