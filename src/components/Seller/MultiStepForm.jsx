import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import SellerRegForm2 from "./SellerRegForm2";
import SellerRegForm1 from "./SellerRegForm1";

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
	shopBanner: z.any(),
});

const MultiStepForm = () => {
	const [step, setStep] = useState(0);
	const [logoImages, setLogoImages] = useState([]);
	const [bannerImages, setBannerImages] = useState([]);

	const methodsStep1 = useForm({
		resolver: zodResolver(schemaStep1),
		mode: "onChange",
	});

	const methodsStep2 = useForm({
		resolver: zodResolver(schemaStep2),
		mode: "onChange",
	});

	const handleNext = () => {
		if (step === 0 && methodsStep1.formState.isValid) {
			setStep(step + 1);
		} else if (step === 1 && methodsStep2.formState.isValid) {
			console.log("Form Submitted!");
		}
	};

	const handlePrev = () => {
		if (step > 0) {
			setStep(step - 1);
		}
	};

	return (
		<div className="container mx-auto p-6">
			<FormProvider {...(step === 0 ? methodsStep1 : methodsStep2)}>
				<form onSubmit={methodsStep1.handleSubmit(handleNext)}>
					{step === 0 && (
						<SellerRegForm1 errors={methodsStep1.formState.errors} />
					)}
				</form>

				<form onSubmit={methodsStep2.handleSubmit(handleNext)}>
					{step === 1 && (
						<SellerRegForm2
							errors={methodsStep2.formState.errors}
							logoImages={logoImages}
							setLogoImages={setLogoImages}
							bannerImages={bannerImages}
							setBannerImages={setBannerImages}
						/>
					)}
				</form>
			</FormProvider>

			<div className="flex justify-between mt-4">
				{step > 0 && (
					<button
						className="btn secondary-btn"
						onClick={handlePrev}
						color="red"
					>
						Previous
					</button>
				)}
				<button
					className="btn primary-btn cursor-pointer"
					onClick={handleNext}
					disabled={
						(step === 0 && !methodsStep1.formState.isValid) ||
						(step === 1 && !methodsStep2.formState.isValid)
					}
				>
					{step === 2 ? "Submit" : "Next"}
				</button>
			</div>
		</div>
	);
};

export default MultiStepForm;
