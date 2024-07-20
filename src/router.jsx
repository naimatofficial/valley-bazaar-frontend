import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import SignUpForm from "./_auth/Forms/SignUpForm";
import SignInForm from "./_auth/Forms/SignInForm";

// Pages
import HomePage from "./_root/pages/HomePage";
import BrandsPage from "./_root/pages/BrandsPage";
import ShopViewPage from "./_root/pages/ShopViewPage";
import ProductsPage from "./_root/pages/ProductsPage";
import VendorLoginForm from "./components/Seller/VendorLoginForm";
import VendorRegisterPage from "./_root/pages/VendorRegisterPage";
import VendorsPage from "./_root/pages/VendorsPage";
import CheckoutPage from "./_root/pages/CheckoutPage";
import ShopingCart from "./components/Cart/ShoppingCart";
import BillingAddressForm from "./components/Checkout/BillingAddressForm";
import PaymentMethod from "./components/Checkout/PaymentMethod";
import FaqPage from "./_root/pages/FaqPage";
import ContactUsPage from "./_root/pages/ContactUsPage";
import AboutUsPage from "./_root/pages/AboutUsPagae";
import CartPage from "./_root/pages/CartPage";
import CategoriesPage from "./_root/pages/CategoriesPage";
import ProductDialog from "./components/Product/ProductDialog";

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
				path: "categories",
				element: <CategoriesPage />,
			},
			{
				path: "vendors",
				element: <VendorsPage />,
			},
			{
				path: "shop-view/:vendorId",
				element: <ShopViewPage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
				children: [
					{
						path: ":productQuickId",
						element: <ProductDialog />,
					},
				],
			},

			{
				path: "customer/auth/sign-up",
				element: <SignUpForm />,
			},
			{
				path: "customer/auth/sign-in",
				element: <SignInForm />,
			},
			{
				path: "cart",
				element: <CartPage />,
			},
			{
				path: "checkout",
				element: <CheckoutPage />,
				children: [
					{
						path: "cart",
						element: <ShopingCart />,
					},
					{
						path: "billing-address",
						element: <BillingAddressForm />,
					},
					{
						path: "payment-method",
						element: <PaymentMethod />,
					},
				],
			},
			{
				path: "about-us",
				element: <AboutUsPage />,
			},
			{
				path: "contact-us",
				element: <ContactUsPage />,
			},
			{
				path: "faqs",
				element: <FaqPage />,
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
