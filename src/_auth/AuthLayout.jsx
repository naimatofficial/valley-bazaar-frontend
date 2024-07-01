import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<div>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<Outlet />
			</div>
		</div>
	);
};

export default AuthLayout;
