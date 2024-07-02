import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import SignUpForm from "./_auth/Forms/SignUpForm";
import SignInForm from "./_auth/Forms/SignInForm";

// Pages
import HomePage from "./_root/pages/HomePage";
import BrandsPage from "./_root/pages/BrandsPage";
import ShopViewPage from "./_root/pages/ShopViewPage";
import ProductsPages from "./_root/pages/ProductsPages";
import VendorLoginForm from "./components/Seller/VendorLoginForm";
import VendorRegisterPage from "./_root/pages/VendorRegisterPage";
import VendorsPage from "./_root/pages/VendorsPage";

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
				element: <VendorRegisterPage />,
			},
			{
				path: "brands",
				element: <BrandsPage />,
			},
			{
				path: "vendors",
				element: <VendorsPage />,
			},
			{
				path: "shop-view",
				element: <ShopViewPage />,
			},
			{
				path: "products",
				element: <ProductsPages />,
			},
			{
				path: "customer/auth/sign-up",
				element: <SignUpForm />,
			},
			{
				path: "customer/auth/sign-in",
				element: <SignInForm />,
			},
		],
	},
	// {
	// 	path: "/customer/auth",
	// 	element: <AuthLayout />,
	// 	children: [
	// 		{
	// 			path: "sign-up",
	// 			element: <SignUpForm />,
	// 		},
	// 		{
	// 			path: "sign-in",
	// 			element: <SignInForm />,
	// 		},
	// 	],
	// },
]);

export default router;
