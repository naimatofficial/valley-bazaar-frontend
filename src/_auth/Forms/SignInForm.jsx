import { useForm } from "react-hook-form";
import { z } from "zod";

import { Link, useLocation, useNavigate } from "react-router-dom";

import googleIcon from "./../../assets/socials-icons/google-icon.png";
import facebookIcon from "./../../assets/socials-icons/fb-icon.png";
import { useEffect, useState } from "react";
import { setCredentials } from "../../redux/slices/authSlice";
import { useCustomerLoginMutation } from "../../redux/slices/customersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
});

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	const { userInfo } = useSelector((state) => state.auth);
	const [CustomerLogin, { isLoading }] = useCustomerLoginMutation();

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get("redirect") || "/";

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const onSubmit = async (data) => {
		const { email, password } = data;
		try {
			const res = await CustomerLogin({ email, password }).unwrap();
			dispatch(setCredentials({ ...res }));
			navigate(redirect);
		} catch (err) {
			console.error(err?.data?.message);
			toast.error(err?.data?.message || err.error);
		}
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="min-w-1/2 lg:w-1/2 mx-auto p-8">
			<h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="email" className="input-label">
						Email
					</label>
					<input
						id="email"
						type="email"
						{...register("email", { required: true })}
						className="input"
						placeholder="Enter email"
					/>
					{errors.email && (
						<p className="text-red-500 text-xs italic">
							{errors.email.message}
						</p>
					)}
				</div>
				<div>
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
				</div>
				<div>
					<button type="submit" className="w-full btn primary-btn">
						{isLoading ? <span>Loading...</span> : <span>Sign In</span>}
					</button>
				</div>
			</form>
			<div className="mt-4">
				<p className="text-sm text-center text-gray-500">Or continue with</p>
				<div className="flex mt-2 py-2 justify-center items-center">
					<button className="">
						<img
							src={googleIcon}
							alt="google icon"
							className="w-12 h-12 object-contain"
						/>
					</button>
					<button className="">
						<img
							src={facebookIcon}
							alt="facebook icon"
							className="w-12 h-12 object-contain"
						/>
					</button>
				</div>
			</div>
			<div>
				<p className="text-center mt-4">
					Enjoy New experience
					<Link
						to="/customer/auth/sign-up"
						className="text-blue-500 underline hover:no-underline ml-2"
					>
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignInForm;
