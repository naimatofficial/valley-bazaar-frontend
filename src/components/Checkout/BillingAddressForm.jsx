// components/BillingAddressForm.js
import { useForm } from "react-hook-form";

const BillingAddressForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-2/3">
			<div>
				<label>Full Name</label>
				<input
					{...register("fullName", { required: "Full name is required" })}
				/>
				{errors.fullName && <p>{errors.fullName.message}</p>}
			</div>
			<div>
				<label>Address</label>
				<input {...register("address", { required: "Address is required" })} />
				{errors.address && <p>{errors.address.message}</p>}
			</div>
			{/* Other fields */}
			<button type="submit">Save Address</button>
		</form>
	);
};

export default BillingAddressForm;
