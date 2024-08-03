import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SellerRegForm2 from "./SellerRegForm2";
import SellerRegForm1 from "./SellerRegForm1";
import { useVendorRegisterMutation } from "../../redux/slices/vendorsApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schemaStep1 = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters"),
	confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
	phoneNumber: z.string().min(1, "Phone number is required"),
});

const schemaStep2 = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	shopName: z.string().min(1, "Shop name is required"),
	shopAddress: z.string().min(3, "Shop address is required"),
	logo: z.any(),
	banner: z.any(),
	vendorImage: z.any(),
});

const MultiStepForm = () => {
	const [logoImages, setLogoImages] = useState([]);
	const [bannerImages, setBannerImages] = useState([]);
	const [vendorImages, setVendorImages] = useState([]);
	const [step, setStep] = useState(0);

	const [vendorRegister, { isLoading, isSuccess, error }] =
		useVendorRegisterMutation();

	const methodsStep1 = useForm({
		resolver: zodResolver(schemaStep1),
		mode: "onChange",
	});

	const methodsStep2 = useForm({
		resolver: zodResolver(schemaStep2),
		mode: "onChange",
	});

	const navigate = useNavigate();

	const handleNext = async () => {
		console.log(methodsStep1.formState);
		if (!methodsStep1.formState.isValid) {
			toast.error("Please fill the given inputs first.");
		}

		if (step === 0 && methodsStep1.formState.isValid) {
			setStep(step + 1);
		} else if (step === 1 && methodsStep2.formState.isValid) {
			const dataStep1 = methodsStep1.getValues();
			const dataStep2 = methodsStep2.getValues();

			// Extract file names or set default messages
			const logoFileName = logoImages?.[0]?.file?.name || "No logo uploaded";
			const bannerFileName =
				bannerImages?.[0]?.file?.name || "No banner uploaded";
			const vendorFileName =
				vendorImages?.[0]?.file?.name || "No banner uploaded";

			console.log({ logoFileName, bannerFileName });

			const data = {
				...dataStep1,
				...dataStep2,
				logo: logoFileName,
				banner: bannerFileName,
				vendorImage: vendorFileName,
			};

			if (data.password !== data.confirmPassword) {
				toast.error("Passwords do not match");
				return;
			}

			console.log(data); // Check the final data object

			try {
				await vendorRegister(data).unwrap();
				navigate("/vendor/auth/login");
				isSuccess && toast.success("Vendor registered successfully");
			} catch (err) {
				toast.error(error?.data?.message || err.error);
				console.error(err);
			}
		}
	};

	const handlePrev = () => {
		if (step > 0) {
			setStep(step - 1);
		}
	};

	return (
		<div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-12">
			<FormProvider {...(step === 0 ? methodsStep1 : methodsStep2)}>
				<form
					onSubmit={
						step === 0
							? methodsStep1.handleSubmit(handleNext)
							: methodsStep2.handleSubmit(handleNext)
					}
				>
					{step === 0 && (
						<>
							<SellerRegForm1 errors={methodsStep1.formState.errors} />
							{/* Add the button here */}
							<div className="flex justify-end mt-4">
								<button
									className="btn primary-btn cursor-pointer"
									type="button"
									onClick={handleNext}
									disabled={!methodsStep1.formState.isValid}
								>
									Next
								</button>
							</div>
						</>
					)}
					{step === 1 && (
						<>
							<SellerRegForm2
								errors={methodsStep2.formState.errors}
								logoImages={logoImages}
								setLogoImages={setLogoImages}
								bannerImages={bannerImages}
								setBannerImages={setBannerImages}
								vendorImages={vendorImages}
								setVendorImages={setVendorImages}
							/>
							{/* Add the button here */}
							<div className="flex justify-between items-center mt-4">
								{step > 0 && (
									<div className="flex justify-between items-center mt-4">
										<button
											className="btn secondary-btn"
											onClick={handlePrev}
											color="red"
										>
											Previous
										</button>
									</div>
								)}
								<button
									className="btn primary-btn justify-self-end cursor-pointern"
									type="submit"
									disabled={
										(step === 1 && !methodsStep2.formState.isValid) || isLoading
									}
								>
									{isLoading ? "Loading..." : "Submit"}
								</button>
							</div>
						</>
					)}
					{/* Add Previous button outside of conditional rendering */}
				</form>
			</FormProvider>
		</div>
	);
};

export default MultiStepForm;
