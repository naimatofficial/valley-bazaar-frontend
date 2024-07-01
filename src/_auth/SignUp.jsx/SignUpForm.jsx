import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "./Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";

const schema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
	phoneNumber: z.string().min(1, "Phone number is required"),
	referCode: z.string().optional(),
});

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

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

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg mx-auto"
		>
			<h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
			<Input label="firstName" register={register} required errors={errors} />
			<Input label="lastName" register={register} required errors={errors} />
			<Input
				label="email"
				register={register}
				required
				type="email"
				errors={errors}
			/>
			<Input
				label="password"
				register={register}
				required
				type="password"
				errors={errors}
			/>
			<Input
				label="confirmPassword"
				register={register}
				required
				type="password"
				errors={errors}
			/>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Phone Number
				</label>
				<PhoneInput
					country={"pk"}
					onChange={handlePhoneChange}
					inputStyle={{ width: "100%" }}
				/>
				{errors.phoneNumber && (
					<p className="text-red-500 text-xs italic">
						Phone number is required.
					</p>
				)}
			</div>
			<Input label="referCode" register={register} errors={errors} />
			<div className="mb-4">
				<ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" />
			</div>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					<input type="checkbox" {...register("terms", { required: true })} /> I
					agree to the{" "}
					<a href="#" className="text-blue-500">
						Terms and Conditions
					</a>
				</label>
				{errors.terms && (
					<p className="text-red-500 text-xs italic">
						You must agree to the terms and conditions.
					</p>
				)}
			</div>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default SignUpForm;
