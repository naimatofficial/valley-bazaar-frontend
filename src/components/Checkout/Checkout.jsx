import React from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import { FaShoppingCart, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = () => {
	const [activeStep, setActiveStep] = React.useState(0);

	return (
		<div className="w-full px-24 py-4">
			<Stepper activeStep={activeStep}>
				<Step onClick={() => setActiveStep(0)}>
					<FaShoppingCart className="h-5 w-5" /> {/* Changed icon */}
					<div className="absolute -bottom-[1.6rem] w-max text-center">
						<Link to="/checkout/cart">
							<Typography
								variant="h6"
								color={activeStep === 0 ? "green" : "gray"}
							>
								Cart
							</Typography>
						</Link>
					</div>
				</Step>
				<Step onClick={() => setActiveStep(1)}>
					<FaCreditCard className="h-5 w-5" /> {/* Changed icon */}
					<div className="absolute -bottom-[1.6rem] w-max text-center">
						<Link to="/checkout/billing-address">
							<Typography
								variant="h6"
								color={activeStep === 1 ? "green" : "gray"}
							>
								Shopping And Billing
							</Typography>
						</Link>
					</div>
				</Step>
				<Step onClick={() => setActiveStep(2)} className="bg-green-300">
					<FaCheckCircle className="h-5 w-5" /> {/* Changed icon */}
					<div className="absolute -bottom-[1.6rem] w-max text-center">
						<Link to="/checkout/payment-method">
							<Typography
								variant="h6"
								color={activeStep === 2 ? "green" : "gray"}
							>
								Payment
							</Typography>
						</Link>
					</div>
				</Step>
			</Stepper>
		</div>
	);
};

export default Checkout;
