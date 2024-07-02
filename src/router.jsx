import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import SignUpForm from "./_auth/Forms/SignUpForm";
import SignInForm from "./_auth/Forms/SignInForm";
import VendorLoginForm from "./components/shared/VendorLoginForm";
import VendorRegisterForm from "./components/shared/VendorRegisterForm";

// Pages
import HomePage from "./_root/pages/HomePage";
import BrandsPage from "./_root/pages/BrandsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "vendor/auth/login",
				element: <VendorLoginForm />,
			},
			{
				path: "vendor/auth/registration",
				element: <VendorRegisterForm />,
			},
			{
				path: "brands",
				element: <BrandsPage />,
			},
		],
	},
	{
		path: "/customer/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "sign-up",
				element: <SignUpForm />,
			},
			{
				path: "sign-in",
				element: <SignInForm />,
			},
		],
	},
]);

export default router;
