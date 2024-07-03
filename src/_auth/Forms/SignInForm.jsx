import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import googleIcon from "./../../assets/socials-icons/google-icon.png";
import facebookIcon from "./../../assets/socials-icons/fb-icon.png";

const SignInForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data); // Handle form submission logic here
	};

	return (
		<div className="w-1/2 mx-auto p-8">
			<h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="emailPhone" className="input-label">
						Email / Phone
					</label>
					<input
						id="emailPhone"
						type="text"
						{...register("emailPhone", { required: true })}
						className="input"
						placeholder="Enter email or phone number"
					/>
				</div>
				<div>
					<label htmlFor="password" className="input-label">
						Password
					</label>
					<input
						id="password"
						type="password"
						{...register("password", { required: true })}
						className="input"
						placeholder="Password must be 7+ Characters"
					/>
				</div>
				<div>
					<button type="submit" className="w-full btn primary-btn">
						Sign In
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
