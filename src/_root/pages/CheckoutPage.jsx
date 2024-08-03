import { useSelector } from "react-redux";
import CartSummary from "../../components/Cart/CartSummery";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BillingAddressForm from "../../components/Checkout/BillingAddressForm";
import PaymentMethod from "../../components/Checkout/PaymentMethod";

const schemaStep1 = z.object({
	name: z.string().min(1, "name is required"),
	phoneNumber: z.string().min(1, "Phone number is required"),
	addressType: z.string(),
	country: z.string().min(1, "country is required"),
	city: z.string().min(3, "city is required"),
	zipCode: z.string().min(3, "zip code is required"),
	adress: z.string().min(3, "address is required"),
});

const schemaStep2 = z.object({
	paymentMethod: z.string("payment method is required"),
});

const CheckoutPage = () => {
	const cart = useSelector((state) => state.cart);
	const { userInfo } = useSelector((state) => state.auth);
	const [step, setStep] = useState(0);

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
			toast.error("Please fill the given address first.");
		}

		if (step === 0 && methodsStep1.formState.isValid) {
			setStep(step + 1);
		} else if (step === 1 && methodsStep2.formState.isValid) {
			const dataStep1 = methodsStep1.getValues();
			const dataStep2 = methodsStep2.getValues();

			const vendorId = cart?.cartItems?.[0]?.userId;
			console.log(vendorId);

			const data = {
				...dataStep2,
				shippingAddress: dataStep1,
				billingAddress: dataStep1,
				products: cart?.cartItems,
				totalAmount: cart?.totalPrice,
				customer: userInfo?._id,
				vendor: vendorId,
			};

			console.log(data); // Check the final data object

			// 	try {
			//			createOrder(data)
			// 		navigate("/order-confirmation");
			// 		isSuccess && toast.success("Order placed successfully");
			// 	} catch (err) {
			// 		toast.error(error?.data?.message || err.error);
			// 		console.error(err);
			// 	}
		}
	};

	// const handlePrev = () => {
	// 	if (step > 0) {
	// 		setStep(step - 1);
	// 	}
	// };

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
							<BillingAddressForm errors={methodsStep1.formState.errors} />
							{/* Add the button here */}
							<CartSummary
								cart={cart}
								onClick={handleNext}
								disabled={!methodsStep1.formState.isValid}
							/>
						</>
					)}
					{step === 1 && (
						<>
							<PaymentMethod errors={methodsStep2.formState.errors} />
							<CartSummary
								cart={cart}
								disabled={
									(step === 1 && !methodsStep2.formState.isValid) || isLoading
								}
							/>
						</>
					)}
				</form>
			</FormProvider>
		</div>
	);
};

export default CheckoutPage;
