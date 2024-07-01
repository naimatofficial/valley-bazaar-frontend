import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import SignUpForm from "./_auth/Forms/SignUpForm";
import SignInForm from "./_auth/Forms/SignInForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <Home />,
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
