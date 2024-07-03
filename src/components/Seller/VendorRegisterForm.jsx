import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
	phoneNumber: z.string().min(1, "Phone number is required"),
});

const VendorRegisterForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const onSubmit = (data) => {
		if (data.password !== data.confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		alert(JSON.stringify(data));
	};

	const handlePhoneChange = (value) => {
		setValue("phoneNumber", value);
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};
	const handleToggleConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="py-4 px-8 rounded-lg">
			<h2 className="text-2xl font-semibold mb-6 text-left">
				Create An Account
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
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
					<label className="input-label">Phone Number</label>
					<PhoneInput
						country={"pk"}
						onChange={handlePhoneChange}
						inputClass="input"
						inputStyle={{
							appearance: "none",
							border: "1px solid #e2e8f0", // border-gray-300
							borderRadius: "0.375rem", // rounded
							width: "92%", // w-full
							padding: "0.75rem 1.5rem", // py-2 px-3
							marginLeft: "2rem",
							color: "#4a5568", // text-gray-700
							lineHeight: "1.25", // leading-tight
							outline: "none",
							boxShadow: "0 0 0 1px #e2efc7", // focus:outline-1 outline-green-100
							transition: "box-shadow 0.2s ease-in-out",
						}}
						placeholder="Enter phone number"
					/>
					{errors.phoneNumber && (
						<p className="text-red-500 text-xs italic">
							{errors.phoneNumber.message}
						</p>
					)}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
				<div className="mb-4 relative">
					<label className="input-label">Password</label>
					<input
						{...register("password")}
						type={showPassword ? "text" : "password"}
						className={`input ${errors.password ? "border-red-500" : ""}`}
						placeholder="Minimum 8 characters long"
					/>
					<button
						type="button"
						onClick={handleTogglePassword}
						className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
					>
						{showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
					</button>
					{errors.password && (
						<p className="text-red-500 text-xs italic">
							{errors.password.message}
						</p>
					)}
				</div>

				<div className="mb-4 relative">
					<label className="input-label">Confirm Password</label>
					<input
						{...register("confirmPassword")}
						type={showConfirmPassword ? "text" : "password"}
						className={`input ${
							errors.confirmPassword ? "border-red-500" : ""
						}`}
						placeholder="Minimum 8 characters long"
					/>
					<button
						type="button"
						onClick={handleToggleConfirmPassword}
						className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
					>
						{showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
					</button>
					{errors.confirmPassword && (
						<p className="text-red-500 text-xs italic">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
			</div>

			<div className="flex items-center justify-end ">
				<button type="submit" className="btn primary-btn">
					Proceed to Next
				</button>
			</div>
		</form>
	);
};

export default VendorRegisterForm;
